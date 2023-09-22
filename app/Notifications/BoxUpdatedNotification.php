<?php

namespace App\Notifications;

use App\Models\Box;
use Carbon\Carbon;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;
use NotificationChannels\Telegram\TelegramChannel;
use NotificationChannels\Telegram\TelegramMessage;


class BoxUpdatedNotification extends Notification
{
    use Queueable;

    /**
     * Create a new notification instance.
     */
    public function __construct(private $request, private Box $box)
    {
        //
    }

    /**
     * Get the notification's delivery channels.
     *
     * @return array<int, string>
     */
    public function via(object $notifiable): array
    {
        return ['telegram'];
    }

    public function toTelegram($notifiable): TelegramMessage
    {
        $cell = $this->box->cell_id;
        $date = Carbon::createFromDate($this->box->created_at);
        $daysToAdd = env('VITE_TOTAL_DAYS_HOLDING');
        $dateStart = $date->format('d.m.Y');
        $dateTo = $date->addDays($daysToAdd)->format('d.m.Y');

        return TelegramMessage::create()
            ->to(env('TELEGRAM_CHAT_ID'))
            ->line("Товар в ячейке {$cell} изменен!")
            ->line('')
            ->line('Накладная: ' . $this->box->invoice)
            ->line('Измененная накладная: ' . $this->request->invoice)
            ->line('Заказчик: ' . $this->box->customer)
            ->line('Измененный заказчик: ' . $this->request->customer)
            ->line('Заказ: ' . $this->box->product)
            ->line('Измененный заказ: ' . $this->request->product)
            ->line('')
            ->line('Поступил на хранение: ' . $dateStart)
            ->line('Хранение до: ' . $dateTo);
    }

    /**
     * Get the array representation of the notification.
     *
     * @return array<string, mixed>
     */
    public function toArray(object $notifiable): array
    {
        return [
            //
        ];
    }
}
