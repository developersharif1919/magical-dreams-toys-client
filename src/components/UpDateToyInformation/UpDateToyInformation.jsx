import { useLoaderData } from 'react-router-dom';
import UpdateInfo from './UpdateInfo';
const UpDateToyInformation = () => {
    const loaderData = useLoaderData();
    const myToyInformation = loaderData.subcategories;
    return (
        <div>
           <h2>Update Information</h2>
           {
            myToyInformation.map((toyInfo, index)=><UpdateInfo key={index} toyInfo={toyInfo}></UpdateInfo>)
           }
        </div>
    );
};

export default UpDateToyInformation;