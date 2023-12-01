import { Link } from "@inertiajs/react"
import gambar from "@/Components/gambar/logo.png"
import profil from "@/Components/gambar/default.png"
export default function Admin(props){
    return (
        <div className="flex flex-col w-full h-screen">
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
        </div>
    )
}