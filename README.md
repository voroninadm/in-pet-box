<img src="resources/assets/img/readme_logos.webp" alt="logos">

<h1>in-pet-box. Fullstack pet-project</h1>

<p><img src="resources/assets/img/box-ok.webp"></p>

Программа для отслеживания товара на складе.
<br>
SPA-проект, написан с использованием Laravel, Vue3, InertiaJs, Vite, TailwindCss
<br>

### Особенности реализации
Broadcast (laravel web-socket) обновления и уведомления в телеграм-канал при
создании/обновлении/удалении товара на складе!
<br>
Ежедневно в 12:00 оповещение о каждом товаре, находищемся на складе более максимального срока хранения!

### УСТАНОВКА

Все настройки хранятся в .env файле
- Количество ячеек для хранения (TOTAL_CELLS_COUNT) - 24.
- Максимальный срок хранения (VITE_TOTAL_DAYS_HOLDING) - 7 дней.
- Количество записей в пагинации на странице истории (PAGINATION_COUNT) - 10шт
- Токен созданного в telegram бота TELEGRAM_BOT_TOKEN
- ID канала в telegram, куда будут пулять сообщения TELEGRAM_CHAT_ID

При изменении количества ячеек необходимо поправить верстку главной страницы, 
а также отредактировать количество полок компоненте.

- установить и настроить DOCKER (wsl2)
- скопировать проект и при необходимости изменить настройка в .env
- выполнить миграции - php artisan migrate
- наполнить бд данными (seeding) -  php artisan db:seed
- забилдить проект - npm run build
- запустить задачи по расписанию - php artisan schedule:work

По-умолчанию создается юзер с правами админа:
- name: admin
- e-mail: test@example.com
- password: password

### О проекте
Frontend: Mobile-first, адаптивная верстка. 
Backend: использованы миграции, фабрики, трейты, мидлвари. 
Отработана пагинация, дб с отошениями 1 к 1.
Задействованы Events, Notifications, Broadcast channels
Связь через InertisJS.
