<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateArticlesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('articles', function (Blueprint $table) {
            $table->increments('id');
            $table->string('cover');
            $table->string('title')->index();
            $table->text('describe');
            $table->text('content');
            $table->integer('weight')->default(0)->index();
            $table->timestamps();
        });

        Schema::create('jingses', function (Blueprint $table) {
            $table->increments('id');
            $table->string('cover');
            $table->string('title')->index();
            $table->text('describe');
            $table->integer('weight')->default(0)->index();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('articles');
    }
}
