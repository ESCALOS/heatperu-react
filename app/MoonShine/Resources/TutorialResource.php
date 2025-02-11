<?php

declare(strict_types=1);

namespace App\MoonShine\Resources;

use Illuminate\Database\Eloquent\Model;
use App\Models\Tutorial;
use App\Models\TutorialCategory;
use MoonShine\Resources\ModelResource;
use MoonShine\Decorations\Block;
use MoonShine\Fields\ID;
use MoonShine\Fields\Field;
use MoonShine\Components\MoonShineComponent;
use MoonShine\Fields\Date;
use MoonShine\Fields\Text;
use MoonShine\Fields\Select;
use MoonShine\Fields\TinyMce;
use MoonShine\Fields\Url;
use MoonShine\Fields\Relationships\BelongsTo;

/**
 * @extends ModelResource<Tutorial>
 */
class TutorialResource extends ModelResource
{
    protected string $model = Tutorial::class;

    protected string $title = 'Tutoriales';

    protected array $with = ['tutorial_category'];

    public string $column = 'name';

    public function search(): array
    {
        return ['tutorial_category.name', 'name'];
    }

    public function filters(): array
    {
        return [
            Select::make('Categoría', 'category_id')
                ->options(TutorialCategory::get()->pluck('name', 'id')->toArray())
                ->nullable()
                ->multiple(),
            Text::make('Nombre', 'name'),
        ];
    }

    /**
     * @return list<MoonShineComponent|Field>
     */
    public function fields(): array
    {
        return [
            Block::make([
                ID::make()->sortable(),
                BelongsTo::make('Categoría', 'tutorial_category', formatted: fn($field) => $field->name, resource: new TutorialCategoryResource())
                    ->required()
                    ->sortable()
                    ->afterFill(fn($field) => $field->setColumn('tutorial_category_id')),
                Text::make('Nombre', 'name')
                    ->required()
                    ->sortable(),
                Date::make('Fecha', 'date')
                    ->format('d/m/Y')
                    ->required(),
                TinyMce::make('Descripción', 'description')
                    ->hideOnIndex()
                    ->required(),
                Url::make('Link del video','url_video')
                    ->required()
                    ->blank()
            ]),
        ];
    }

    /**
     * @param Tutorial $item
     *
     * @return array<string, string[]|string>
     * @see https://laravel.com/docs/validation#available-validation-rules
     */
    public function rules(Model $item): array
    {
        return [];
    }
}
