<?php

declare(strict_types=1);

namespace App\MoonShine\Resources;

use App\Models\Brand;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Validation\Rule;
use MoonShine\Components\MoonShineComponent;
use MoonShine\Decorations\Block;
use MoonShine\Fields\Field;
use MoonShine\Fields\ID;
use MoonShine\Fields\Relationships\HasMany;
use MoonShine\Fields\Text;
use MoonShine\Resources\ModelResource;

/**
 * @extends ModelResource<Brand>
 */
class BrandResource extends ModelResource
{
    protected string $model = Brand::class;

    protected string $title = 'Marcas';

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
                Text::make('Marca', 'name'),
                HasMany::make('Productos', 'commodities')
                    ->hideOnUpdate()
                    ->hideOnIndex()
                    ->creatable(),
            ]),
        ];
    }

    /**
     * @param  Brand  $item
     * @return array<string, string[]|string>
     *
     * @see https://laravel.com/docs/validation#available-validation-rules
     */
    public function rules(Model $item): array
    {
        return [
            'name' => ['required', 'string', Rule::unique('brands')->ignore($item->id)],
        ];
    }
}
