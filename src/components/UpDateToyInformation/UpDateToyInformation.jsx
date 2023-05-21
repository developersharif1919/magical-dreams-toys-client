import { useLoaderData } from 'react-router-dom';
import UpdateInfo from './UpdateInfo';
import { useEffect } from 'react';
const UpDateToyInformation = () => {
    const loaderData = useLoaderData();
    const myToyInformation = loaderData.subcategories;
    useEffect(() => {
        document.title = "MDT | Update Toy Information";
    }, []);
    return (
        <div>
           <h2 className='text-center'>Update Information</h2>
           {
            myToyInformation.map((toyInfo, index)=><UpdateInfo key={index} toyInfo={toyInfo}></UpdateInfo>)
           }
        </div>
    );
};

export default UpDateToyInformation;