import React from 'react';

const ShowToyDetails = ({ toyInfo }) => {
    const { pictureUrl, name, sellerName, sellerEmail, price, rating, availableQuantity, detailDescription } = toyInfo;

    console.log('ToyInfo', toyInfo)
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div>
                        <img src={pictureUrl} className="max-w-sm rounded-lg shadow-2xl" />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold">Toy Name: {name}</h1>
                        <p className="text-lg mt-4">Seller Name: {sellerName}</p>
                        <p className="text-lg mt-4">Seller Email: {sellerEmail}</p>
                        <p className="text-lg mt-4">Price: {price}</p>
                        <p className="text-lg mt-4">Rating: {rating}</p>
                        <p className="text-lg mt-4">Available Quantity: {availableQuantity}</p>
                        <p className="text-lg mt-4">Description: {detailDescription}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowToyDetails;