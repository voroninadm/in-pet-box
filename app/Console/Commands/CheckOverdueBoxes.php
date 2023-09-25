<?php

namespace App\Console\Commands;

use App\Models\Box;
use App\Notifications\BoxOverdueNotification;
use Illuminate\Console\Command;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Notification;
use Symfony\Component\ErrorHandler\Debug;

class CheckOverdueBoxes extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:check-overdue-boxes';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command find boxes with expired date';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $daysToHold = env('VITE_TOTAL_DAYS_HOLDING');

        $sevenDaysAgo = Carbon::now()->subDays($daysToHold);

        $boxes = Box::where('created_at', '<', $sevenDaysAgo)->orderBy('cell_id', 'asc')->get();

        $boxes->each(function ($box) {
            Notification::route('telegram', 'TELEGRAM_CHAT_ID')
                ->notify(new BoxOverdueNotification($box));
        });
    }
}
