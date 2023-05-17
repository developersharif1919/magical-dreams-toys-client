import { Link } from "react-router-dom";
import logoImg from "../../../assets/logo.png"
import { FaUserSecret } from "react-icons/fa";

const Header = () => {
    const navItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/'>All Toys</Link></li>
        <li><Link to='/'>MyToys</Link></li>
        <li><Link to='/'>Add A Toy</Link></li>
        <li><Link to='/'>Blogs</Link></li>
        <li><Link to='/'>Register</Link></li>
    </>
    return (
        <div className="navbar bg-base-100 h-24 mb-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <div>
                    <Link to='/' className=" normal-case"> <img src={logoImg} alt="" /></Link>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                <div className=" rounded-full">
                    <FaUserSecret className="text-5xl mr-3"></FaUserSecret>
                </div>
                <Link to='/login'><button className="btn btn-outline w-28">Login</button></Link>
            </div>
        </div>
    );
};

export default Header;