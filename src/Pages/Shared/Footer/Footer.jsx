import React from 'react';
import logImg from '../../../assets/logo.png'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='mt-10'>
            <footer className="footer p-10 bg-base-200 text-base-content">
                <Link to='/'>
                    <img src={logImg} alt="" />
                    <h2 className='text-2xl font-bold'>Magical Dreams Toys</h2>
                </Link>
                <div>
                    <span className="footer-title">Cars Toy</span>
                    <a className="link link-hover">Emergency Vehicles</a>
                    <a className="link link-hover">Raching Cars</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <Link to='/' className="link link-hover">Home</Link>
                    <Link to='/AllToys' className="link link-hover">All Toys</Link>
                    <Link to='/Login' className="link link-hover">Login</Link>
                    <Link to='SignUp' className="link link-hover">Registation</Link>
                </div>
                <div>
                    <span className="footer-title">Social Link</span>
                    <Link className="link link-hover">Face book</Link>
                    <Link className="link link-hover">Whats App</Link>
                    <Link className="link link-hover">Twitter</Link>
                </div>
            </footer>
        </div>
    );
};

export default Footer;