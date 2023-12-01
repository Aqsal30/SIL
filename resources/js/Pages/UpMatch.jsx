import React, { useEffect, useState } from 'react';
import { Inertia } from '@inertiajs/inertia';
import { Link } from '@inertiajs/react';
import gambar from "@/Components/gambar/logo.png";
import profil from "@/Components/gambar/default.png";
import Footer from '@/Components/Footer';
export default function UpMatch(props){
    var tim = props.tim;
    const [tim1, settim1] = useState('');
    const [tim2, settim2] = useState('');
    const skor1 = "0";
    const skor2 = "0";
    const [date, setdate] = useState('');
    const [time, settime] = useState('');
    const cons = "Wait";
    const [bracket, setbracket] = useState('');
    const Submit = () => {
        const data = {
            tim1,tim2,skor1,skor2,date,time,cons,bracket
        }
        Inertia.post('/upmatch',data)
        console.log(data)
        settim1('')
        settim2('')
        setdate('')
        settime('')
        setbracket('')
    }
    useEffect(() => {
        if (!props.match){
            Inertia.get('/upmatch')
        }
    
    }, [])
    console.log(props)
    return (
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
            <select className='w-[50%] bg-skor text-white placeholder-white border-white' id="tim1" onChange={(tim1) => settim1(tim1.target.value)}>
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
            <select className='w-[50%] bg-skor text-white placeholder-white border-white' id="tim2" onChange={(tim2) => settim2(tim2.target.value)}>
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
            <input type='date' className='w-[50%] bg-skor text-white placeholder-white border-white' name="date" id="date" onChange={(date) => setdate(date.target.value)}></input>
            <input type='time' className='w-[50%] bg-skor text-white placeholder-white border-white' name="time" id="time" placeholder='Waktu Pertandingan' onChange={(time) => settime(time.target.value)}></input>
            <input type='text' className='w-[50%] bg-skor text-white placeholder-white border-white' name="bracket" id="bracket"  placeholder='Bracket Pertandingan' onChange={(bracket) => setbracket(bracket.target.value)}></input>
            <button className='bg-green-600 w-[20%] h-10 mt-[2%] ml-auto mr-auto text-white' onClick={()=>Submit()}>Submit</button>
            
            </div>

            {props.match ? props.match.map((data, i) =>{
                var gambar = data.profil;
                var prev = null
                return(
<div key={i} className="w-full h-60 ml-auto mr-auto mb-10 border-2 border-white bg-skor flex flex-col">

<div className="h-[80%] w-full flex flex-row items-center">
    
    <div className="w-[1%] h-full bg-green-600"></div>
    <div className="w-[14%] h-full flex flex-col items-center bg-skor">
    {data.cons == "Live" ? 
    <div className="bg-black border-2 border-red-600 rounded-full w-[70%] h-[20%] flex flex-row mt-auto">
    <div className="w-5 h-5 rounded-full mt-auto ml-auto mb-auto bg-red-600"></div>
    <p className="m-auto text-2xl font-poppins font-bold text-red-600">{data.cons}</p>
    </div>
    :
    <div></div>} 
        <p className="m-auto text-3xl font-poppins font-bold text-white">{data.skor1} - {data.skor2} </p>
    </div>
    <div className="w-[25%] h-full flex justify-center items-center "><p className="text-4xl font-poppins font-bold text-white">{data.Tim1}</p></div>
    {tim.map((date, i) =>{
                    console.log(date)
                        return(
                    <>
                    {date.Nama ==  data.Tim1 ? 
                    <div className="w-[10%] h-full flex justify-center items-center "><img src={'/images/' + date.Logo}/></div>
                    : <></>}
                    </>
    )})}
                    <div className="w-[10%] h-full ml-auto mr-auto flex justify-center items-center"><p className="text-4xl font-poppins font-bold text-white">VS</p></div>
    {tim.map((date, i) =>{
                    console.log(date)
                        return(
                    <>
                    {date.Nama ==  data.Tim2 ? <div className="w-[10%] h-full flex justify-center items-center "><img src={'/images/' + date.Logo}/></div>
                    : <></>}
                   
                    </>
    )})}


    <div className="w-[25%] h-full flex justify-center items-center "><p className="text-4xl font-poppins font-bold text-white">{data.Tim2}</p></div>
    <div className="w-[10%]"></div>
</div>
<div className="h-[20%] w-full flex items-center justify-center">
    <p className="text-4xl font-poppins font-bold text-white">{data.bracket}</p>
</div>
</div>
                    )
                }): <p>kosong</p>}
            <Footer />
        </div>
        
    )
}