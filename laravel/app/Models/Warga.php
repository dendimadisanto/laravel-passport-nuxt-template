<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Warga extends Model
{
    use HasFactory;
    protected $table = 'warga';
    protected $primaryKey = 'WARGA_ID';
    protected $fillable = ['FOTO'];
    public $timestamps = false;
}
