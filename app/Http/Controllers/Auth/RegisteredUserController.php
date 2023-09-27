<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Validation\Rule;
use Illuminate\Validation\Rules;
use Illuminate\Validation\Rules\Password;
use Inertia\Inertia;
use Inertia\Response;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function users(): Response
    {
        $users = User::all()->except(Auth::id());
        return Inertia::render('Users/UsersPage', [
            'users' => $users
        ]);
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:'.User::class,
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
            'is_admin' => 'boolean'
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'is_admin' => $request->is_admin
        ]);

        return Redirect::route('users.show');
    }

    public function edit (User $id)
    {
        return Inertia::render('Users/UsersProfilePage', [
            'user' => $id
        ]);
    }

    public function updateProfile (Request $request)
    {
        $request->validate([
            'user_id' => 'required|integer',
            'name' => 'required|string|max:255',
            'email' => ['required','string','email','max:255', Rule::unique('users')->ignore($request->user_id)],
            'is_admin' => 'boolean'
        ]);

        $user = User::find($request->user_id);
        $user->update([
            'name' => $request->input('name'),
            'email' => $request->input('email'),
            'is_admin' => $request->input('is_admin'),
        ]);

        return redirect()->back();
    }

    public function updatePassword (Request $request) {
        $request->validate([
            'user_id' => 'required|integer',
            'password' => ['required', Password::defaults(), 'confirmed'],
        ]);
        $user = User::find($request->user_id);

        $user->update([
            'password' => Hash::make($request->password)
        ]);

        return redirect()->back();
    }
}
