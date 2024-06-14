<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('patients', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('last_name');
            $table->string('gender');
            $table->integer('num_id');
            $table->string('email');
            $table->date('birth_date');
            $table->string('address');
            $table->float('height', 4, 3);
            $table->float('weight', 5, 2);
            $table->string('allergy') -> nullable();
            $table->string('personalHistory') -> nullable();
            $table->string('familyHistory') -> nullable();
            $table->timestamps('');
        });

        Schema::create('doctors', function (Blueprint $table) {
            $table->id();
            $table->string('type_id');
            $table->integer('num_id');
            $table->string('name');
            $table->string('last_name');
            $table->string('email');
            $table->string('phone');
            $table->string('specialty');
            $table->string('professional_register');
            $table->timestamps();
        });

        Schema::create('Administrators', function (Blueprint $table) {
            $table->id();
            $table->string('type_id');
            $table->integer('num_id');
            $table->string('name');
            $table->string('last_name');
            $table->string('email');
            $table->string('phone');
            $table->string('specialty');
            $table->string('professional_register');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('patients');
    }
};
