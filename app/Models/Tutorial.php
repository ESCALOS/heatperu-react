<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Str;

class Tutorial extends Model
{
    use HasFactory;

    protected $guarded = ['created_at', 'updated_at'];

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($tutorial) {
            $tutorial->slug = Str::slug($tutorial->name);
        });

        static::updating(function ($tutorial) {
            $tutorial->slug = Str::slug($tutorial->name);
        });
    }

    public function tutorial_category(): BelongsTo
    {
        return $this->belongsTo(TutorialCategory::class);
    }
}
