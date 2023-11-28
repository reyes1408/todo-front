import { Link } from "react-router-dom"
import imgLogo from "../assets/avatarBlanco.png"

const NavBar = () => {
  return (
    <nav className="w-full h-14 bg-blue-800 flex items-center justify-center pl-6 pr-6 border-gray-300 border-b-4">
      <div className="flex justify-between items-center w-full">
        <div className="flex items-center">
          <Link to='/menu'>
            <h1 className="font-normal text-3xl font-concert-one text-white">// TODO</h1>
          </Link>
        </div>
        <div className="w-12">
          <img className="w-12" src={imgLogo} alt="" />
        </div>
      </div>
    </nav>
  )
}

export default NavBar