import gambar from "@/Components/gambar/logo.png"
import valo from "../Components/gambar/valo.png"
import arah from "@/Components/gambar/arah.png"
import { Link } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/footer";
import { useState } from "react";
import { Inertia } from "@inertiajs/inertia";


export default function Seat(props){
    
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let currentDate = `${day} / ${month} / ${year}`;

    const test = props.auth.user.email;
    const [select, setselect] = useState('');
    const [nama, setnama] = useState('');
    const [notel, setnotel] = useState('');
    const email = test;
    const tanggal = currentDate;
    const Submit = () => {
        const data = {
            select,nama,notel,email,tanggal
        }
        Inertia.post('/seat/book', data);
        console.log(data)
        setselect('')
        setnama('')
        setnotel('')
    }
    return (
        <div className="h-screen w-full">
            <Navbar auth={props.auth}/>
            
            <div className="w-[90%] h-[5%] ml-auto mr-auto"></div>

            <p className="text-5xl text-white font-poppins font-bold ml-[5%]"> SELECT YOUR SEAT</p>
            <div className="w-[90%] h-[5%] ml-auto mr-auto"></div>

            <div className="w-[90%] h-[5%] bg-red-600 ml-auto mr-auto font-poppins font-bold text-white text-5xl flex justify-center">STAGE</div>
            
            <div className="h-screen w-full mt-[5%] grid grid-cols-5 place-content-around place-items-center ">
                {props.ticket ? props.ticket.map((data, i) =>{
                    return(
                        <>
                    {data.status == "Ready" ?
                    <div key={i}> 
                    <button className="h-200 w-200 bg-kursi flex justify-center ml-[5%] mr-[5%] items-center" onClick={()=>{document.getElementById('my_modal_2').showModal(); setselect(select + data.kode);}}><p className="font-poppins font-bold text-white text-5xl">{data.kode}</p></button>
                    </div>
                    :<div>
                    <button className="h-200 w-200 bg-black flex justify-center ml-[5%] mr-[5%] items-center" value={data.kode} disabled><p className="font-poppins font-bold text-white text-5xl">{data.kode}</p></button>
                    </div>}
                    </>
                    )

                })
                :<></>
                }
            </div>

            <p className="mt-[5%] ml-[5%] font-metro text-[24px] text-white">*MAX 1 Seat</p>

            
            <dialog id="my_modal_2" className="modal">
                <div className="modal-box flex flex-row  h-[80%] w-[70%] max-w-full">
                    <div className="w-[50%] flex flex-col ">
                    <input className="mt-[5%] w-[50%] h-[8%]" type='text' name="nama" id="nama" placeholder='Your name' onChange={(nama) => setnama(nama.target.value)}></input>
                    <input className="mt-[5%] w-[50%] h-[8%]" type='text' name="notel" id="notel" placeholder='No Telephone' onChange={(notel) => setnotel(notel.target.value)}></input>
                    <input className="mt-[5%] w-[50%] h-[8%] bg-gray-700" type='text' name="email" id="email" placeholder={props.auth.user.email} value={props.auth.user.email} disabled></input>
                    <input className="mt-[5%] w-[50%] h-[8%] bg-gray-700" type='text' name="tanggal" id="tanggal" placeholder={currentDate} value={currentDate} disabled></input>
                    </div>
                    <div className="w-[50%]  flex flex-col justify-between items-end">
                    <div className="h-200 w-200 bg-kursi flex justify-center ml-[5%] mr-[5%] items-center" ><p className="font-poppins font-bold text-white text-5xl">{select}</p></div>
                    <button value={props.ticket.kode} className="w-[50%] h-[10%] bg-orange-500 mb-[15%] mr-[5%] flex" onClick={()=>Submit()}><p className="m-auto text-white font-poppins text-4xl font-bold">CHECKOUT</p></button>
                    </div>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button onClick={()=>{setselect("")}}>close</button>
                </form>
            </dialog>

            <Footer />
        </div>
    );
}