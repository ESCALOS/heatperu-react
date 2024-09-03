<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Inertia\Inertia;

class ProjectController extends Controller
{
    public function index()
    {
        $projects = Project::with(['media'])->get();

        return Inertia::render('Projects', [
            'projects' => $projects,
        ]);
    }
}
