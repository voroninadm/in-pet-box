<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Cell extends Model
{
    use HasFactory;

    public const TOTAL_CELLS = 24;

    protected $fillable = [
        'cell',
    ];

    public function box(): HasOne
    {
        return $this->hasOne(Box::class);
    }
}
