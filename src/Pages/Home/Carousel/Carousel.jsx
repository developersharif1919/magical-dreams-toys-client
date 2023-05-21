import React from 'react';
import './Carousel.css'

const Carousel = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" style={{height:'35%',padding:'40px',boxSizing:'border-box'}} className="carousel-item carousel-bg bg-1 relative w-full bg-black">
                    <div style={{width:'80%',position:'relative',top:'0', right:'0'}} className='flex mx-auto border items-center justify-between'>
                        <div className='w-1/2'>
                            <img className='' src='https://img.freepik.com/free-vector/artist-robot_1268-53.jpg?w=740&t=st=1684425808~exp=1684426408~hmac=61e4534d434e614063348569b27b3a0a6b8b828decb7db0735a43c49b9e2ad3d' />
                        </div>
                        <div style={{boxSizing:'border-box'}} className='text-center text-white'>
                            <h2>We help you take care of the kids</h2>
                            <p>Not only do we sell toys, but we also try to make sure that your children are safe playing, learning, and having fun! </p>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>

                <div id="slide2" style={{height:'35%',padding:'40px',boxSizing:'border-box'}} className="carousel-item carousel-bg bg-2 relative w-full bg-black">
                    <div style={{width:'80%',position:'relative',top:'0', right:'0'}} className='flex mx-auto border items-center justify-between'>
                        <div className='w-1/2'>
                            <img className='' src='https://img.freepik.com/free-vector/sticker-design-with-side-view-police-car-isolated_1308-76459.jpg?w=740&t=st=1684684836~exp=1684685436~hmac=7a78ca5b53e32c6ffdda70a8f35522c134756460136c29f4f03a67aada89e42a' />
                        </div>
                        <div style={{boxSizing:'border-box'}} className='text-center text-white'>
                            <h2>We help you take care of the kids</h2>
                            <p>Not only do we sell toys, but we also try to make sure that your children are safe playing, learning, and having fun! </p>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>

                 <div id="slide3" style={{height:'35%',padding:'40px',boxSizing:'border-box'}} className="carousel-item carousel-bg bg-3 relative w-full bg-black">
                    <div style={{width:'80%',position:'relative',top:'0', right:'0'}} className='flex mx-auto border items-center justify-between'>
                        <div className='w-1/2'>
                            <img className='' src='https://img.freepik.com/free-vector/artist-robot_1268-53.jpg?w=740&t=st=1684425808~exp=1684426408~hmac=61e4534d434e614063348569b27b3a0a6b8b828decb7db0735a43c49b9e2ad3d' />
                        </div>
                        <div style={{boxSizing:'border-box'}} className='text-center text-white'>
                            <h2>We help you take care of the kids</h2>
                            <p>Not only do we sell toys, but we also try to make sure that your children are safe playing, learning, and having fun! </p>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carousel;