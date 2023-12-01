<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\ticket;

class TicketController extends Controller
{
    public function index(){
        $ticket = ticket::all();
        return Inertia::render('Seat', [
            'ticket' => $ticket
            
        ]);
    }
    public function update(Request $request){
        ticket::where('kode', $request->select)->update([
            'nama' => $request->nama,
            'notel' => $request->notel,
            'email' => $request->email,
            'tanggal' => $request->tanggal,
            'status' => 'Book'
        ]);
        return to_route('tiket');
    }
    public function delete(Request $request){
        ticket::where('kode', $request->select)->update([
            'nama' => $request->nama,
            'notel' => $request->notel,
            'email' => $request->email,
            'tanggal' => $request->tanggal,
            'status' => 'Ready'
        ]);
        return to_route('list');
    }
    public function tiket(Request $request){
        $ticket = ticket::all();
        return Inertia::render('Tiket', [
            'ticket' => $ticket
        ]);
    }
    public function detil(Request $request){
        $ticket = ticket::all();
        $value = $request->state;
        return Inertia::render('Detil', [
            'ticket' => $ticket,
            'value' => $value
        ]);
    }
    public function list(Request $request){
        $ticket = ticket::all();
        return Inertia::render('ListTicket', [
            'ticket' => $ticket
        ]);
    }
}
