<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMessagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('messages', function (Blueprint $table) {
            $table->increments('id');
            $table->text('message');
            $table->integer('contact_id')->unsigned();
        });

        // add foreign keys
        Schema::table('messages', function (Blueprint $table) {
            if (Schema::hasColumn('contacts', 'id') && Schema::hasColumn('messages', 'contact_id')) {
                $table->foreign('contact_id')->references('id')->on('contacts');
            }
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('messages');
    }
}
