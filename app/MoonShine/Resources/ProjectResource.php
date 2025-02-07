<?php

declare(strict_types=1);

namespace App\MoonShine\Resources;

use App\Models\Project;
use GianTiaga\MoonshineFile\Fields\SpatieUppyFile;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Validation\Rule;
use MoonShine\Components\MoonShineComponent;
use MoonShine\Decorations\Block;
use MoonShine\Fields\Date;
use MoonShine\Fields\ID;
use MoonShine\Fields\Text;
use MoonShine\Fields\TinyMce;
use MoonShine\Resources\ModelResource;

/**
 * @extends ModelResource<Project>
 */
class ProjectResource extends ModelResource
{
    protected string $model = Project::class;

    protected string $title = 'Projectos';

    /**
     * @return list<MoonShineComponent|Field>
     */
    public function fields(): array
    {
        return [
            Block::make([
                ID::make()->sortable(),
                Text::make('Nombre', 'name')
                    ->sortable(),
                Date::make('Fecha', 'date')
                    ->format('d/m/Y'),
                TinyMce::make('Descripción', 'description')
                    ->hideOnIndex(),
                SpatieUppyFile::make('Imágenes', 'projects')
                    ->image()
                    ->countFiles(5),
            ]),
        ];
    }

    /**
     * @param  Project  $item
     * @return array<string, string[]|string>
     *
     * @see https://laravel.com/docs/validation#available-validation-rules
     */
    public function rules(Model $item): array
    {
        return [
            'name' => ['required', 'string', Rule::unique('projects')->ignore($item->id)],
            'date' => ['required', 'date'],
        ];
    }
}
