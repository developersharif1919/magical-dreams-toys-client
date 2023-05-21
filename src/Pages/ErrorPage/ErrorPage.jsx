import React from 'react';
import { motion } from 'framer-motion';
import './ErrorPage.css'
import { useNavigate } from 'react-router-dom';
import errorImg from '../../assets/images/404.jpg'

const ErrorPage = ({ error }) => {
    const navigate = useNavigate();
    const handleBackToHome = () => {
        navigate('/');
    }
    return (
        <div className="error-page">
            <motion.div
                className="error-content"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className='flex justify-center'>
                    <img
                        src={errorImg}
                        alt="Error"
                        className="error-image"
                    />
                </div>
                <h1 className="error-title">Oops!  Page Not Found</h1>
                <p className="error-message">{error}</p>
                <button className="btn btn-outline mt-8" onClick={handleBackToHome}>
                    Back to Home
                </button>
            </motion.div>
        </div>
    );
};

export default ErrorPage;