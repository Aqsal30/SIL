import gambar from "../Components/gambar/logo.png"
import valo from "../Components/gambar/valo.png"
import m80 from "../Components/gambar/M80.png"
import def from "../Components/gambar/default.png"
import { Link } from "@inertiajs/react"
import Navbar from "@/Components/Navbar"
export default function Select(props){
    console.log(props)
    return (
        <div className="h-screen w-full ">
            <Navbar auth={props.auth}/>
            <div className="w-[90%] h-[5%] ml-auto mr-auto"></div>

            <div className="w-[90%] h-[5%] ml-auto mr-auto mb-[1%]">
            </div>
                    {props.tim.map((data, i) =>{
                            
                                return(
                                    <>
                            {data.Nama == props.value ?
                            <>
                            <p className="text-white font-poppins text-6xl font-bold ml-[5%]">{data.Nama}</p>
                            <div className="w-[90%] h-250 flex flex-row justify-between ml-[5%]">
                                <img className="border-2 w-250 h-250" src={'/images/' + data.Logo}/>
                                <div className="w-[82%] h-full bg-skor flex flex-col border-2">
                                    <a className="mt-[3%] ml-[3%] text-biru" href={data.website}>{data.namaweb}</a>
                                    <a className="mt-[1%] ml-[3%] text-biru" href={data.sosmed}>{data.namasos}</a>
                                </div>
                            </div>
                            </>
                            :<></>}
                            </>
                            )})}
                    
                    <div className="w-[90%] h-[5%] ml-auto mr-auto mt-[5%]">
                        <p className="text-5xl text-white font-poppins font-bold">CURRENT ROSTER</p>
                    </div>
                    
                    <div className="w-[90%] h-[35%] bg-skor border-2 ml-auto mr-auto">
                        <div className="w-full h-[50%] flex flex-row justify-around items-center">
                            {props.player.map((data, i) =>{
                                return(
                                    <>
                            {data.tim == props.value ?
                            <div key={i} className="w-[25%] h-[90%] flex flex-row items-center justify-between">
                                <img className="w-100 h-100" src={'/images/profil/' + data.profil}/>
                                <div className="h-full w-[75%]">
                                    <div className="h-[50%] w-full flex items-center"><p className="ml-[5%] text-4xl font-metro text-white">{data.nick}</p></div>
                                    <div className="h-[50%] w-full flex items-center"><p className="ml-[5%] text-4xl font-metro text-white">{data.nama}</p></div>
                                </div>
                            </div>
                            :<></>}
                            </>
                            )})}
                        </div>
                    </div>
                    
                    <div className="w-[90%] h-[5%] ml-auto mr-auto mt-[5%]">
                        <p className="text-5xl text-white font-poppins font-bold">MATCH HISTORY</p>
                    </div>
                    <div className="w-[90%] h-[90%] bg-skor border-2 flex flex-col ml-[5%]">
                    {props.matche.map((data, i) =>{
                        console.log(data.Tim1)
                                return(
                                    <>
                            {data.Tim1 == props.value || data.Tim2 == props.value?
                            <div className="w-[60%] h-[20%] bg-black ml-[5%] flex flex-row justify-between mt-[5%] border-2">
                                <div className="w-[40%] h-full flex justify-center items-center"><p className="text-3xl font-metro text-white">{data.Tim1} VS {data.Tim2}</p></div>
                                <div className="w-[30%] h-full flex justify-center items-center"><p className="text-3xl font-metro text-white ">{data.skor1} - {data.skor2}</p></div>
                                {data.Tim1 == props.value && data.skor1 == "2" || data.Tim2 == props.value && data.skor2 == "2"?
                                <div className="w-[30%] h-full flex justify-center items-center"><p className="text-3xl font-metro text-ijo ">WIN</p></div>
                                :
                                <div className="w-[30%] h-full flex justify-center items-center"><p className="text-3xl font-metro text-red-600 ">LOSE</p></div>
                                }
                            </div>
                            :<></>}
                            </>
                            )})}

                    </div>

            <div className="h-[11%] mt-[10%] bg-skor flex flex-row items-center">
                <p className="ml-auto mr-auto font-metro text-2xl text-white">Val-Match</p>
                <img className="mr-auto" src={valo} />
            </div>
        </div>
     );
}
