<?php

namespace App\Http\Controllers;

use App\Models\Commodity;
use Inertia\Inertia;

class CommodityController extends Controller
{
    public function index()
    {
        $commodities = Commodity::with(['category.family', 'media', 'brand'])->paginate(20);

        return Inertia::render('CommodityList', [
            'commodities' => $commodities,
        ]);
    }

    public function show($family, $category, $commodity)
    {
        $commodity = Commodity::with(['media', 'brand'])->where('slug', $commodity)->firstOrFail();

        return Inertia::render('CommodityDetail', [
            'commodity' => $commodity,
        ]);
    }
}
