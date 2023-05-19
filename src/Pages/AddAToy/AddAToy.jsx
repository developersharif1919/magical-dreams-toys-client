import { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const AddAToy = () => {
    const { user } = useContext(AuthContext);
    console.log('uuuuu', user)

    const [pictureUrl, setPictureUrl] = useState('');
    const [name, setName] = useState('');
    const [sellerName, setSellerName] = useState('');
    const [sellerEmail, setSellerEmail] = useState('');
    const [category, setCategory] = useState('');
    const [subCategory, setSubCategory] = useState('');
    const [price, setPrice] = useState('');
    const [rating, setRating] = useState('');
    const [availableQuantity, setAvailableQuantity] = useState('');
    const [detailDescription, setDetailDescription] = useState('');



    const handleAddToy = (event) => {
        event.preventDefault();

        const toyInformation = {
            name:category,
            category: {
                name: category,
                subcategories: [
                    {
                        name: name,
                        price: parseFloat(price),
                        rating: parseFloat(rating),
                        availableQuantity: parseInt(availableQuantity),
                        detailDescription,pictureUrl,
                        sellerName:user?.displayName,
                        sellerEmail:user?.email,
                    }
                ]
            }
        }

        fetch('http://localhost:5000/toys',{
            method: "POST",
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(toyInformation)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                alert('Successful');
            }
        })
        console.log(toyInformation);
    }

    return (
        <div>
            <h2 className='text-center text-4xl font-bold'>ADD A TOY</h2>
            <form onSubmit={handleAddToy} className='w-1/2 mx-auto'>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name:</span>
                    </label>
                    <input type="text" value={name} className="input input-bordered" placeholder='Enter Toy Name' onChange={(e) => setName(e.target.value)} required />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Picture URL of the toy:</span>
                    </label>
                    <input type="text" value={pictureUrl} className="input input-bordered" placeholder='Enter Photo URL' onChange={(e) => setPictureUrl(e.target.value)} required />
                </div>


                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Seller Name:</span>
                    </label>
                    <input type="text" className="input input-bordered" value={user?.displayName} onChange={(e) => setSellerName(e.target.value)} />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Seller Email:</span>
                    </label>
                    <input type="email" className="input input-bordered" value={user?.email} onChange={(e) => setSellerEmail(e.target.value)} />
                </div>

                <div className='mt-4 mb-4 form-control'>
                    <label>Category:</label>
                    <select className='border' value={category} onChange={(e) => setCategory(e.target.value)} required>
                        <option value="">Select</option>
                        <option value="Math Toys">Math Toys</option>
                        <option value="Language Toys">Language Toys</option>
                        <option value="Science Toys">Science Toys</option>
                    </select>
                </div>
                <div className='mb-4 form-control'>
                    <label>Sub Category:</label>
                    <select className='border' value={subCategory} onChange={(e) => setSubCategory(e.target.value)} required>
                        <option value="">Select</option>
                        <option value="Language Toys">Language Toys</option>
                        <option value="Science Toys">Science Toys</option>
                    </select>
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input type="number" value={price} className="input input-bordered" onChange={(e) => setPrice(e.target.value)} required />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Rating:</span>
                    </label>
                    <input type="number" value={rating} className="input input-bordered" onChange={(e) => setRating(e.target.value)} required />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Available Quantity:</span>
                    </label>
                    <input type="number" value={availableQuantity} className="input input-bordered" onChange={(e) => setAvailableQuantity(e.target.value)} required />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Detail Description:</span>
                    </label>
                    <textarea className="input input-bordered" value={detailDescription} onChange={(e) => setDetailDescription(e.target.value)} required></textarea>
                </div>

                <button className="btn btn-block" type="submit">Add Toy</button>
            </form>
        </div>
    );
};

export default AddAToy;