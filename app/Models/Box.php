<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Box extends Model
{
    use HasFactory;

    public const TOTAL_CELLS = 24;

    protected $fillable = [
        'cell',
        'invoice',
        'customer',
        'product'
    ];
}
