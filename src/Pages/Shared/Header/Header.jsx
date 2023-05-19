import { Link } from "react-router-dom";
import logoImg from "../../../assets/logo.png"
import { FaUserSecret } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log('user', user);
    const navItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/'>All Toys</Link></li>
        {user && (
            <>
                <li><Link to='/'>MyToys</Link></li>
                <li><Link to='/AddAToy'>Add A Toy</Link></li>
            </>
        )}
        <li><Link to='/'>Blogs</Link></li>
        <li><Link to='/signup'>Register</Link></li>
    </>

    const handleLogOut = () => {
        logOut()
            .then()
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <div className="navbar bg-base-100 h-28 border mb-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <Link to='/' className=" normal-case">
                    <img src={logoImg} alt="" />
                    <h2 className="text-2xl">Example Logo</h2>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? (
                        <div className="flex items-center">
                            {user.photoURL ? (
                                <div className="tooltip tooltip-left" data-tip={user.displayName} style={{ width: '60px', height: '60px' }}>
                                    <img src={user.photoURL} alt="" className="rounded-full" />
                                </div>
                            ) : (
                                <FaUserSecret className="text-5xl mr-3" />
                            )}
                            <button className="btn btn-outline w-28 ml-4" onClick={handleLogOut}>Logout</button>
                        </div>
                    ) : (
                        <div className="flex">
                            <div className=" rounded-full">
                                <FaUserSecret className="text-5xl mr-3"></FaUserSecret>
                            </div>
                            <Link to='/login'><button className="btn btn-outline w-28">Login</button></Link>
                        </div>
                    )
                }


            </div>
        </div>
    );
};

export default Header;