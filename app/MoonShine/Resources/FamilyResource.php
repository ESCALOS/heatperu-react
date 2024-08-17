<?php

declare(strict_types=1);

namespace App\MoonShine\Resources;

use App\Models\Family;
use GianTiaga\MoonshineFile\Fields\SpatieUppyFile;
use Illuminate\Database\Eloquent\Model;
use MoonShine\Components\MoonShineComponent;
use MoonShine\Decorations\Block;
use MoonShine\Fields\Field;
use MoonShine\Fields\ID;
use MoonShine\Fields\Relationships\BelongsTo;
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

    protected array $with = ['segment'];

    public function search(): array
    {
        return ['segment.name', 'name'];
    }

    /**
     * @return list<MoonShineComponent|Field>
     */
    public function fields(): array
    {
        return [
            Block::make([
                ID::make()->sortable(),
                Text::make('Nombre', 'name')->sortable(),
                BelongsTo::make('Segmento', 'segment')->searchable(),
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
            'segment_id' => ['required', 'exists:segments,id'],
            'name' => ['required', 'string'],
        ];
    }
}
