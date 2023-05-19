import{ useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ShopByCategory = () => {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  const handleMainTabSelect = (index) => {
    setSelectedTabIndex(index);
  };

  return (
    <div className='text-center p-5'>
      <Tabs selectedIndex={selectedTabIndex} onSelect={handleMainTabSelect}>
        <TabList>
          <Tab>Sports Cars</Tab>
          <Tab>Emergency Vehicles</Tab>
          <Tab>Racing Cars:</Tab>
        </TabList>

        <TabPanel>
          <Tabs>
            <TabList>
              <Tab>Formula 1 cars</Tab>
              <Tab>Lamborghini</Tab>
              <Tab>Muscle cars</Tab>
            </TabList>
            <TabPanel>
              <h3>Extra tab content 12212</h3>
              <h3>Extra tab content 32121</h3>
              <h3>Extra tab content 4654</h3>
            </TabPanel>
            <TabPanel>
              <h3>Extra tab content</h3>
              <h3>Extra tab content</h3>
              <h3>Extra tab content</h3>
            </TabPanel>
            <TabPanel>
              <h3>Extra tab content</h3>
              <h3>Extra tab content</h3>
              <h3>Extra tab content</h3>
            </TabPanel>
          </Tabs>
        </TabPanel>

        <TabPanel>
          <Tabs>
            <TabList>
              <Tab>Mini Fire Trucks</Tab>
              <Tab>Mini Police Cars</Tab>
              <Tab>Ambulances</Tab>
            </TabList>
            <TabPanel>
              <h3>Extra tab content</h3>
              <h3>Extra tab content</h3>
              <h3>Extra tab content</h3>
            </TabPanel>
            <TabPanel>
              <h3>Extra tab content</h3>
              <h3>Extra tab content</h3>
              <h3>Extra tab content</h3>
            </TabPanel>
            <TabPanel>
              <h3>Extra tab content</h3>
              <h3>Extra tab content</h3>
              <h3>Extra tab content</h3>
            </TabPanel>
          </Tabs>
        </TabPanel>

        <TabPanel>
          <Tabs>
            <TabList>
              <Tab>Racing Cars</Tab>
              <Tab>NASCAR cars</Tab>
              <Tab>Dragsters</Tab>
            </TabList>
            <TabPanel>
              <h3>Extra tab content</h3>
              <h3>Extra tab content</h3>
              <h3>Extra tab content</h3>
            </TabPanel>
            <TabPanel>
              <h3>Extra tab content</h3>
              <h3>Extra tab content</h3>
              <h3>Extra tab content</h3>
            </TabPanel>
            <TabPanel>
              <h3>Extra tab content</h3>
              <h3>Extra tab content</h3>
              <h3>Extra tab content</h3>
            </TabPanel>
          </Tabs>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ShopByCategory;
