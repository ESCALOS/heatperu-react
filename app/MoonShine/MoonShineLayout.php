<?php

declare(strict_types=1);

namespace App\MoonShine;

use MoonShine\Components\Layout\Content;
use MoonShine\Components\Layout\Flash;
use MoonShine\Components\Layout\Header;
use MoonShine\Components\Layout\LayoutBlock;
use MoonShine\Components\Layout\LayoutBuilder;
use MoonShine\Components\Layout\Menu;
use MoonShine\Components\Layout\Profile;
use MoonShine\Components\Layout\Search;
use MoonShine\Components\Layout\Sidebar;
use MoonShine\Components\When;
use MoonShine\Contracts\MoonShineLayoutContract;

final class MoonShineLayout implements MoonShineLayoutContract
{
    public static function build(): LayoutBuilder
    {
        return LayoutBuilder::make([
            Sidebar::make([
                Menu::make(),
                When::make(
                    static fn () => config('moonshine.auth.enable', true),
                    static fn () => [Profile::make(withBorder: true)]
                ),
            ]),
            LayoutBlock::make([
                Flash::make(),
                Header::make([
                    Search::make(),
                ]),
                Content::make(),
            ])->customAttributes(['class' => 'layout-page']),
        ]);
    }
}
