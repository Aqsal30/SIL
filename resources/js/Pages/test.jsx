import { Head, Link } from "@inertiajs/react"
import React from "react"
import Skor from "@/Components/Skor"
export default function Test(props){

    return (
        <div className="h-screen w-full">
            {props.matche.map((data, i) =>{
                return( 
                    <div div key={i}>  
                        <div className="w-[90%] h-[5%] ml-auto mr-auto ">
                            <p className="text-5xl text-white font-poppins font-bold">{data.date}</p>
                        </div>
                        <div div key={i} className="w-[90%] h-[28%] ml-auto mr-auto border-2 border-white bg-skor flex flex-row">
                    <div className="w-full h-full">
                    <div className="h-[80%] w-full flex flex-row items-center ">
                        <div className="w-[1%] h-full bg-red-600"></div>
                        <div className="w-[14%] h-full flex flex-col items-center bg-green-400">
                        {data.cons == "Live" ? 
                        <div className="bg-black border-2 border-red-600 rounded-full w-[70%] h-[20%] flex flex-row mt-auto">
                        <div className="w-5 h-5 rounded-full mt-auto ml-auto mb-auto bg-red-600"></div>
                        <p className="m-auto text-2xl font-poppins font-bold text-red-600">{data.cons}</p>
                        </div>
                        :
                        <div></div>} 
                            <p className="m-auto text-3xl font-poppins font-bold text-white">{data.skor1} - {data.skor2} </p>
                        </div>
                        <div className="w-[25%] h-full flex justify-center items-center bg-red-500"><p className="text-4xl font-poppins font-bold text-white">{data.Tim1}</p></div>
                        <div className="w-[10%] h-full flex justify-center items-center bg-yellow-400"></div>
                        <div className="w-[10%] h-full ml-auto mr-auto flex justify-center items-center"><p className="text-4xl font-poppins font-bold text-white">VS</p></div>
                        <div className="w-[10%] h-full flex justify-center items-center bg-gray-600"></div>
                        <div className="w-[25%] h-full flex justify-center items-center bg-blue-500"><p className="text-4xl font-poppins font-bold text-white">{data.Tim2}</p></div>
                        <div className="w-[10%]"></div>
                    </div>
                    <div className="h-[20%] w-full flex items-center justify-center">
                        <p className="text-4xl font-poppins font-bold text-white">{data.bracket}</p>
                    </div>
                    </div>
                    </div>
                    </div>
                
                )
            })} 
            
        </div>
    );
}