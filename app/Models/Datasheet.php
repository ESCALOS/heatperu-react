<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Datasheet extends Model
{
    use HasFactory;

    public function commodity(): BelongsTo
    {
        return $this->belongsTo(Commodity::class);
    }
}
