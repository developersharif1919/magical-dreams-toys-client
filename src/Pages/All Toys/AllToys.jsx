
import { useLoaderData } from 'react-router-dom';
import Toy from '../../components/Toy/Toy';
import { useState } from 'react';

const AllToys = () => {
    const loadedToys = useLoaderData();
    const [showAll, setShowAll] = useState(false);
    const [displayCount, setDisplayCount] = useState(2);

    const handleSeeAllToys = () => {
        setShowAll(true);
        setDisplayCount(loadedToys.length);
    };

    console.log('Loaded Users', loadedToys);
    return (
        <div>
            <h1 className='text-center'>Total Toys:{loadedToys.length}</h1>
            <div>
                {loadedToys.slice(0, displayCount).map((data) => data.subcategories.map((toy, index) => <Toy key={index} toy={toy}></Toy>))}
            </div>
            {!showAll && loadedToys.length > 2 && (
                <div className="flex justify-center mt-4">
                    <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={handleSeeAllToys}>
                        See More
                    </button>
                </div>
            )}
        </div>
    );
};

export default AllToys;