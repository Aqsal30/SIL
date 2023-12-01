import gambar from "@/Components/gambar/logo.png"
import atas from "../Components/gambar/Rectangle 2.png"
import bawah from "../Components/gambar/bawah.png"
import bawah2 from "../Components/gambar/bawah2.png"
import navi from "../Components/gambar/NAVI.png"
import fnatic from "../Components/gambar/FNATIC.png"
import valo from "../Components/gambar/valo.png"
import profil from "@/Components/gambar/default.png"
import React from "react"
import { Head, Link} from "@inertiajs/react"
import Navbar from "@/Components/Navbar"

export default function Homepage(props){
  console.log('user:',props.auth)  
  return (
        <div className="h-screen w-full ">
            <Head title="Val-Match"/>
            <Navbar auth={props.auth}/>
                <div className="h-[23%] w-full relative">
                    <img className="h-full w-full" src= {atas}/>
                    <p className="text-white text-5xl font-bold font-poppins absolute top-[50%] left-[25%]">LIVE MATCHES</p>
                </div>
                <div className="h-[28%] w-[90%] ml-auto mr-auto bg-skor flex flex-row">
                    <div className="w-[1%] h-full bg-red-600"></div>
                    
                    <div className="w-full h-full">
                        <div className="h-[80%] w-full flex flex-row items-center">
                            <div className="w-[10%] h-full flex flex-col items-center"> 
                            <div className="bg-black border-2 border-red-600 rounded-full w-[70%] h-[20%] flex flex-row mt-auto">
                            <div className="w-5 h-5 rounded-full mt-auto ml-auto mb-auto bg-red-600"></div>
                            <p className="m-auto text-2xl font-poppins font-bold text-red-600">LIVE</p>
                            </div>
                                <p className="m-auto text-3xl font-poppins font-bold text-white">1 - 0 </p>
                            </div>
                            <p className="ml-auto mr-auto text-4xl font-poppins font-bold text-white">FNATIC</p>
                            <img src={fnatic}/>
                            <p className="ml-auto mr-auto text-4xl font-poppins font-bold text-white">VS</p>
                            <img src={navi}/>
                            <p className="mr-auto ml-auto text-4xl font-poppins font-bold text-white">NATUS VINCERE</p>
                        </div>
                        <div className="h-[20%] w-full flex items-center justify-center">
                            <p className="text-4xl font-poppins font-bold text-white">UPPER SEMIFINALS</p>
                        </div>
                    </div>
                </div>
                <div className="w-[90%] h-[28%] ml-[5%]">
                <div className="carousel w-full h-full">
                    <div id="slide1" className="carousel-item relative w-full">
                      <img src={bawah} className="w-full" />
                      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle"></a> 
                        <a href="#slide2" className="btn btn-circle"></a>
                      </div>
                    </div> 
                    <div id="slide2" className="carousel-item relative w-full">
                      <img src={bawah2} className="w-full" />
                      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle"></a> 
                        <a href="#slide3" className="btn btn-circle"></a>
                      </div>
                    </div>
                </div>
                </div>
                <div className="h-[11%] bg-skor flex flex-row items-center">
                    <p className="ml-auto mr-auto font-metro text-2xl text-white">Val-Match</p>
                    <img className="mr-auto" src={valo} />
                </div>
        </div>
    );
}