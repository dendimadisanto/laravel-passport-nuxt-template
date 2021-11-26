<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Hubungan extends Model
{
    protected $table = 'master_hubungan';
    protected $primaryKey = 'hubungan_id';
    protected $guarded = [];
    public $timestamps = false;
}
