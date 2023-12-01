<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\tim;
use App\Models\matche;
use Illuminate\Http\Request;

class TestController extends Controller
{
    public function index(){
        $tim = tim::all();
        $matchess = matche::all();
        $matches = $matchess->sortBy('date');
        $matche = $matches->values()->all();
        return Inertia::render('Matches', [
            'matche' => $matche,
            'tim' => $tim
        ]);
    }
    public function store(Request $request){

        $matche = new matche();

        $matche->Tim1 = $request->tim1;
        $matche->Tim2 = $request->tim2;
        $matche->Skor1 = "0";
        $matche->Skor2 = "0";
        $matche->date =  $request->date;
        $matche->time =  $request->time;
        $matche->cons =  $request->cons;
        $matche->bracket =  $request->bracket;
        $matche->save();
        return redirect()->back()->with('success', 'tim berhasil ditambah');
    }
    public function show(){
        $match = matche::all();
        $tim = tim::all();
        return Inertia::render('UpMatch', [
            'match' => $match,
            'tim' => $tim
        ]);
    }
}
