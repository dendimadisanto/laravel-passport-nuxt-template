<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Agama extends Model
{
    protected $table = 'master_agama';
    protected $primaryKey = 'agama_id';
    protected $guarded = [];
    public $timestamps = false;
}
