import { useState } from 'react';

const UpdateInfo = ({ toyInfo }) => {
    const { id, pictureUrl, subCName, name, sellerName, sellerEmail, price, rating, availableQuantity, detailDescription } = toyInfo;

    const [updatedPrice, setUpdatedPrice] = useState(price);
    const [updatedAvailableQuantity, setUpdatedAvailableQuantity] = useState(availableQuantity);
    const [updatedDetailDescription, setUpdatedDetailDescription] = useState(detailDescription);

    const handleUpdate = event => {
        event.preventDefault();

        const updatedSubcategory = {
            id: id, // Subcategory ID
            price: updatedPrice,
            availableQuantity: updatedAvailableQuantity,
            detailDescription: updatedDetailDescription
          };

          fetch(`http://localhost:5000/updatetoys/${id}`, {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedSubcategory)
          })
            .then(res => res.json())
            .then(data => {
              console.log(data);
              if (data.modifiedCount > 0) {
                alert('Subcategory information updated successfully');
              }
            });
        };

    return (
        <div>
            <h2 className='text-center text-4xl font-bold'>Update Toy Information</h2>
            <form onSubmit={handleUpdate} className='w-1/2 mx-auto'>
            <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name:</span>
                    </label>
                    <input type="text" value={name} className="input input-bordered" placeholder='Enter Toy Name'  readOnly  />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Picture URL of the toy:</span>
                    </label>
                    <input type="text"  value={pictureUrl} className="input input-bordered" readOnly/>
                </div>


                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Seller Name:</span>
                    </label>
                    <input type="text" value={sellerName} className="input input-bordered" readOnly />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Seller Email:</span>
                    </label>
                    <input type="email" value={sellerEmail} className="input input-bordered" readOnly  />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Sub Category:</span>
                    </label>
                    <input type="email" value={subCName} className="input input-bordered" readOnly  />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input
                        type="number"
                        value={updatedPrice}
                        onChange={event => setUpdatedPrice(event.target.value)}
                        className="input input-bordered"
                        required
                    />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Rating:</span>
                    </label>
                    <input type="number" value={rating} className="input input-bordered" readOnly />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">AvailableQuantity:</span>
                    </label>
                    <input
                        type="number"
                        value={updatedAvailableQuantity}
                        onChange={event => setUpdatedAvailableQuantity(event.target.value)}
                        className="input input-bordered"
                        required
                    />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Detail Description:</span>
                    </label>
                    <textarea
                        className="input input-bordered"
                        value={updatedDetailDescription}
                        onChange={event => setUpdatedDetailDescription(event.target.value)}
                        required
                    ></textarea>
                </div>

                <button className="btn btn-block" type="submit">Update Toy</button>
            </form>
        </div>
    );
};

export default UpdateInfo;
