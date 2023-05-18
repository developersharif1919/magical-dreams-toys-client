import { Link } from "react-router-dom";
import loginImg from '../../assets/images/login.jpg'
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const SignUp = () => {

    const { registerUser } = useContext(AuthContext)
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSignUp = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const userPhoto = form.userPhoto.value;

        if (email && password) {
            if (/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(password)) {
                setError("");
                setLoading(true);
                registerUser(email, password, name, userPhoto)
                    .then((result) => {
                        const user = result.user;
                        console.log(user)
                    })
                    .catch((error) => {
                        if (error.code === 'auth/email-already-in-use') {
                            setError('Email is already Registered');
                          } else {
                            console.log(error);
                          }
                    })
                    .finally(() => setLoading(false));

            }else{
                setError('Password must be at least 6 characters long. one letter (upper or lower case), at least one digit. For Example:Developer123');
            }
        }else{
                setError("Please fill out At Least Email & Password Field");
        }

    };

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:justify-around lg:flex-row">
                <div className="w-1/2 ">
                    <img style={{ maxWidth: '100%' }} className="" src={loginImg} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h2 className='text-center font-bold text-3xl'>Sign Up</h2>
                        <form onSubmit={handleSignUp}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Name" className="input input-bordered" />
                            </div>
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
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name="userPhoto" placeholder="Photo Url" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6 mb-5">
                                <input className="btn btn-block" type="submit" disabled={loading} value={loading ? "Please Wait..." : "Sign Up"} />
                            </div>
                            <div className="mb-5">
                                <p className="text-red-600">{error}</p>
                            </div>
                            <p>Already Have an Account ? <Link to='/login' className="text-red-600">Login</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;