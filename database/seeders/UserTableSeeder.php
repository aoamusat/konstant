<?php

namespace Database\Seeders;

use App\Models\User;
use Faker\Factory;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Factory::create();

        for ($i = 0; $i < 50; $i++) {
            User::create([
                "name" => $faker->name,
                "email" => $faker->email,
                "password" => bcrypt("password"),
                "email_verified_at" => date("Y-m-d H:i:s"),
                "remember_token" => Str::random(16),
            ]);
        }
    }
}
