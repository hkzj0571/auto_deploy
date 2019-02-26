<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->increments('id');
            $table->string('cover')->comment('图片');
            $table->string('name')->comment('名称');
            $table->decimal('pricing')->comment('价格');
            $table->integer('weight')->default(0)->comment('排序');
            $table->unsignedInteger('first_category_id')->comment('第一个分类 ID');
            $table->unsignedInteger('second_category_id')->comment('第二个分类 ID');
            $table->text('describe')->comment('描述');
            $table->text('content')->comment('详情');
            $table->string('tb_link')->nullable();
            $table->string('tm_link')->nullable();
            $table->string('jd_link')->nullable();
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
        Schema::dropIfExists('products');
    }
}
