<?php

namespace App\Providers;

use Illuminate\Support\Facades\Broadcast;
use Illuminate\Support\ServiceProvider;

class BroadcastServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application Services.
     */
    public function boot(): void
    {
        Broadcast::routes(['middleware' => ['auth']]);

        require base_path('routes/channels.php');
    }
}
