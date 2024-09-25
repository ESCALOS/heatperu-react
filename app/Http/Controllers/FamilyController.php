<?php

namespace App\Http\Controllers;

use App\Models\Family;
use Inertia\Inertia;

class FamilyController extends Controller
{
    public function show($family)
    {
        $family = Family::where('slug', $family)->firstOrFail();
        $categories = $family->categories()->with('media')->orderBy('name', 'asc')->get();

        return Inertia::render('CategoryList', [
            'family' => $family,
            'categories' => $categories,
        ]);
    }
}
