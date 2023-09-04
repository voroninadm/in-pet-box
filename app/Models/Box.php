<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Box extends Model
{
    use HasFactory;

    protected $fillable = [
        'invoice',
        'customer',
        'product'
    ];

    public function cell(): BelongsTo
    {
        return $this->belongsTo(Cell::class);
    }

}
