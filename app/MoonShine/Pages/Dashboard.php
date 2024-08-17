<?php

declare(strict_types=1);

namespace App\MoonShine\Pages;

use App\Models\Category;
use App\Models\Commodity;
use MoonShine\Components\MoonShineComponent;
use MoonShine\Components\TableBuilder;
use MoonShine\Decorations\Column;
use MoonShine\Decorations\Grid;
use MoonShine\Decorations\LineBreak;
use MoonShine\Fields\Relationships\BelongsTo;
use MoonShine\Fields\Text;
use MoonShine\Metrics\ValueMetric;
use MoonShine\Pages\Page;
use MoonShine\TypeCasts\ModelCast;

class Dashboard extends Page
{
    /**
     * @return array<string, string>
     */
    public function breadcrumbs(): array
    {
        return [
            '#' => $this->title(),
        ];
    }

    public function title(): string
    {
        return $this->title ?: 'Panel';
    }

    /**
     * @return list<MoonShineComponent>
     */
    public function components(): array
    {
        return [
            Grid::make([
                Column::make([
                    ValueMetric::make('Categorías')
                        ->value(Category::query()->count())
                        ->icon('heroicons.tag'),
                ])->columnSpan(6),
                Column::make([
                    ValueMetric::make('Productos no disponibles')
                        ->value(Commodity::notAvailable()->count())
                        ->progress(Commodity::query()->count()),
                ])->columnSpan(6),
            ]),
            LineBreak::make(),
            TableBuilder::make(
                items: Commodity::with('category')->paginate()
            )
                ->fields([
                    BelongsTo::make('Categoría', 'category'),
                    Text::make('SKU', 'sku'),
                    Text::make('Nombre', 'name'),
                    Text::make('¿Disponible?', 'available', fn ($item) => $item->available ? 'Sí' : 'No')
                        ->badge(fn ($status) => $status ? 'green' : 'red'),
                ])
                ->cast(ModelCast::make(Commodity::class)),
        ];
    }
}
