<?php

namespace App\Http\Controllers;

use App\Models\TutorialCategory;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TutorialCategoryController extends Controller
{
    public function index() {
        $categories = TutorialCategory::with(['media'])->orderBy('name', 'asc')->get();

        return Inertia::render('Tutorials', [
            'categories' => $categories,
        ]);
    }

    public function tutorials_by_category($category) {
        $categoryObj = TutorialCategory::where('slug', $category)->firstOrFail();

        $tutorials = $categoryObj->tutorials()
            ->orderBy('date', 'desc')
            ->get()
            ->map(function ($tutorial) {
                $tutorial->url_video = $this->extractYouTubeId($tutorial->url_video);
                return $tutorial;
            });

        return Inertia::render('TutorialList', [
            'category' => $categoryObj,
            'tutorials' => $tutorials,
        ]);
    }
    function extractYouTubeId($url) {
        preg_match('/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/|youtube\.com\/shorts\/)([^"&?\/\s]{11})/', $url, $matches);
        return $matches[1] ?? null;
    }
}
