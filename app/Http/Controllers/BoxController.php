<?php

namespace App\Http\Controllers;

use App\Http\Requests\BoxStoreRequest;
use App\Models\Cell;
use App\Models\Box;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class BoxController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): \Inertia\Response
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
//        if($id > Cell::TOTAL_CELLS || $id < 0) {
//            return Inertia::render('ErrorPage');
//        }
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

    public function history() {
        $boxes = Box::withTrashed()->orderBy('created_at')->get();
        return Inertia::render('HistoryPage', [
            'boxes' => $boxes
        ]);
    }
}
