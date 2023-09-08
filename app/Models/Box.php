<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class Box extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'cell_id',
        'invoice',
        'customer',
        'product'
    ];

    public function cell(): BelongsTo
    {
        return $this->belongsTo(Cell::class);
    }

}
