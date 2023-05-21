/* eslint-disable no-unused-vars */

import { Link, useNavigate } from "react-router-dom";
import loginImg from '../../assets/images/login.jpg'
import { FcGoogle } from "react-icons/fc";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from 'sweetalert2'
const Login = () => {

    const { signInUser, handleGoogleSignIn } = useContext(AuthContext)
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    let navigate = useNavigate();

    const handleLogin = event => {
        event.preventDefault();
        if (email && password) {
            setLoading(true);
            signInUser(email, password)
                .then(result => {
                    const user = result.user;
                    Swal.fire({
                        title: 'Success!',
                        text: 'Login Successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                      })
                    navigate('/')

                })
                .catch((error) => {
                    setError('User Not Found!. Please Enter Correct Email Or Password');
                })
                .finally(()=> setLoading(false))
        }else{
            setError('Please Fill Out Your Email & Password');
        }

    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:justify-around lg:flex-row">
                <div className="w-1/2 ">
                    <img src={loginImg} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h2 className='text-center font-bold text-3xl'>Please Login</h2>
                        <form onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" onChange={(e) => setEmail(e.target.value)} name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" onChange={(e) => setPassword(e.target.value)} name="password" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-block" type="submit" disabled={loading} value={loading ? "Please Wait..." : "Login"} />
                            </div>
                            <div className="">
                                <p className="text-red-600">{error}</p>
                            </div>
                            
                        </form>
                        <div className=''>
                                <h2 className='text-center mt-5'>Or Sign In With</h2>
                                <div className='text-center flex justify-center mt-5'>
                                    <button onClick={handleGoogleSignIn}><FcGoogle className='text-4xl'></FcGoogle></button>
                                </div>
                                <p className="text-center mt-5">Do not Have an Account? <Link to='/SignUp' className="text-green-700 font-bold">Sign Up</Link></p>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;