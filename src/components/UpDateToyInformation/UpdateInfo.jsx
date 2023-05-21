import { useState } from 'react';
import Swal from 'sweetalert2';

const UpdateInfo = ({ toyInfo }) => {
  const { id, name, pictureUrl, sellerName, sellerEmail, subCName, price, availableQuantity, detailDescription } = toyInfo;

  const [updatedPrice, setUpdatedPrice] = useState(price);
  const [updatedAvailableQuantity, setUpdatedAvailableQuantity] = useState(availableQuantity);
  const [updatedDetailDescription, setUpdatedDetailDescription] = useState(detailDescription);
  console.log(toyInfo)
  const handleUpdate = (event) => {
    event.preventDefault();

    const updatedSubcategory = {
      id: id,
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
        if (data.error) {
          Swal.fire({
            title: 'Error!',
            text: data.error,
            icon: 'error',
            confirmButtonText: 'OK'
          });
        } else {
          Swal.fire({
            title: 'Success!',
            text: 'Toy information updated successfully',
            icon: 'success',
            confirmButtonText: 'OK'
          });
        }
      })
      .catch(error => {
        console.log(error);
        Swal.fire({
          title: 'Error!',
          text: 'An error occurred while updating toy information',
          icon: 'error',
          confirmButtonText: 'OK'
        });
      });
  };

  return (
    <div>
      <h2 className='text-center text-4xl font-bold'>Update Toy Information</h2>
      <form onSubmit={handleUpdate} className='w-1/2 mx-auto'>
      <div className="form-control">
          <label className="label">
            <span className="label-text">Toy Name</span>
          </label>
          <input type='text'
            value={name}
            readOnly
            className="input input-bordered"
          />
        </div>
      <div className="form-control">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input type='text'
            value={pictureUrl}
            readOnly
            className="input input-bordered"
          />
        </div>
      <div className="form-control">
          <label className="label">
            <span className="label-text">Seller Name</span>
          </label>
          <input type='text'
            value={sellerName}
            readOnly
            className="input input-bordered"
          />
        </div>
      <div className="form-control">
          <label className="label">
            <span className="label-text">Seller Email</span>
          </label>
          <input type='text'
            value={sellerEmail}
            readOnly
            className="input input-bordered"
          />
        </div>
      <div className="form-control">
          <label className="label">
            <span className="label-text">Sub Category</span>
          </label>
          <input type='text'
            value={subCName}
            readOnly
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input
            type="number"
            defaultValue={updatedPrice}
            onChange={event => setUpdatedPrice(event.target.value)}
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Available Quantity</span>
          </label>
          <input
            type="number"
            defaultValue={updatedAvailableQuantity}
            onChange={event => setUpdatedAvailableQuantity(event.target.value)}
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Detail Description</span>
          </label>
          <input
            type="text"
            defaultValue={updatedDetailDescription}
            onChange={event => setUpdatedDetailDescription(event.target.value)}
            className="input input-bordered"
            required
          />
        </div>
        <button className="btn btn-block" type="submit">Update Toy</button>
      </form>
    </div>
  );
};

export default UpdateInfo;