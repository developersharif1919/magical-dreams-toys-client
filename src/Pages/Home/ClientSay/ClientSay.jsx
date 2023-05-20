import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ClientSay = () => {
    const testimonials = [
        {
            id: 1,
            name: 'John Doe',
            role: 'CEO, Company A',
            image: 'https://img.freepik.com/free-photo/portrait-beautiful-face-young-woman-with-long-brown-hair_186202-4331.jpg?w=740&t=st=1684598060~exp=1684598660~hmac=e8904db7f7655e1213bb156eb990ff4a6f8c5297f1f60be8de7408cb8e80d314',
            comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor gravida nibh vitae condimentum.',
        },
        {
            id: 2,
            name: 'Jane Smith',
            role: 'CTO, Company B',
            image: 'https://img.freepik.com/free-photo/portrait-beautiful-face-young-woman-with-long-brown-hair_186202-4331.jpg?w=740&t=st=1684598060~exp=1684598660~hmac=e8904db7f7655e1213bb156eb990ff4a6f8c5297f1f60be8de7408cb8e80d314',
            comment: 'Nulla facilisi. Mauris pretium diam id nisi rhoncus, sed convallis leo tincidunt. Integer eleifend nunc.',
        },
        {
            id: 3,
            name: 'John Doe',
            role: 'CEO, Company A',
            image: 'https://img.freepik.com/free-photo/portrait-beautiful-face-young-woman-with-long-brown-hair_186202-4331.jpg?w=740&t=st=1684598060~exp=1684598660~hmac=e8904db7f7655e1213bb156eb990ff4a6f8c5297f1f60be8de7408cb8e80d314',
            comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor gravida nibh vitae condimentum.',
        },
        {
            id: 4,
            name: 'Jane Smith',
            role: 'CTO, Company B',
            image: 'https://img.freepik.com/free-photo/portrait-beautiful-face-young-woman-with-long-brown-hair_186202-4331.jpg?w=740&t=st=1684598060~exp=1684598660~hmac=e8904db7f7655e1213bb156eb990ff4a6f8c5297f1f60be8de7408cb8e80d314',
            comment: 'Nulla facilisi. Mauris pretium diam id nisi rhoncus, sed convallis leo tincidunt. Integer eleifend nunc.',
        },
        {
            id: 5,
            name: 'John Doe',
            role: 'CEO, Company A',
            image: 'https://img.freepik.com/free-photo/portrait-beautiful-face-young-woman-with-long-brown-hair_186202-4331.jpg?w=740&t=st=1684598060~exp=1684598660~hmac=e8904db7f7655e1213bb156eb990ff4a6f8c5297f1f60be8de7408cb8e80d314',
            comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor gravida nibh vitae condimentum.',
        },
        {
            id: 6,
            name: 'Jane Smith',
            role: 'CTO, Company B',
            image: 'https://img.freepik.com/free-photo/portrait-beautiful-face-young-woman-with-long-brown-hair_186202-4331.jpg?w=740&t=st=1684598060~exp=1684598660~hmac=e8904db7f7655e1213bb156eb990ff4a6f8c5297f1f60be8de7408cb8e80d314',
            comment: 'Nulla facilisi. Mauris pretium diam id nisi rhoncus, sed convallis leo tincidunt. Integer eleifend nunc.',
        },
    ];

    // Split the testimonials array into chunks of 2 items
    const testimonialsChunks = testimonials.reduce(
        (acc, item, index) => (index % 2 === 0 ? [...acc, testimonials.slice(index, index + 2)] : acc),
        []
    );

    return (
        <section className="py-8 mt-28 bg-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-5xl text-center mb-28 mt-16 font-bold text-gray-800">Our Client Say</h2>
                <Carousel
                    showArrows={true}
                    showIndicators={true}
                    showStatus={false}
                    infiniteLoop={true}
                    autoPlay={true}
                    interval={2000}
                    stopOnHover={true}
                    swipeable={true}
                    emulateTouch={true}
                    transitionTime={500}
                    swipeScrollTolerance={5}
                    centerMode={false}
                    selectedItem={0}
                    dynamicHeight={false}
                    renderThumbs={() => { }}
                    className="mt-4"
                >
                    {testimonialsChunks.map((chunk, index) => (
                        <div key={index} className="flex justify-center">
                            {chunk.map((testimonial) => (
                                <div key={testimonial.id} className="bg-white rounded-lg shadow-lg p-6 mx-4">
                                    <div className="flex w-full justify-evenly items-center mb-4">
                                        <div className='w-1/3'>
                                            <img className="  rounded-full" src={testimonial.image} alt={testimonial.name} />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-gray-800">{testimonial.name}</h3>
                                            <p className="text-sm text-gray-600">{testimonial.role}</p>
                                        </div>
                                    </div>
                                    <p className="text-gray-700">{testimonial.comment}</p>
                                </div>
                            ))}
                        </div>
                    ))}
                </Carousel>
            </div>
        </section>
    );
};

export default ClientSay;
