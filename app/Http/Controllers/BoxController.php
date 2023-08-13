<?php

namespace App\Http\Controllers;

use App\Http\Requests\BoxStoreRequest;
use App\Models\Box;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class BoxController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): \Inertia\Response
    {
        $boxes = Box::query()->orderBy('cell')->get();
        return Inertia::render('MainPage', [
            'boxes' => $boxes
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): \Inertia\Response
    {
        $notEmptyCells = DB::table('boxes')->pluck('cell')->toArray();
        $allCells = range(1, Box::TOTAL_CELLS);
        $freeCells = array_values(array_filter($allCells, function ($cell) use ($notEmptyCells) {
            return !in_array($cell, $notEmptyCells);
        }));
        $cellToNewBox = $freeCells[0] ?? null;

        $lastAddedBox = DB::table('boxes')->latest('id')->first();

        return Inertia::render('CreateBox', [
            'cellToNewBox' => $cellToNewBox,
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
}