import React, { useState, useEffect } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import axios from 'axios';
import SpTabToyDetails from './SpTabToyDetails';

const ShopByCategory = () => {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  const [sportsData, setSportsData] = useState([]);
  const [emergencyData, setEmergencyData] = useState([]);
  const [racingData, setRacingData] = useState([]);

  const handleMainTabSelect = (index) => {
    setSelectedTabIndex(index);
  };

  const fetchData = async (categoryName, subCName) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/tabtoys?categoryName=${encodeURIComponent(categoryName)}&subCName=${encodeURIComponent(subCName)}`
      );
      const data = response.data;

      if (categoryName === 'Sports Cars' && subCName.includes('Lamborghini')) {
        setSportsData(data);
      } else if (categoryName === 'Emergency Vehicles' && subCName.includes('Mini Police Cars')) {
        setEmergencyData(data);
      } else if (categoryName === 'Racing Cars' && subCName.includes('Formula 1 cars')) {
        setRacingData(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const tabs = ['Sports Cars', 'Emergency Vehicles', 'Racing Cars'];
    const categoryName = tabs[selectedTabIndex];
    let subCName = '';

    if (selectedTabIndex === 0) {
      subCName = 'Lamborghini';
    } else if (selectedTabIndex === 1) {
      subCName = 'Mini Police Cars';
    } else if (selectedTabIndex === 2) {
      subCName = 'Formula 1 cars';
    }

    fetchData(categoryName, subCName);
  }, [selectedTabIndex]);

  return (
    <div className='text-center p-5 border mt-12'>
        <h2 className='text-5xl mb-12 mt-5'>Shop By Category</h2>
      <Tabs selectedIndex={selectedTabIndex} onSelect={handleMainTabSelect}>
        <TabList>
          <Tab>Sports Cars</Tab>
          <Tab>Emergency Vehicles</Tab>
          <Tab>Racing Cars:</Tab>
        </TabList>

        <TabPanel>
        {selectedTabIndex === 0 &&
            <div className="grid grid-cols-2 gap-4">
              {sportsData.map((spData, index) => (
                <div key={index}>
                  {spData.subcategories.map((spToys, subIndex) => (
                    <SpTabToyDetails key={subIndex} spToys={spToys} />
                  ))}
                </div>
              ))}
            </div>
          }
       
        </TabPanel>

        <TabPanel>
        {selectedTabIndex === 1 &&
            <div className="grid grid-cols-2 gap-4">
              {emergencyData.map((emData, index) => (
                <div key={index}>
                  {emData.subcategories.map((spToys, subIndex) => (
                    <SpTabToyDetails key={subIndex} spToys={spToys} />
                  ))}
                </div>
              ))}
            </div>
          }
        </TabPanel>

        <TabPanel>
        {selectedTabIndex === 2 &&
            <div className="grid grid-cols-2 gap-4">
              {racingData.map((rcData, index) => (
                <div key={index}>
                  {rcData.subcategories.map((spToys, subIndex) => (
                    <SpTabToyDetails key={subIndex} spToys={spToys} />
                  ))}
                </div>
              ))}
            </div>
          }
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ShopByCategory;
