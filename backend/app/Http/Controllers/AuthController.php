<?php

namespace App\Http\Controllers;

use App\Models\Patient;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator as FacadesValidator;
use stdClass;
use Validator;

class AuthController extends Controller
{
    public function register(Request $request){
        $validator = FacadesValidator::make($request->all(),[
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8',
            'type_profile'  => 'required|integer|max:2' 
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors());
        }
        
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'type_profile' => $request->type_profile
        ]);

        if ($request->type_profile == 1 ) {
            $patient = Patient::create([
                'name' => $request->name,
                'last_name' => $request->lastName,
                'gender' => $request->genero,
                'num_id' => $request->personalId,
                'email' => $request->email,
                'birth_date' => $request->bornDate,
                'address' => $request->address,
                'height' => $request->height,
                'weight' => $request->weight,
                'allergy' => $request->allergy,
                'personalHistory' => $request->personalHistory,
                'familyHistory' => $request->familyHistory,
            ]);
        }

        $token = $user->createToken('auth_token')->plainTextToken;

        return response()
            ->json(['data' => $user, 'access_token' => $token, 'token_type' => 'Bearer',]);
    }

    public function login(Request $request){
        if (!Auth::attempt($request->only('email', 'password'))) {
            return response()
                ->json(['message' => 'Unautorized'],401);
        }
        $user = User::where('email', $request['email'])->firstOrFail();

        $token = $user->createToken('auth_token')->plainTextToken;

        return response()
            ->json([
                'message' => 'Hi '. $user->name,
                'accesTocke' => $token,
                'token_type' => 'Bearer',
                'user' => $user,
            ]);
        
    }

    public function logout(){
        auth()->user()->tokens()->delete();
        
        return [
            'message' => 'You have successfully logged out and the token was successfully deleted'
        ];
    }
}



