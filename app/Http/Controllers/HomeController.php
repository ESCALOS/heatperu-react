<?php

namespace App\Http\Controllers;

use App\Models\Commodity;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index(Request $request)
    {
        $search = $request->query('search');
        $commodities = null;
        if ($search) {
            $commodities = Commodity::with(['category.family', 'media', 'brand'])
                ->where(function ($query) use ($search) {
                    $query->where('name', 'like', '%'.$search.'%')
                        ->orWhere('sku', $search);
                })
                ->orWhereHas('brand', function ($q) use ($search) {
                    $q->where('name', 'like', '%'.$search.'%');
                })
                ->orderBy('name', 'asc')
                ->get();
        }

        return Inertia::render('Home', [
            'commodities' => $commodities,
        ]);
    }
}
