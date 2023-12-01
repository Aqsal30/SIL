<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\player;
use App\Models\tim;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;

class PlayerController extends Controller
{
    public function index(){
        $player = player::all();
        return Inertia::render('Select', [
            'player' => $player
        ]);
    }
    public function store(Request $request){
        
        $player = new player();
        $image_file = $request->file('profil');
        $image_ex = $image_file->extension();
        $image = date('ymdhis') . "." . $image_ex;
        $image_file->move('images/profil', $image);

        $player->tim = $request->tim;
        $player->nama = $request->nama;
        $player->nick = $request->nick;
        $player->profil = $image;
        $player->save();
        return redirect()->back()->with('success', 'tim berhasil ditambah');
    }
    public function show(player $player){
        $myplayer = player::all();
        $tim = tim::all();
        return Inertia::render('UpPlayer', [
            'myplayer' => $myplayer,
            'tim' => $tim
        ]);
    }
}
