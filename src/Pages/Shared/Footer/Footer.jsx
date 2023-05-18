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
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </footer>
        </div>
    );
};

export default Footer;