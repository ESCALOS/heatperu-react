<?php

declare(strict_types=1);

namespace App\MoonShine\Resources;

use App\Models\Family;
use GianTiaga\MoonshineFile\Fields\SpatieUppyFile;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Request;
use Illuminate\Validation\Rule;
use MoonShine\Components\MoonShineComponent;
use MoonShine\Decorations\Block;
use MoonShine\Fields\Field;
use MoonShine\Fields\ID;
use MoonShine\Fields\Relationships\HasMany;
use MoonShine\Fields\Text;
use MoonShine\Resources\ModelResource;

/**
 * @extends ModelResource<Family>
 */
class FamilyResource extends ModelResource
{
    protected string $model = Family::class;

    protected string $title = 'Familia';

    public string $column = 'name';

    protected int $itemsPerPage = 10;

    public function redirectAfterSave(): string
    {
        $referer = Request::header('referer');

        return $referer ?: '/';
    }

    public function search(): array
    {
        return ['name'];
    }

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
                    ->unescape(),
                HasMany::make('Categoría', 'categories')
                    ->hideOnIndex()
                    ->hideOnUpdate()
                    ->creatable(),
                SpatieUppyFile::make('Imagen', 'families')
                    ->image(),
            ]),
        ];
    }

    /**
     * @param  Family  $item
     * @return array<string, string[]|string>
     *
     * @see https://laravel.com/docs/validation#available-validation-rules
     */
    public function rules(Model $item): array
    {
        return [
            'name' => ['required', 'string', Rule::unique('families')->ignore($item->id)],
        ];
    }
}
