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


class BoxDeletedNotification extends Notification
{
    use Queueable;

    /**
     * Create a new notification instance.
     */
    public function __construct(private Box $box)
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
        $date = Carbon::createFromDate($this->box->created_at);
        $date = $date->format('d.m.Y');

        return TelegramMessage::create()
            ->to(env('TELEGRAM_CHAT_ID'))
            ->line('Товар удален с хранения!')
            ->line('')
            ->line('Накладная: ' . $this->box->invoice)
            ->line('Заказчик: ' . $this->box->customer)
            ->line('Заказ: ' . $this->box->product)
            ->line('Номер ячейки: ' . $this->box->cell_id)
            ->line('')
            ->line('Поступил на хранение: ' . $date);
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
