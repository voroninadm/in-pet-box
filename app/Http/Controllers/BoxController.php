<?php

namespace App\Http\Controllers;

use App\Events\BroadcastBoxChangedEvent;
use App\Http\Requests\BoxStoreRequest;
use App\Models\Cell;
use App\Models\Box;
use App\Notifications\BoxCreatedNotification;
use App\Notifications\BoxDeletedNotification;
use App\Notifications\BoxUpdatedNotification;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Notification;
use Inertia\Inertia;
use Inertia\Response;


class BoxController extends Controller
{
    use Notifiable;


    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        $cells = Cell::with('box')->orderBy('id')->get();
        return Inertia::render('Main/MainPage', [
            'cells' => $cells
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Cell $cell)
    {
        $lastAddedBox = DB::table('boxes')->latest('id')->first();

        return Inertia::render('CreateBox', [
            'cellId' => $cell['id'],
            'lastAddedBox' => $lastAddedBox
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(BoxStoreRequest $request)
    {
        $cell_id = $request->cell_id;
        $box = Box::create($request->validated());
        //send notification to telegram
//        Notification::send(auth()->user(), new BoxCreatedNotification($box));

        // send broadcast to channel that box changed
        event(new BroadcastBoxChangedEvent($cell_id, $box));
        return to_route('main');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Box $box)
    {
        return Inertia::render('EditBox', [
            'box' => $box,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(BoxStoreRequest $request, Box $box)
    {
        $cell_id = $box->cell_id;

        // send notification to telegram
//        Notification::send(auth()->user(), new BoxUpdatedNotification($request, $box));

        $box->update($request->validated());
        $updatedBox = Box::find($box->id);

        // send broadcast to channel that box changed
        event(new BroadcastBoxChangedEvent($cell_id, $updatedBox));
        return to_route('main');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Box $box)
    {
        $cell_id = $box->cell_id;

        // send notification to telegram
//        Notification::send(auth()->user(), new BoxDeletedNotification($box));

        // send broadcast to channel that box changed
        event(new BroadcastBoxChangedEvent($cell_id, null));

        $box->delete();
        return to_route('main');
    }

    public function history(Request $request, $period)
    {
        $query = Box::withTrashed();

        switch ($period) {
            case 'week':
                $query->whereBetween('created_at', [
                    now()->startOfWeek(),
                    now()->endOfWeek()
                ]);
                break;

            case '2weeks':
                $query->whereBetween('created_at', [
                    now()->subDays(14),
                    now()
                ]);
                break;

            case 'month':
                $query->whereBetween('created_at', [
                    now()->startOfMonth(),
                    now()->endOfMonth()
                ]);
                break;

            case 'all':
                break;


            default:
                // Обработка неправильного значения периода, например, вывод ошибки
                abort(404, 'Неправильный период');
        }

        $data = $query->orderBy('created_at', 'asc')->paginate(env('VITE_PAGINATION_COUNT'));

        return Inertia::render('History/HistoryPage', ['boxes' => $data]);
    }

    public function historyFilter(Request $request) {
        $startDate = Carbon::parse($request->start_date);
        $finishDate = Carbon::parse($request->finish_date);

        $data = Box::withTrashed()->whereBetween('created_at', [$startDate, $finishDate])->
        orderBy('created_at', 'asc')->paginate(env('VITE_PAGINATION_COUNT'));

        return Inertia::render('HistoryPage', ['boxes' => $data]);
    }
}
