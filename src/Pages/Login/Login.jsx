
import { Link } from "react-router-dom";
import loginImg from '../../assets/images/login.jpg'
import { FcGoogle } from "react-icons/fc";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
const Login = () => {

    const { signInUser } = useContext(AuthContext)
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        if (email && password) {
            setLoading(true);
            signInUser(email, password)
                .then(result => {
                    const user = result.user;
                    console.log(user)
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
                                <input type="text" name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" name="password" placeholder="password" className="input input-bordered" />
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
                            <div className=''>
                                <h2 className='text-center mt-5'>Or Sign In With</h2>
                                <div className='text-center flex justify-center mt-5'>
                                    <FcGoogle className='text-4xl'></FcGoogle>
                                </div>
                                <p>Do not Have an Account? <Link to='/SignUp'>Sign Up</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;