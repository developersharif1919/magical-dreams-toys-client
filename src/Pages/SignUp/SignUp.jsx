import { Link } from "react-router-dom";
import loginImg from '../../assets/images/login.jpg'

const SignUp = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:justify-around lg:flex-row">
                <div className="w-1/2 ">
                    <img style={{maxWidth:'100%'}} className="" src={loginImg} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h2 className='text-center font-bold text-3xl'>Sign Up</h2>
                        <form>
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
                                <input type="text" name="userPhoto" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6 mb-5">
                                <input className="btn btn-block" type="submit" value="Sign Up" />
                            </div>
                            <p>Already Have an Account ? <Link to='/login'>Login</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;