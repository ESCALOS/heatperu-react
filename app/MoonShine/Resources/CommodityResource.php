<?php

declare(strict_types=1);

namespace App\MoonShine\Resources;

use App\Models\Brand;
use App\Models\Category;
use App\Models\Commodity;
use App\Models\Family;
use GianTiaga\MoonshineFile\Fields\SpatieUppyFile;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Request;
use MoonShine\ActionButtons\ActionButton;
use MoonShine\Components\MoonShineComponent;
use MoonShine\Fields\Field;
use MoonShine\Fields\ID;
use MoonShine\Fields\Relationships\BelongsTo;
use MoonShine\Fields\Select;
use MoonShine\Fields\Switcher;
use MoonShine\Fields\Text;
use MoonShine\Fields\TinyMce;
use MoonShine\Handlers\ImportHandler;
use MoonShine\MoonShineRequest;
use MoonShine\MoonShineUI;
use MoonShine\QueryTags\QueryTag;
use MoonShine\Resources\ModelResource;

/**
 * @extends ModelResource<Commodity>
 */
class CommodityResource extends ModelResource
{
    protected string $model = Commodity::class;

    protected string $title = 'Productos';

    protected array $with = ['brand', 'category'];

    public string $column = 'name';

    protected int $itemsPerPage = 10;

    public function search(): array
    {
        return ['category.name', 'brand.name', 'sku', 'name', 'model'];
    }

    public function filters(): array
    {
        $families = Family::with('categories')->get();
        $resultFamilies = $families->mapWithKeys(fn ($family) => [$family->name => $family->categories->pluck('name', 'id')->toArray()])->toArray();

        return [
            Select::make('Clase', 'category_id')
                ->options($resultFamilies)
                ->nullable()
                ->multiple(),
            Select::make('Marca', 'brand_id')
                ->options(Brand::get()->pluck('name', 'id')->toArray())
                ->nullable()
                ->multiple(),
            Text::make('SKU', 'sku'),
            Text::make('Nombre', 'name'),
            Text::make('Modelo', 'model')->sortable(),
        ];
    }

    public function queryTags(): array
    {
        return [
            QueryTag::make(
                'Con stock',
                fn (Builder $query) => $query->where('available', true)
            ),
            QueryTag::make(
                'Sin stock',
                fn (Builder $query) => $query->where('available', false)
            ),
            QueryTag::make(
                'Eliminados',
                fn (Builder $query) => $query->onlyTrashed()
            ),
        ];
    }

    public function importFields(): array
    {
        return [
            Text::make('FAMILIA', 'familia'),
            Text::make('CLASE', 'category_id'),
            Text::make('MARCA', 'brand_id'),
            Text::make('SKU', 'sku'),
            Text::make('PRODUCTO', 'name'),
            Text::make('MODELO', 'model'),
            Text::make('DISPONIBLE', 'available'),
        ];
    }

    public function beforeImportFilling(array $data): array
    {
        $family = Family::firstOrCreate(
            ['name' => $data['familia']],
        );

        $category = Category::firstOrCreate(
            ['name' => $data['category_id']],
            ['family_id' => $family->id]
        );

        $brand = Brand::firstOrCreate(
            ['name' => $data['brand_id']],
        );

        $data['category_id'] = $category->id;
        $data['brand_id'] = $brand->id;
        $data['available'] = isset($data['available']) ? $data['available'] !== 'no' : true;

        return $data;
    }

    public function beforeImported(Model $item): Commodity
    {
        $commodity = new Commodity;
        $commodity->sku = $item->sku;
        $commodity->name = $item->name;
        $commodity->brand_id = $item->brand_id;
        $commodity->model = $item->model;
        $commodity->description = $item->description;
        $commodity->available = $item->available;
        $commodity->category_id = $item->category_id;

        return $commodity;
    }

    public function import(): ?ImportHandler
    {
        return ImportHandler::make('Importar')->queue();
    }

    public function redirectAfterSave(): string
    {
        $referer = Request::header('referer');

        return $referer ?: '/';
    }

    /**
     * @return list<Field>
     */
    public function indexFields(): array
    {
        return [
            ID::make()->sortable(),
            BelongsTo::make('Marca', 'brand'),
            Text::make('SKU', 'sku')->sortable(),
            Text::make('Nombre', 'name')->sortable(),
            Text::make('Modelo', 'model')->sortable(),
            Switcher::make('¿Disponible?', 'available')
                ->updateOnPreview(),
            BelongsTo::make('Clase', 'category'),
            SpatieUppyFile::make('Imágenes', 'commodities')
                ->multiple()
                ->countFiles(5)
                ->image(),
        ];
    }

    protected function modifyDeleteButton(ActionButton $button): ActionButton
    {
        return $button->canSee(fn (Model $item) => ! $item->trashed());
    }

    protected function modifyDetailButton(ActionButton $button): ActionButton
    {
        return $button->canSee(fn (Model $item) => ! $item->trashed());
    }

    protected function modifyEditButton(ActionButton $button): ActionButton
    {
        return $button->canSee(fn (Model $item) => ! $item->trashed());
    }

    public function buttons(): array
    {
        return [
            ActionButton::make('Restaurar', fn (): string => Request::header('referer') ?: '/')
                ->method('restoreCommodity', params: fn (Model $item) => ['commodity_id' => $item->id])
                ->canSee(fn (Model $item) => $item->trashed())
                ->success()
                ->icon('heroicons.arrow-uturn-left'),
        ];
    }

    public function restoreCommodity(MoonShineRequest $request)
    {
        $id = $request->commodity_id;
        $commodity = Commodity::onlyTrashed()->find($id);
        if ($commodity) {
            $commodity->restore();
            MoonShineUI::toast('Restaurado', 'success');
        } else {
            MoonShineUI::toast('No se encontró el registro', 'error');
        }

        return redirect()->back();
    }

    /**
     * @return list<MoonShineComponent|Field>
     */
    public function formFields(): array
    {
        return [
            ID::make()->sortable(),
            BelongsTo::make('Clase', 'category'),
            BelongsTo::make('Marca', 'brand'),
            Text::make('SKU', 'sku')->sortable(),
            Text::make('Nombre', 'name')->sortable(),
            Text::make('Modelo', 'model')->sortable(),
            TinyMce::make('Descripción', 'description')
                ->locale('es'),
            Switcher::make('¿Disponible?', 'available')
                ->default(true),
            SpatieUppyFile::make('Imágenes', 'commodities')
                ->multiple()
                ->countFiles(5)
                ->image(),
        ];
    }

    /**
     * @return list<Field>
     */
    public function detailFields(): array
    {
        return [
            ID::make()->sortable(),
            BelongsTo::make('Familia', 'category', fn ($item) => $item->family->name),
            BelongsTo::make('Clase', 'category'),
            BelongsTo::make('Marca', 'brand'),
            Text::make('SKU', 'sku')->sortable(),
            Text::make('Nombre', 'name')->sortable(),
            Text::make('Modelo', 'model')->sortable(),
            Text::make('Descripción', 'description'),
            Switcher::make('¿Disponible?', 'available')
                ->updateOnPreview(),
            SpatieUppyFile::make('Imágenes', 'commodities')
                ->multiple()
                ->countFiles(5)
                ->image(),
        ];
    }

    /**
     * @param  Commodity  $item
     * @return array<string, string[]|string>
     *
     * @see https://laravel.com/docs/validation#available-validation-rules
     */
    public function rules(Model $item): array
    {
        return [
            'category_id' => ['required', 'exists:categories,id'],
            'brand_id' => ['required', 'exists:brands,id'],
            'sku' => ['required', 'string', 'unique:commodities,sku'],
            'name' => ['required', 'string', 'min:5'],

        ];
    }
}
