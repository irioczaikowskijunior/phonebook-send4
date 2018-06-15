<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Contacts extends Model
{
    //
    protected $fillable = [
        'name', 'lastname', 'email', 'phone_number'
    ];

    public $timestamps = false;

    public function messages()
    {
        return $this->hasMany('App\Messages', 'contact_id');
    }
}
