<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Commodity;
use Inertia\Inertia;

class CategoryController extends Controller
{
    public function show(string $family, string $category)
    {
        $categoryModel = Category::where('slug', $category)->firstOrFail();
        $commodities = Commodity::with(['category.family', 'media'])->where('category_id', $categoryModel->id)->paginate(16);

        return Inertia::render('CommodityList', [
            'category' => $categoryModel,
            'commodities' => $commodities,
        ]);
    }
}
