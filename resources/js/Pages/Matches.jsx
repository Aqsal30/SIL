import React from "react"
import Skor from "@/Components/Skor"
import Navbar from "@/Components/Navbar"
import Footer from "@/Components/Footer"

export default function Matches(props){
    return (
        <div className="h-full w-full flex flex-col">
            <Navbar auth={props.auth}/>
            <div className="w-[90%] h-auto m-auto">
            <Skor matche={props}/>
            </div>
            <Footer />
        </div>
    );
}