<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasManyThrough;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Str;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class Family extends Model implements HasMedia
{
    use HasFactory;
    use InteractsWithMedia;
    use SoftDeletes;

    protected $guarded = ['created_at', 'updated_at', 'deleted_at'];

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($family) {
            $family->slug = Str::slug($family->name);
        });

        static::updating(function ($family) {
            $family->slug = Str::slug($family->name);
        });
    }

    public function categories(): HasMany
    {
        return $this->hasMany(Category::class);
    }

    public function commodities(): HasManyThrough
    {
        return $this->hasManyThrough(Commodity::class, Category::class)
            ->select('commodities.*', 'categories.name as category_name');
    }
}
