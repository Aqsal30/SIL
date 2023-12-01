import gambar from "@/Components/gambar/logo.png"
import valo from "../Components/gambar/valo.png"
import arah from "@/Components/gambar/arah.png"
import { Link } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/footer";
import { useState } from "react";
import { Inertia } from "@inertiajs/inertia";


export default function Pay(props){
    return(
        <div className="h-screen w-full flex flex-col">
        <Navbar auth={props.auth}/>
        <div className="w-[65%] h-screen m-auto flex flex-col justify-start">
        <div className="h-[7%] flex flex-row justify-between items-center bg-skor border-2 border-white text-white mt-5">
                        <div className="w-[20%] flex justify-center">Kode Kursi</div> 
                        <div className="w-[20%] flex justify-center">Nama</div>
                        <div className="w-[20%] flex justify-center">Nomor Telepon</div>
                </div>
            {props.ticket.map((data, i) =>{
                console.log(data)
                return(
                <>
                {data.email == props.auth.user.email ?
                
                <>
                    <Link href={route("detil", {state: data.kode})}className="h-[7%] flex flex-row justify-between items-center bg-skor border-2 border-white text-white ">
                        <div className="w-[20%] flex justify-center">{data.kode}</div> 
                        <div className="w-[20%] flex justify-center">{data.nama}</div>
                        <div className="w-[20%] flex justify-center">{data.notel}</div>
                    </Link>
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