import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FaStar } from 'react-icons/fa';

const ClientSay = () => {
    const testimonials = [
        {
            id: 1,
            name: 'Suborna',
            role: 'Managing Director',
            image: 'https://img.freepik.com/free-photo/portrait-beautiful-face-young-woman-with-long-brown-hair_186202-4331.jpg?w=740&t=st=1684598060~exp=1684598660~hmac=e8904db7f7655e1213bb156eb990ff4a6f8c5297f1f60be8de7408cb8e80d314',
            comment: 'Of course Id be happy to hear your review or any feedback you have about the Magical Dreams Toy. Please go ahead and share your thoughts.',
        },
        {
            id: 2,
            name: 'Tamanna',
            role: 'CTO, IT Company',
            image: 'https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?w=740&t=st=1684687585~exp=1684688185~hmac=78d046fb51ec681e3d2e0560bfd491935520870eae1621a61c1281f4686aa7ad',
            comment: 'I am absolutely thrilled with the Magical Dreams Toy! It has exceeded all my expectations and has become an instant favorite in our household. The toys magical features truly bring joy and wonder to my child s playtime',
        },
        {
            id: 3,
            name: 'Adrian',
            role: 'CEO, Friends Coder',
            image: 'https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?w=740&t=st=1684687413~exp=1684688013~hmac=4dd51b96ff8075b58a721145a705061816558a3c2b6ca0fe7d5116a2ca45f0bd',
            comment: 'Magical Dreams Toy has captivated our imagination with its mesmerizing lights, sounds, and interactive features. It has a magical quality that instantly sparks curiosity and wonder. We found ourselves eagerly exploring all the different modes and activities it offers',
        },
        {
            id: 4,
            name: 'Akash',
            role: 'Designer',
            image: 'https://img.freepik.com/free-photo/friendly-young-man-smiles-good-joke-has-fair-hair-blue-eyes-dressed-casually-looks-with-pleased-expression-rejoices-success-being-lucky-student-people-positiveness-concept_176420-13653.jpg?w=740&t=st=1684687518~exp=1684688118~hmac=1eaab0ec1ea6625ca0d4030573477bf80ff61b5ec150698709170b083d30b3ee',
            comment: 'One of the standout features of the Magical Dreams Toy is its ease of use. The intuitive controls and clear instructions make it accessible to children of different ages. It is a toy that both kids and parents can enjoy together, fostering quality bonding time.',
        },
        {
            id: 5,
            name: 'Rasheda',
            role: 'Housewife',
            image: 'https://img.freepik.com/free-photo/hair-style-street-fashion-beautiful-girl_1139-844.jpg?w=740&t=st=1684687655~exp=1684688255~hmac=d5ce88d274c91aed591f06d5b7d1a7427804e23e46273a6779785a4d1664e31c',
            comment: ' Magical Dreams Toy has exceeded our expectations in every way. It has brought joy, creativity, and education into our lives. We highly recommend it to anyone seeking a magical and engaging toy that will bring endless delight to children and adults alike.',
        },
        {
            id: 6,
            name: 'Jane Smith',
            role: 'CTO, Company B',
            image: 'https://img.freepik.com/free-photo/happy-young-woman-with-red-lipstick_1153-396.jpg?w=740&t=st=1684687693~exp=1684688293~hmac=4c25b5c78773838e73688c00b1c26c471d4f87219fe28a89ed76edf423fbddee',
            comment: 'I must commend the customer service provided by Magical Dreams Toys. They were prompt, friendly, and resolved any queries or concerns I had promptly',
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
                <h2 className="text-5xl text-center mb-28 mt-16 font-bold text-gray-800">Our Customer Reviews</h2>
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
                                        <div style={{ width: '200px', height: '200px' }} className='rounded-full'>
                                            <img style={{ width: '200px', height: '200px' }} className="  rounded-full" src={testimonial.image} alt={testimonial.name} />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-gray-800">{testimonial.name}</h3>
                                            <p className="text-sm text-gray-600">{testimonial.role}</p>
                                            <div className="flex items-center mt-5 mb-4">
                                                <FaStar className="text-yellow-500" />
                                                <FaStar className="text-yellow-500" />
                                                <FaStar className="text-yellow-500" />
                                                <FaStar className="text-yellow-500" />
                                                <FaStar className="text-yellow-500" />
                                            </div>
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
