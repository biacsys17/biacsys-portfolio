import CmpLogo from "../assets/Biacsyslogo.svg";
import { Link } from "react-router-dom";
import Button from "./Ui/button";
// import IconButton from "./Icon-Button";
// import { FiSun } from "react-icons/fi";


export default function NavBar() {
return(
    <div className="bg-gray-100 flex justify-between px-30  p-2">
      <div className="logo-container flex items-center">
        <img className="size-8"src={CmpLogo}></img>
        <h3 className="text-gray-500 font-bold text-3xl">Biacsys</h3>
      </div>
      <div className="nav-tag-container flex gap-8 items-center">
        <Link to="/">Home</Link>
        <Link to="/services">services</Link>
        <Link to="/about">About</Link>
      </div>
      <div className="action-container">
       <Button to="/contact" padding="5px 80px">Contact Us</Button>
      </div>
    </div>
)
}