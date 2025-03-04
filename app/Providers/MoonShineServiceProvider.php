<?php

declare(strict_types=1);

namespace App\Providers;

use App\MoonShine\Resources\BrandResource;
use App\MoonShine\Resources\CategoryResource;
use App\MoonShine\Resources\CommodityResource;
use App\MoonShine\Resources\FamilyResource;
use App\MoonShine\Resources\ProjectResource;
use App\MoonShine\Resources\TutorialCategoryResource;
use App\MoonShine\Resources\TutorialResource;
use Closure;
use Illuminate\Http\Request;
use MoonShine\Contracts\Resources\ResourceContract;
use MoonShine\Menu\MenuElement;
use MoonShine\Menu\MenuGroup;
use MoonShine\Menu\MenuItem;
use MoonShine\Pages\Page;
use MoonShine\Providers\MoonShineApplicationServiceProvider;
use MoonShine\Resources\MoonShineUserResource;
use MoonShine\Resources\MoonShineUserRoleResource;

class MoonShineServiceProvider extends MoonShineApplicationServiceProvider
{
    /**
     * @return list<ResourceContract>
     */
    protected function resources(): array
    {
        return [];
    }

    /**
     * @return list<Page>
     */
    protected function pages(): array
    {
        return [];
    }

    /**
     * @return Closure|list<MenuElement>
     */
    protected function menu(): array
    {
        return [
            MenuGroup::make(static fn () => __('System'), [
                MenuItem::make(
                    static fn () => __('Users'),
                    new MoonShineUserResource,
                ),
                MenuItem::make(
                    static fn () => __('Roles'),
                    new MoonShineUserRoleResource,
                    'heroicons.shield-exclamation'
                ),
            ], 'heroicons.user-group')
                ->canSee(fn (Request $request) => $request->user('moonshine')?->moonshine_user_role_id === 1),
            MenuItem::make(__('Projects'), new ProjectResource, 'heroicons.folder'),
            MenuItem::make(__('Families'), new FamilyResource, 'heroicons.chart-pie'),
            MenuItem::make(__('Classes'), new CategoryResource, 'heroicons.tag'),
            MenuItem::make(__('Brands'), new BrandResource, 'heroicons.bookmark'),
            MenuItem::make(__('Commodities'), new CommodityResource, 'heroicons.cube'),
            MenuGroup::make(static fn () => __('Tutorials'), [
                MenuItem::make(
                    static fn () => __('Categories'),
                    new TutorialCategoryResource,
                    'heroicons.tag'
                ),
                MenuItem::make(
                    static fn () => __('List'),
                    new TutorialResource,
                    'heroicons.tag'
                ),
            ], 'heroicons.video-camera'),
        ];
    }

    /**
     * @return Closure|array{css: string, colors: array, darkColors: array}
     */
    protected function theme(): array
    {
        return [];
    }
}
