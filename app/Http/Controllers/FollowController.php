<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class FollowController extends Controller
{
    public function follow($userId)
    {
        $user = Auth::user();

        if ($user->id == $userId) {
            return response()->json(['message' => 'Je kunt jezelf niet volgen.'], 400);
        }

        $user->following()->syncWithoutDetaching([$userId]);

        return response()->json(['message' => 'Gebruiker gevolgd.']);
    }


    public function following()
    {
        $user = Auth::user();

        return response()->json($user->following()->get());
    }

    public function unfollow($userId)
    {
        $user = Auth::user();

        $user->following()->detach($userId);

        return response()->json(['message' => 'Gebruiker ontvolgd.']);
    }

    public function followers()
    {
        $user = Auth::user();

        return response()->json($user->followers()->get());
    }
}
