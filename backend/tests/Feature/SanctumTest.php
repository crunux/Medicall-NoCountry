<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class SanctumTest extends TestCase
{
    use RefreshDatabase;
    
    public function test_user_can_login(): void
    {
        $user = User::factory()->create([
            'email' => 'pepe@pepe.com',
            'name' => 'pepe Garcia'
        ]);

        $response = $this->post('/api/login', [
            'email' => $user->email,
            'password' => 'password',
        ]);

        $response->assertStatus(200);
        $response->assertJsonStructure([
            'user' => ['email', 'name'],
            'tocken'
        ]);
    }
}
