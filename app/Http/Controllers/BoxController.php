<?php

namespace App\Http\Controllers;

use App\Http\Requests\BoxStoreRequest;
use App\Models\Cell;
use App\Models\Box;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Inertia\Response;

class BoxController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        $cells = Cell::with('box')->orderBy('id')->get();
        return Inertia::render('MainPage', [
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
        Box::create($request->validated());
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
        $box->update($request->validated());
        return to_route('main');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Box $box)
    {
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

        $data = $query->orderBy('created_at', 'asc')->paginate(env('PAGINATION_COUNT'));

        return Inertia::render('HistoryPage', ['boxes' => $data]);
    }
}
