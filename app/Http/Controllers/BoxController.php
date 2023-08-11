<?php

namespace App\Http\Controllers;

use App\Http\Requests\BoxStoreRequest;
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
        $boxes = Box::query()->orderBy('cell')->get();
        return Inertia::render('MainPage',[
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
        $freeCells = array_values(array_filter($allCells, function($cell) use ($notEmptyCells) {
            return !in_array($cell, $notEmptyCells);
        }));
        return Inertia::render('CreateBox', [
            'freeCells' => $freeCells
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(BoxStoreRequest $request)
    {
        Box::create($request->validated());
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
