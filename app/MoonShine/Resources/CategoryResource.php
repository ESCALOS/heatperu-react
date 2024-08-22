<?php

declare(strict_types=1);

namespace App\MoonShine\Resources;

use App\Models\Category;
use GianTiaga\MoonshineFile\Fields\SpatieUppyFile;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Request;
use Illuminate\Validation\Rule;
use MoonShine\Components\MoonShineComponent;
use MoonShine\Decorations\Block;
use MoonShine\Fields\Field;
use MoonShine\Fields\ID;
use MoonShine\Fields\Relationships\BelongsTo;
use MoonShine\Fields\Relationships\HasMany;
use MoonShine\Fields\Text;
use MoonShine\Resources\ModelResource;

/**
 * @extends ModelResource<Category>
 */
class CategoryResource extends ModelResource
{
    protected string $model = Category::class;

    protected string $title = ' Clases';

    public string $column = 'name';

    protected int $itemsPerPage = 10;

    protected array $with = ['family'];

    public function redirectAfterSave(): string
    {
        $referer = Request::header('referer');

        return $referer ?: '/';
    }

    public function search(): array
    {
        return ['family.name', 'name'];
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
                BelongsTo::make('Familia', 'family')->sortable(),
                HasMany::make('Productos', 'commodities')
                    ->hideOnUpdate()
                    ->hideOnIndex()
                    ->creatable(),
                SpatieUppyFile::make('Imagen', 'categories')
                    ->image(),
            ]),
        ];
    }

    /**
     * @param  Category  $item
     * @return array<string, string[]|string>
     *
     * @see https://laravel.com/docs/validation#available-validation-rules
     */
    public function rules(Model $item): array
    {
        return [
            'family_id' => ['required', 'exists:families,id'],
            'name' => ['required', 'string', Rule::unique('categories')->ignore($item->id)],
        ];
    }
}
