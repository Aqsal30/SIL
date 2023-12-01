import gambar from "@/Components/gambar/logo.png"
import valo from "../Components/gambar/valo.png"
import arah from "@/Components/gambar/arah.png"
import { Link } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/footer";
import { useState } from "react";
import { Inertia } from "@inertiajs/inertia";


export default function Detil(props){
    console.log(props)
    return(
        <div className="h-screen w-full flex flex-col">
        <Navbar auth={props.auth}/>
        <div className="w-[40%] h-[50%] m-auto flex flex-col justify-center items-center bg-white">
            <div className="h-[50%] w-full flex flex-col justify-center items-center ">
            <p className="text-ijo font-bold">STRUK PEMBAYARAN</p>
            </div>
            {props.ticket.map((data, i) =>{
               
                return(
                <>
                {data.kode == props.value ?
                
                <>
                <div className="h-[50%] w-full flex flex-col items-center ">
                        <div className="w-[85%] flex flex-row justify-between text-black"><p>Seat Id</p> <p>{data.kode}</p></div> 
                        <div className="w-[85%] flex flex-row justify-between text-black"><p>No.Telepon</p> <p>{data.notel}</p></div>
                        <div className="w-[85%] flex flex-row justify-between text-black"><p>Nama</p> <p>{data.nama}</p></div>
                        <div className="w-[85%] flex flex-row justify-between text-black"><p>Email</p> <p>{data.email}</p></div>
                        <div className="w-[85%] flex flex-row justify-between text-black font-bold"><p>Total Harga</p> <p>IDR 250.000,00</p></div>
                </div>
                </>
                
                :
                <></>}
                </>
            )})}
        </div>
        <Footer />
        </div>
    );
}