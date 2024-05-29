<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ProductController;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');
});

Route::post('/login',function (Request $request) {
    $user = User::where('email', $request->input('email'))->first();

    if (!$user || !Hash::check($request->password, $user->password)) {
        return response()->json([
            'message' => 'Credenciales incorrectas'
        ], 401);
    }

    return response()->json([
        'user' => [
            'name' => $user->name,
            'email' => $user->email,
        ],
        'tocken' => $user->createToken('api')->plainTextToken,
    ]);
});



Route::post('register', [AuthController::class, 'register']);
Route::post('login', [AuthController::class, 'login']);


Route::middleware(['auth:sanctum'])->group(function (){
    Route::get('logout', [AuthController::class, 'logout']);
    Route::get('products', [ProductController::class, 'index']);
});