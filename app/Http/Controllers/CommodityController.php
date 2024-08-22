<?php

namespace App\Http\Controllers;

use App\Models\Commodity;
use Inertia\Inertia;

class CommodityController extends Controller
{
    public function index()
    {
        $commodities = Commodity::with(['category.family', 'media'])->paginate(16);

        return Inertia::render('CommodityList', [
            'commodities' => $commodities,
        ]);
    }

    public function show($family, $category, $commodity)
    {
        $commodity = Commodity::with(['media'])->where('slug', $commodity)->firstOrFail();

        return Inertia::render('CommodityDetail', [
            'commodity' => $commodity,
        ]);
    }
}
