import React, { useEffect, useState } from 'react';
import { Inertia } from '@inertiajs/inertia';
import { Link } from '@inertiajs/react';
import gambar from "@/Components/gambar/logo.png";
import profil from "@/Components/gambar/default.png";
import Footer from '@/Components/Footer';

export default function ListTicket(props){
    const [select, setselect] = useState('');
    const nama = "kosong";
    const notel = 'kosong';
    const email = "kosong";
    const tanggal = "kosong";
    const Delete = () => {
        const data = {
            select,nama,notel,email,tanggal
        }
        Inertia.post('/seat/del', data);
        console.log(data)
        setselect('')
    }

    return (
        <div>
            <div className="navbar bg-atas h-[10%]">
                <div className="navbar-start ml-[2%]">
                <Link href="/admin"><img className="ml-[5%]"  src= {gambar}/></Link>
                  <p className="text-white text-2xl ml-[10%] font-metro">Val-Match</p>
                </div>
                <div className="navbar-center">
                <Link href="/uptim" className="text-2xl mr-10 text-white">Upload Tim</Link>
                <Link href="/upplayer" className="text-2xl mr-10 text-white">Upload Player</Link>
                <Link href="/upmatch" className="text-2xl text-white">Upload Match</Link>
                <Link href="/listticket" className="text-2xl ml-10 text-white">Ticket</Link>
                    </div>
                    <div className="navbar-end mr-[2%]">
                        <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                          <div className="w-10 rounded-full">
                            <img src={profil}/>
                          </div>
                        </label>
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                        <li><Link method="post" href={route('logout')} as="button">Logout</Link></li>
                        </ul>
                        </div>
                    </div>
            </div>
            <div className="w-[65%] h-screen mt-10 mb-10 ml-auto mr-auto flex flex-col justify-around bg-white">
            <div className="h-[10%] w-full flex flex-row justify-between items-center bg-skor border-2 border-white text-white ">
                <div className="w-[20%] flex justify-center">kode Kursi</div> 
                <div className="w-[20%] flex justify-center">Nama</div>
                <div className="w-[20%] flex justify-center">Nomor Telepon</div>
                <div className="w-[20%] flex justify-center">Email</div>
                <div className="w-[20%] flex justify-center">Tanggal Booking</div>
                <div className='w-[5%]'></div>
            </div>
            {props.ticket.map((data, i) =>{
                
                return(
                <>
                    <div className="h-[10%] w-full flex flex-row justify-between items-center bg-skor border-2 border-white text-white ">
                        <div className="w-[20%] flex justify-center">{data.kode}</div> 
                        {data.nama == "kosong" || data.nama == "" ?
                        <>
                        <div className="w-[20%] flex justify-center text-transparent"></div>
                        <div className="w-[20%] flex justify-center text-transparent"></div>
                        <div className="w-[20%] flex justify-center text-transparent"></div>
                        <div className="w-[20%] flex justify-center text-transparent"></div>
                        <div className='w-[5%]'>
                        </div>
                        </>
                        :
                        <>
                        <div className="w-[20%] flex justify-center">{data.nama}</div>
                        <div className="w-[20%] flex justify-center">{data.notel}</div>
                        <div className="w-[20%] flex justify-center">{data.email}</div>
                        <div className="w-[20%] flex justify-center">{data.tanggal}</div>
                        <div className='w-[5%]'>
                            <button className="bg-skor w-5 h-5" onClick={()=>{document.getElementById('my_modal_1').showModal(); setselect(select + data.kode);}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M6.187 8h11.625l-.695 11.125A2 2 0 0 1 15.121 21H8.879a2 2 0 0 1-1.996-1.875L6.187 8zM19 5v2H5V5h3V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h3zm-9 0h4V4h-4v1z"/></svg>
                            </button>
                        </div>
                        </>
                        }
                        
                        
                    </div>
                    
                </>
            )})}
            </div>
            
            <dialog id="my_modal_1" className="modal">
              <div className="modal-box">
                <h3 className="font-bold text-lg">Hapus Data!</h3>
                <p className="py-4">Yakin Hapus Data Booking?</p>
                <div className="modal-action">
                  <form method="dialog">
                    <button className="btn bg-red-600" onClick={()=>Delete()}>Hapus</button>
                    <button className="btn">Tidak</button>
                  </form>
                </div>
              </div>
            </dialog>
            <Footer />
        </div>
       
    )
}