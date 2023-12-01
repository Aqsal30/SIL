import { Link, router } from "@inertiajs/react"
import React from 'react';
import Navbar from "@/Components/Navbar"
import Footer from "@/Components/footer";
export default function Teams(props){
    var tim = props.tim;
    return (    
        <div className="h-screen w-full flex flex-col overflow-auto">
            <Navbar auth={props.auth}/>
            <div className="h-screen w-full grid grid-cols-3 place-content-around place-items-center ">
                {tim ? tim.map((data, i) =>{
                    var gambar = data.Logo;
                    return(
                    <div key={i}> 
                    <Link href={route("select", {state: data.Nama})} value={data.Nama} title={data.Nama} className=""><img className="border-2 w-250 h-250" src={'/images/' + gambar}/></Link>
                    </div>
                    )
                })
                :<></>
                }
            </div>
            <Footer />
        </div>

    );
}

