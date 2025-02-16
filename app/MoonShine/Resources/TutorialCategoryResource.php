<?php

declare(strict_types=1);

namespace App\MoonShine\Resources;

use Illuminate\Database\Eloquent\Model;
use App\Models\TutorialCategory;
use GianTiaga\MoonshineFile\Fields\SpatieUppyFile;
use Illuminate\Validation\Rule;
use MoonShine\Resources\ModelResource;
use MoonShine\Decorations\Block;
use MoonShine\Fields\ID;
use MoonShine\Fields\Text;
use MoonShine\Fields\Field;
use MoonShine\Components\MoonShineComponent;

/**
 * @extends ModelResource<TutorialCategory>
 */
class TutorialCategoryResource extends ModelResource
{
    protected string $model = TutorialCategory::class;

    protected string $title = 'Categorías de tutoriales';

    /**
     * @return list<MoonShineComponent|Field>
     */
    public function fields(): array
    {
        return [
            Block::make([
                ID::make()->sortable(),
                Text::make('Nombre', 'name')
                    ->sortable()
                    ->unescape()
                    ->unescape(),
                SpatieUppyFile::make('Imagen', 'tutorial_categories')
                    ->image(),
            ]),
        ];
    }

    /**
     * @param TutorialCategory $item
     *
     * @return array<string, string[]|string>
     * @see https://laravel.com/docs/validation#available-validation-rules
     */
    public function rules(Model $item): array
    {
        return [
            'name' => ['required', 'string', Rule::unique('tutorial_categories')->ignore($item->id)],
        ];
    }
}
