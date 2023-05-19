import { useNavigate } from "react-router-dom";


const Toy = ({ toy }) => {
    const { id, name, sellerName, subCName, price, availableQuantity } = toy;
    const navigate = useNavigate();

    const handleNavigation = (id) => {
        console.log(id)
        navigate(`/ToyDetails/${id}`);
    };

    return (
        <div className="overflow-x-auto">
            <table className="w-full  mx-auto border">
                <tbody>
                <tr className="bg-gray-100 hover:bg-gray-200">
                    <td className="border px-4 py-2">
                        <div className="flex flex-col">
                            <label className="font-bold">Seller Name</label>
                            <span>{sellerName}</span>
                        </div>
                    </td>
                    <td className="border px-4 py-2">
                        <div className="flex flex-col">
                            <label className="font-bold">Toy Name</label>
                            <span>{name}</span>
                        </div>
                    </td>
                    <td className="border px-4 py-2">
                        <div className="flex flex-col">
                            <label className="font-bold">Sub-category</label>
                            <span>{subCName}</span>
                        </div>
                    </td>
                    <td className="border px-4 py-2">
                        <div className="flex flex-col">
                            <label className="font-bold">Price</label>
                            <span>${price}</span>
                        </div>
                    </td>
                    <td className="border px-4 py-2">
                        <div className="flex flex-col">
                            <label className="font-bold">Available Quantity</label>
                            <span>{availableQuantity}</span>
                        </div>
                    </td>
                    <td className="border px-4 py-2">
                        <button onClick={() => handleNavigation(id)} className="px-4 py-2 bg-blue-500 text-white rounded">View Details</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Toy;
