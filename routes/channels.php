<?php

use Illuminate\Support\Facades\Broadcast;

/*
|--------------------------------------------------------------------------
| Broadcast Channels
|--------------------------------------------------------------------------
|
| Here you may register all of the event broadcasting channels that your
| application supports. The given channel authorization callbacks are
| used to check if an authenticated user can listen to the channel.
|
*/

Broadcast::channel('App.Models.User.{id}', function ($user, $id) {
    return (int) $user->id === (int) $id;
});

Broadcast::channel('box-created-in-{id}-cell', function ( $id) {
    return true;
});

Broadcast::channel('box-updated-in-{id}-cell', function ( $id) {
    return true;
});

Broadcast::channel('box-deleted-in-{id}-cell', function ( $id) {
    return true;
});
