import React, { useEffect, useState } from 'react';
import { Inertia } from '@inertiajs/inertia';
import { Link } from '@inertiajs/react';
import gambar from "@/Components/gambar/logo.png";
import profil from "@/Components/gambar/default.png"
import Footer from '@/Components/Footer';

export default function UpPlayer(props){
    const [tim, setTim] = useState('');
    const [nama, setNama] = useState('');
    const [nick, setNick] = useState('');
    const [profil, setProfil] = useState('');
    const Submit = () => {
        const data = {
            tim,nama,nick,profil
        }
        Inertia.post('/upplayer',data)
        console.log(data)
        setTim('')
        setNama('')
        setNick('')
        setProfil('')
    }
    const handleFileChange = (e) => {
        setProfil(e.target.files[0]);
    }
    useEffect(() => {
        if (!props.myplayer){
            Inertia.get('/upplayer')
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
            <select className='w-[50%] bg-skor text-white placeholder-white border-white' id="tim" onChange={(tim) => setTim(tim.target.value)}>
                    {props.tim ? props.tim.map((data, i) =>{
                    return(
                    <>
                    <option>{data.Nama}</option>
                    </>
                    )
                    })
                    :<></>
                    }
            </select>
            <input className='w-[50%] bg-skor text-white placeholder-white border-white' autoComplete='off' type='text' name="nama" id='nama' placeholder='Nama Player' onChange={(nama) => setNama(nama.target.value)}></input>
            <input className='w-[50%] bg-skor text-white placeholder-white border-white' autoComplete='off' type='text' name="nick" id='nick' placeholder='Nickname Player' onChange={(nick) => setNick(nick.target.value)}></input>
            <input className='w-[50%] bg-skor text-white border border-white' type='file' name='profil' id='profil' onChange={handleFileChange}></input>
            <button className='bg-green-600 w-[20%] h-10 mt-[2%] ml-auto mr-auto text-white'  onClick={()=>Submit()}>Submit</button>
            </div>
            <div className='w-full h-30 flex flex-row border-b-4 bg-skor items-center justify-around'>  
                    <div className='w-[20%] flex flex-row justify-center'><p className="text-2xl text-white font-poppins font-bold">Nama Tim</p></div>
                    <div className='w-[20%] flex flex-row justify-center'><p className="text-2xl text-white font-poppins font-bold">Foto Profil</p></div>
                    <div className='w-[20%] flex flex-row justify-center'><p className="text-2xl text-white font-poppins font-bold">Nickname</p></div>
                    <div className='w-[20%] flex flex-row justify-center'><p className="text-2xl text-white font-poppins font-bold">Nama Lengkap</p></div>
            </div>
            {props.myplayer ? props.myplayer.map((data, i) =>{
                var gambar = data.profil;
                var prev = null
                return(
                    <div key={i} className='w-full h-30 flex flex-row bg-skor border-b-4 items-center justify-around'>  
                    <div className='w-[20%] flex flex-row justify-center'><p className="text-2xl text-white font-poppins font-bold">{data.tim}</p></div>
                    <div className='w-[20%] flex flex-row justify-center'><img className="w-100 h-100" src={'/images/profil/' + gambar}/></div>
                    <div className='w-[20%] flex flex-row justify-center'><p className="text-2xl font-metro text-white">{data.nick}</p></div>
                    <div className='w-[20%] flex flex-row justify-center'><p className="text-2xl font-metro text-white">{data.nama}</p></div>
                    </div>
                    )
                }): <p>kosong</p>}
                <Footer />
            </div>
        </>
    )
}