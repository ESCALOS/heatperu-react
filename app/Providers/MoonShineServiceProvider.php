<?php

declare(strict_types=1);

namespace App\Providers;

use App\MoonShine\Resources\BrandResource;
use App\MoonShine\Resources\CategoryResource;
use App\MoonShine\Resources\CommodityResource;
use App\MoonShine\Resources\FamilyResource;
use App\MoonShine\Resources\SegmentResource;
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
            MenuGroup::make(static fn () => __('moonshine::ui.resource.system'), [
                MenuItem::make(
                    static fn () => __('moonshine::ui.resource.users_title'),
                    new MoonShineUserResource,
                ),
                MenuItem::make(
                    static fn () => __('moonshine::ui.resource.role_title'),
                    new MoonShineUserRoleResource,
                    'heroicons.shield-exclamation'
                ),
            ], 'heroicons.user-group')
                ->canSee(fn (Request $request) => $request->user('moonshine')?->moonshine_user_role_id === 1),
            MenuItem::make(__('moonshine::ui.resource.segments_title'), new SegmentResource, 'heroicons.rectangle-group'),
            MenuItem::make(__('moonshine::ui.resource.families_title'), new FamilyResource, 'heroicons.chart-pie'),
            MenuItem::make(__('moonshine::ui.resource.categories_title'), new CategoryResource, 'heroicons.tag'),
            MenuItem::make(__('moonshine::ui.resource.brands_title'), new BrandResource, 'heroicons.bookmark'),
            MenuItem::make(__('moonshine::ui.resource.commodities_title'), new CommodityResource, 'heroicons.cube'),
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
