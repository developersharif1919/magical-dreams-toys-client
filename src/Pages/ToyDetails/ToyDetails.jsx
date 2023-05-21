
import { useLoaderData } from 'react-router-dom';
import ShowToyDetails from '../../components/ShowToyDetails/ShowToyDetails';
import { useEffect } from 'react';

const ToyDetails = () => {

    const loaderData = useLoaderData();
    const toyInformation = loaderData.subcategories;
    useEffect(() => {
        document.title = "MDT | Toy Details";
    }, []);

    return (
        <div>
            <div>
                {
                    toyInformation.map((toyInfo, index) => <ShowToyDetails key={index} toyInfo={toyInfo}></ShowToyDetails>)
                }
            </div>
        </div>
    );
};

export default ToyDetails;