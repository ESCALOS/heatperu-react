<?php

declare(strict_types=1);

namespace App\MoonShine\Resources;

use App\Models\Segment;
use GianTiaga\MoonshineFile\Fields\SpatieUppyFile;
use Illuminate\Database\Eloquent\Model;
use MoonShine\Components\MoonShineComponent;
use MoonShine\Decorations\Block;
use MoonShine\Fields\Field;
use MoonShine\Fields\ID;
use MoonShine\Fields\Relationships\HasMany;
use MoonShine\Fields\Text;
use MoonShine\Resources\ModelResource;

/**
 * @extends ModelResource<Segments>
 */
class SegmentResource extends ModelResource
{
    protected string $model = Segment::class;

    protected string $title = 'Segmentos';

    public string $column = 'name';

    protected int $itemsPerPage = 10;

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
                Text::make('Nombre', 'name')->sortable(),
                SpatieUppyFile::make('Imagen', 'segments')
                    ->image(),
                HasMany::make('Familias', 'families')
                    ->hideOnIndex()
                    ->hideOnUpdate()
                    ->creatable()
                    ->fields([
                        ID::make()->sortable(),
                        Text::make('Nombre', 'name')->sortable(),
                        SpatieUppyFile::make('Imagen', 'families')
                            ->image(),
                    ]),
            ]),
        ];
    }

    /**
     * @param  Segments  $item
     * @return array<string, string[]|string>
     *
     * @see https://laravel.com/docs/validation#available-validation-rules
     */
    public function rules(Model $item): array
    {
        return [
            'name' => ['required', 'string', 'max:255'],
        ];
    }
}
