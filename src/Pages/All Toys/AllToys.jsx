
import { useLoaderData } from 'react-router-dom';
import Toy from '../../components/Toy/Toy';
import { useState } from 'react';

const AllToys = () => {
    const loadedToys = useLoaderData();
    const [showAll, setShowAll] = useState(false);
    const [displayCount, setDisplayCount] = useState(2);
    const [searchKeyword, setSearchKeyword] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSeeAllToys = () => {
        setShowAll(true);
        setDisplayCount(searchResults.length);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        fetch(`http://localhost:5000/toys?search=${searchKeyword}`)
            .then((response) => response.json())
            .then((data) => {
                setSearchResults(data);
                setShowAll(false);
                setDisplayCount(2);
            })
            .catch((error) => {
                console.error('Error searching toys:', error);
            });
    };

    const toysToDisplay = searchKeyword ? searchResults : loadedToys;


    console.log('Loaded Users', loadedToys);
    return (
        <div>
            <h1 className='text-center'>Total Toys:{loadedToys.length}</h1>
            <form onSubmit={handleSearch} className='flex justify-center mt-4'>
                <input
                    type='text'
                    placeholder='Search by Toy Name'
                    value={searchKeyword}
                    onChange={(e) => setSearchKeyword(e.target.value)}
                    className='px-4 py-2 mr-2 border'
                />
                <button type='submit' className='px-4 py-2 bg-blue-500 text-white rounded'>
                    Search
                </button>
            </form>
            {searchResults.length === 0 && searchKeyword && (
                <div className='text-center mt-4'>No search results found.</div>
            )}
            <div>
                {toysToDisplay.slice(0, displayCount).map((data) => data.subcategories.map((toy, index) => <Toy key={index} toy={toy} />))}
            </div>
            {!showAll && toysToDisplay.length > 2 && (
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