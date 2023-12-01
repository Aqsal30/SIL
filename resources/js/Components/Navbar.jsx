import gambar from "@/Components/gambar/logo.png"
import profil from "@/Components/gambar/default.png"
import { Link, router } from "@inertiajs/react"
import { Inertia } from "@inertiajs/inertia"
const Navbar = ({auth}) => {
    return (
      <>
      {!auth.user? 
        <div className="navbar bg-atas h-[10%]">
        <div className="navbar-start ml-[2%]">
        <Link href="/"><img className="ml-[5%]"  src= {gambar}/></Link>
        <p className="text-white text-2xl ml-[10%] font-metro">Val-Match</p>
        </div>
        <div className="navbar-center">
        <Link href={route('match')} as="button" className="text-2xl text-white">MATCHES</Link>
        <Link href={route('team')} as="button" className="text-2xl ml-10 mr-10 text-white">TEAMS</Link>
            </div>
            <div className="navbar-end mr-[2%]">
                <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src={profil}/>
                  </div>
                </label>
                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                <li><Link href={route('login')} as="button">Login</Link></li>
                <li><Link href={route('register')} as="button">Register</Link></li>
                </ul>
                </div>
            </div>
        </div>
        
      :
        <>
        {auth.user.name == "Admin" ? 
        router.visit('/admin')
      
        :
        <div className="navbar bg-atas h-[10%]">
          <div className="navbar-start ml-[2%]">
          <Link href="/"><img className="ml-[5%]"  src= {gambar}/></Link>
            <p className="text-white text-2xl ml-[10%] font-metro">Val-Match</p>
          </div>
          <div className="navbar-center">
          <Link href={route('match')} as="button"className="text-2xl text-white">MATCHES</Link>
          <Link href={route('team')} as="button"className="text-2xl ml-10 mr-10 text-white">TEAMS</Link>
          <Link href="/ticket" className="text-2xl text-white">TICKETS</Link>
              </div>
              <div className="navbar-end mr-[2%]">
                  <div className="dropdown dropdown-end">
                  <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                      <img src={profil}/>
                    </div>
                  </label>
                  <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                  <li><Link href={route('tiket')} as="button">Ticket Saya</Link></li>
                  <li><Link method="post" href={route('logout')} as="button">Logout</Link></li>
                  </ul>
                  </div>
              </div>
          </div>
        }
        
      </>
      }
      </>
)}
export default Navbar;