import gambar from "@/Components/gambar/logo.png"
import ticket from "@/Components/gambar/ticket.png"
import tropi from "@/Components/gambar/tropi.png"
import valo from "../Components/gambar/valo.png"
import { Link } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/footer";
export default function Ticket(props){
    return (
        <div className="h-screen w-full flex flex-col">
            <Navbar auth={props.auth}/>
            <div className="w-[90%] h-[5%] ml-auto mr-auto"></div>
            <div className="w-[90%] h-[8%] ml-auto mr-auto flex flex-row items-center">
                <p className="text-white text-6xl font-lato font-bold">Buy Tickets</p>
                <p className="text-white font-poppins text-xl ml-[2%]">*All Ticket prices are per person</p>
            </div>
            
            <Link href="/seat" className="w-[90%] h-[28%] mt-[1%] ml-auto mr-auto border-2 border-white bg-skor flex flex-row justify-between">
                <div className="w-[30%] h-full">
                    <div className="w-full h-[50%] flex items-center"><p className="ml-[15%] font-lato font-semibold text-[40px] text-white ">VCT Evolutions'23</p></div>
                    <div className="w-full h-[50%] flex justify-center items-center">
                        <p className="font-lato font-normal text-[32px] text-white mr-auto ml-[15%]">VIP Experience</p>
                        <img className="mr-[20%]" src={ticket}/>
                    </div>
                </div>
                <div className="w-[30%]  h-full flex flex-row items-center justify-between">
                        <img className="w-100 h-100 ml-[5%]" src={tropi}/>
                        <div className="h-full w-[75%] flex flex-col justify-center font-poppins font-semibold text-[48px] text-white">
                            <p className="ml-[5%]">Grand Final</p>
                            <p className="ml-[5%]">IDR 250K</p>
                        </div>
                    </div>
                    
                <div className="w-[30%] h-full ">
                    <p className="font-lato text-white text-[32px]">Event Date</p>
                    <p className="font-lato text-white text-[32px] italic">From: Oct 18 2023 5:30 PM</p>
                    <p className="font-lato text-white text-[32px] italic">To: Oct 18 2023 8:00 PM</p>
                    <p className="font-lato text-white text-[32px] mt-[5%]">Last Purchase</p>
                    <p className="font-lato text-white text-[32px] italic">Oct 17 2023 11:59 PM</p>
                </div>
            </Link>
            
            <Footer />
            
        </div>
        );
}