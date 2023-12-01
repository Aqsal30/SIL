import React, { useEffect, useState } from 'react';
import { Inertia } from '@inertiajs/inertia';
import { Link } from '@inertiajs/react';
import gambar from "@/Components/gambar/logo.png";
import profil from "@/Components/gambar/default.png";
import Footer from '@/Components/Footer';
export default function Uptim(props){
    console.log(props)
    const [Nama, setNama] = useState('');
    const [Logo, setLogo] = useState('');
    const [website, setwebsite] = useState('');
    const [sosmed, setsosmed] = useState('');
    const [namaweb, setnamaweb] = useState('');
    const [namasos, setnamasos] = useState('');
    
    const Submit = () => {
        const data = {
            Nama, Logo, website, sosmed, namaweb, namasos
        }
        Inertia.post('/uptim',data)
        setNama('')
        setLogo('')
        setwebsite('')
        setsosmed('')
        setnamaweb('')
        setnamasos('')
    }
    const handleFileChange = (e) => {
        setLogo(e.target.files[0]);
    }
    useEffect(() => {
        if (!props.mytim){
            Inertia.get('/uptim')
        }
        console.log(props)
    
    }, [])
    
    return (
        <>
            <div className='w-full h-screen'>
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
            <div className='flex flex-col items-center mb-10 mt-10 ml-auto mr-auto w-[90%]'>
            <input className='w-[50%] bg-skor border border-white text-white placeholder-white' autoComplete='off' type='text' name="Nama" id='Nama' placeholder='Nama Tim' onChange={(Nama) => setNama(Nama.target.value)}></input>
            <input className='w-[50%] bg-skor border border-white text-white ' type='file' name='Logo' id='Logo' accept='.png' onChange={handleFileChange}></input>
            <input className='w-[50%] bg-skor border border-white text-white placeholder-white' autoComplete='off' type='text' name="website" id='website' placeholder='Link Website Tim' onChange={(website) => setwebsite(website.target.value)}></input>
            <input className='w-[50%] bg-skor border border-white text-white placeholder-white' autoComplete='off' type='text' name="sosmed" id='sosmed' placeholder='Link Sosmed Tim' onChange={(sosmed) => setsosmed(sosmed.target.value)}></input>
            <input className='w-[50%] bg-skor border border-white text-white placeholder-white' autoComplete='off' type='text' name="namaweb" id='namaweb' placeholder='Nama Website Tim' onChange={(namaweb) => setnamaweb(namaweb.target.value)}></input>
            <input className='w-[50%] bg-skor border border-white text-white placeholder-white' autoComplete='off' type='text' name="namasos" id='namasos' placeholder='Nama Sosmed Tim' onChange={(namasos)=> setnamasos(namasos.target.value)}></input>
            <button className='bg-green-600 w-[20%] h-10 mt-[2%] ml-auto mr-auto text-white' onClick={()=>Submit()}>Submit</button>
            </div>
            
            <div className='w-full h-30 flex flex-row border-b-4 bg-skor items-center justify-around'>  
                <div className='w-[20%] flex flex-row justify-center'><p className="text-2xl text-white font-poppins font-bold">Nama Tim</p></div>
                <div className='w-[20%] flex flex-row justify-center'><p className="text-2xl text-white font-poppins font-bold">Logo</p></div>
                <div className='w-[20%] flex flex-row justify-center'><p className="text-2xl text-white font-poppins font-bold">Website</p></div>
                <div className='w-[20%] flex flex-row justify-center'><p className="text-2xl text-white font-poppins font-bold">Sosial Media</p></div>
            </div>
            {props.mytim ? props.mytim.map((data, i) =>{
                var gambar = data.Logo;
                return(

                    <div key={i} className='w-full h-30 flex flex-row bg-skor border-b-4 items-center justify-around'>  
                            <div className='w-[20%] flex flex-row justify-center'><p className="text-2xl text-white font-poppins font-bold">{data.Nama}</p></div>
                            <div className='w-[20%] flex flex-row justify-center'><img className='w-40' src={'/images/' + gambar}/></div>
                            <div className='w-[20%] flex flex-row justify-center'><p className="text-2xl text-white font-poppins font-bold">{data.namaweb} : {data.website}</p></div>
                            <div className='w-[20%] flex flex-row justify-center'><p className="text-2xl text-white font-poppins font-bold">{data.namasos} : {data.sosmed}</p></div>
                    </div>
                    )
                }): <p>kosong</p>}
                <Footer />
        </div>
        </>
    )
}