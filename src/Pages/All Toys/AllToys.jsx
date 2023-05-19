
import {  useLoaderData } from 'react-router-dom';
import Toy from '../../components/Toy/Toy';

const AllToys = () => {
    const loadedToys = useLoaderData();

    console.log('Loaded Users',loadedToys);
    return (
        <div>
            <h1 className='text-center'>Total Toys:{loadedToys.length}</h1>

            <div>
               {
                loadedToys.map((data)=>data.subcategories.map((toy, index)=><Toy key={index} toy={toy}></Toy>))
               }
            </div>
        </div>
    );
};

export default AllToys;