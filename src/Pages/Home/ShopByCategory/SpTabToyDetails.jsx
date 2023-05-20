import { useNavigate } from "react-router-dom";


const SpTabToyDetails = ({ spToys }) => {
    const {id, pictureUrl, name, price, rating } = spToys;
    console.log('spToys', spToys);
    const navigate = useNavigate();
    const handleNavigation = (id) => {
        console.log(id)
        navigate(`/ToyDetails/${id}`);
    };

    return (
        <div style={{height:'250px'}} className="card items-center border card-side bg-base-100 shadow-xl">
            <figure style={{height:'150px'}} className="md:w-1/3">
                <img className="h-full" src={pictureUrl} alt="Movie" />
            </figure>
            <div className="card-body justify-between flex-row items-center ">
                <div>
                    <p className=" text-lg">ToyName: {name}</p>
                    <p className="text-lg">ToyPrice: {price}</p>
                    <p className="text-lg">Ratings: {rating}</p>
                </div>
                <div className="card-actions justify-end">
                <button onClick={() => handleNavigation(id)} className="px-4 py-2 bg-blue-500 text-white rounded">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default SpTabToyDetails;
