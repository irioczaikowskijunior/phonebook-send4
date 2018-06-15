<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Messages extends Model
{
    //
    protected $fillable = [
        'message', 'contact_id'
    ];

    public $timestamps = false;
}
