<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class player extends Model
{
    protected $fillable = [
        'tim',
        'nama',
        'nick'
    ];
}
