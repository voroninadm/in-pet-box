<?php

namespace App\Console;

use App\Notifications\BackupCleaned;
use App\Notifications\BackupSuccessful;
use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Notification;

class Kernel extends ConsoleKernel
{
    /**
     * Define the application's command schedule.
     */
    protected function schedule(Schedule $schedule): void
    {
        $schedule->command('app:check-overdue-boxes')->daily()->at('12:00');

        $schedule->command('backup:clean')->onSuccess(function () {
            Notification::route('telegram', 'TELEGRAM_CHAT_ID')
                ->notify(new BackupCleaned());
        });

        $schedule->command('backup:run')->onSuccess(function () {
            Notification::route('telegram', 'TELEGRAM_CHAT_ID')
                ->notify(new BackupSuccessful());
        });;
    }

    /**
     * Register the commands for the application.
     */
    protected function commands(): void
    {
        $this->load(__DIR__ . '/Commands');

        require base_path('routes/console.php');
    }
}
