<?php

namespace App\Http\Controllers;

use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;

class APIController extends Controller
{
    public function login(Request $request)
    {
        $email = $request->email;

        $password = Hash::make($request->password);

        $validator = Validator::make($request->all(), [
            "email" => "required|email",
            "password" => "required",
        ]);

        if ($validator->fails()) {
            return response()->json([
                "errors" => $validator->errors()->all(),
            ], 400);
        }

        try {
            if (Auth::attempt(['email' => $email, 'password' => $password])) {
                return response()->json([
                    "message" => "Login Successfully!",
                ], 200);
            } else {
                return response()->json([
                    "message" => "Not Authenticated!",
                ], 401);
            }
        } catch (Exception $e) {
            Log::error($e->getMessage);
            return response()->json([
                "message" => "Not Authenticated!",
            ], 400);
        }
    }
}
