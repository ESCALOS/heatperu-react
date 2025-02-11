<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class TutorialCategory extends Model implements HasMedia
{
    use HasFactory;
    use InteractsWithMedia;

    protected $guarded = ['created_at', 'updated_at'];

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($category) {
            $category->slug = Str::slug($category->name);
        });

        static::updating(function ($category) {
            $category->slug = Str::slug($category->name);
        });
    }

    public function tutorials(): HasMany
    {
        return $this->hasMany(Tutorial::class);
    }
}
