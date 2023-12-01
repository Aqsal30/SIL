<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\tim;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use App\Models\player;
use App\Models\matche;

class TimController extends Controller
{

    public function index(){
        $tim = tim::all();
        return Inertia::render('Teams', [
            'tim' => $tim
        ]);
    }
    public function store(Request $request){
        if($request->has('Logo')){
            $tim = new tim();
            $image_file = $request->file('Logo');
            $image = date('ymdhis') . ".png";
            $image_file->move('images', $image);
            $tim->Logo = $image;
            $tim->Nama = $request->Nama;
            $tim->website = $request->website;
            $tim->sosmed = $request->sosmed;
            $tim->namaweb = $request->namaweb;
            $tim->namasos = $request->namasos;
            $tim->save();
            return redirect()->back()->with('success', 'tim berhasil ditambah');
        }
    }
    public function show(){
        $mytim = tim::all();
        return Inertia::render('Uptim', [
            'mytim' => $mytim
        ]);
    }
    public function select(Request $request){
        $player = player::all();
        $tim = tim::all();
        $matche = matche::all();
        $value = $request->state;
        return Inertia::render('Select',[
            'player' => $player,
            'value' => $value,
            'tim' => $tim,
            'matche' => $matche
        ]);
    }
}
