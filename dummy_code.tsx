import React, { useState } from 'react';

const DynamicTabbedDataView = () => {
  // Sample data structure as provided - fixed structure based on your original data
  const data = {
    "CSR_NonSec": {
      "Delta": {
        "Bucket Change By Name": "some data 1",
        "Largest Movements in Exposures": "some data 2",
        "Long/Short Exposures": "some data 3",
        "summary - Bucket level": "some data 4"
      },
      "Vega": {
        "Bucket Change By Name": "some data 1",
        "Largest Movements in Exposures": "some data 2",
        "Long/Short Exposures": "some data 3", 
        "summary - Bucket level": "some data 4"
      }
    },
    "Equity": {
      "Delta": {
        "Bucket Change By Name": "some data 1",
        "Largest Movements in Exposures": "some data 2",
        "Long/Short Exposures": "some data 3", 
        "summary - Bucket level": "some data 4"
      }
    }
  };

  // Tab configuration with TabType_RootKey format
  const tabConfig = [
    "Bucket change by name_CSR_NonSec", 
    "Exposure overview_CSR_NonSec", 
    "Bucket change by name_Equity", 
    "Exposure overview_Equity"
  ];
  
  // State to track the active tab
  const [activeTab, setActiveTab] = useState(tabConfig[0]);

  // Parse tab name to extract the root key and tab type
  const parseTabName = (tabName) => {
    // Find the last underscore to split the string
    const lastUnderscoreIndex = tabName.lastIndexOf('_');
    if (lastUnderscoreIndex === -1) {
      return { rootKey: "", tabType: tabName };
    }
    
    const tabType = tabName.substring(0, lastUnderscoreIndex);
    const rootKey = tabName.substring(lastUnderscoreIndex + 1);
    
    return { rootKey, tabType };
  };

  // Function to extract data for tabs based on config
  const getTabContent = (tabName) => {
    const { rootKey, tabType } = parseTabName(tabName);
    
    if (!data[rootKey]) {
      return <div className="p-4">No data found for {rootKey}</div>;
    }
    
    // For "Bucket change by name" tabs
    if (tabType === "Bucket change by name") {
      return (
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4">Bucket Change By Name - {rootKey}</h2>
          
          {Object.keys(data[rootKey]).map(measureType => (
            <div key={measureType} className="mb-6">
              <h3 className="text-lg font-semibold mb-2">{measureType}</h3>
              {data[rootKey][measureType]["Bucket Change By Name"] ? (
                <div className="p-4 bg-gray-100 rounded">
                  {data[rootKey][measureType]["Bucket Change By Name"]}
                </div>
              ) : (
                <div className="p-4 bg-gray-100 rounded">No data available</div>
              )}
            </div>
          ))}
        </div>
      );
    } 
    // For "Exposure overview" tabs
    else if (tabType === "Exposure overview") {
      return (
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4">Exposure Overview - {rootKey}</h2>
          
          {Object.keys(data[rootKey]).map(measureType => (
            <div key={measureType} className="mb-6">
              <h3 className="text-lg font-semibold mb-2">{measureType}</h3>
              {Object.entries(data[rootKey][measureType])
                .filter(([key]) => key !== "Bucket Change By Name")
                .map(([key, value]) => (
                  <div key={key} className="mb-4">
                    <h4 className="font-medium mb-1">{key}</h4>
                    <div className="p-4 bg-gray-100 rounded">{value}</div>
                  </div>
                ))}
            </div>
          ))}
        </div>
      );
    }
    
    return <div className="p-4">Tab content not found</div>;
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Tab navigation */}
      <div className="border-b border-gray-200 overflow-x-auto">
        <nav className="flex">
          {tabConfig.map((tab) => {
            const { tabType, rootKey } = parseTabName(tab);
            return (
              <button
                key={tab}
                className={`py-4 px-6 font-medium whitespace-nowrap ${
                  activeTab === tab
                    ? "border-b-2 border-blue-500 text-blue-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {`${tabType}_${rootKey}`}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Tab content */}
      <div className="py-4">
        {getTabContent(activeTab)}
      </div>
      
      {/* Debug section - Remove in production */}
      <div className="mt-8 p-4 border-t border-gray-200">
        <h3 className="font-bold mb-2">Debug Info:</h3>
        <p>Active Tab: {activeTab}</p>
        <p>Root Key: {parseTabName(activeTab).rootKey}</p>
        <p>Tab Type: {parseTabName(activeTab).tabType}</p>
        <div className="mt-4">
          <h4 className="font-bold">Available Data:</h4>
          <pre className="bg-gray-100 p-4 mt-2 overflow-auto max-h-64 text-xs">
            {JSON.stringify(data, null, 2)}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default DynamicTabbedDataView;
