import { Link } from "react-router-dom"
import Logo from "../../../public/logo.svg";
import Profile from '../../../public/profile.png'


const navBar = <>
              <li className="mx-2"><Link to={"./"}>Home</Link></li>
              <li className="mx-2"><Link to={'/about'}>About</Link></li>
              <li className="mx-2"><Link to={'/project'}>Project</Link></li>
              <li className="mx-2"><Link to={'/contact'}>Contact</Link></li>
</>


export const Header = () => {
  return (
    <div className="p-3 md:p-4 flex justify-center ">
      <div className="navbar p-2 bg-base-100 rounded-full max-w-3xl shadow-md sticky z-99 transition duration-1000">
        <div className="flex-1 ">
          <Link to={'./'}><img className="w-32 ml-5 cursor-pointer text-red-500" src={Logo} alt="" /></Link>
        </div>
        <div className="hidden md:flex list-none">
          {navBar}
        </div>
        <div className="flex-none md:hidden">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img alt="Tailwind CSS Navbar component" src={Profile} />
              </div>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 list-none">
            {navBar}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
