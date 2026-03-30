// import React from 'react'
import React, { useState } from "react";
import { Tabs, Tab, Box } from "@mui/material";


interface TabItem {
  label: string;
  content: React.ReactNode;
}


interface TabComponentProps {
  tabs: TabItem[];
  tabDesignColor?: "greenTab" | "blackTab"

}

const TabCommon: React.FC<TabComponentProps> = ({ tabs, tabDesignColor }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    // Use the event parameter here
    console.log(event);

    setValue(newValue);
  };
  return (
    <>
        {/* TabCommon */}
        <Box className={`tabDesignCommon ${tabDesignColor}`}>
            <Tabs value={value} onChange={handleChange}>
                {tabs.map((tab, index) => (
                // <Tab key={index} label={tab.label} className={tabDesignColor}/>
                // className={`tabDesignCommon ${tabDesignColor}`}
                // className={value === index ? "custom-tab active-tab tabDesignCommon" : "custom-tab"
                <Tab key={index} label={tab.label} value={index} />
                ))}
            </Tabs>

            <Box sx={{ mt: 2 }}>
                {tabs.map((tab, index) =>
                value === index ? <div key={index}>{tab.content}</div> : null
                )}
            </Box>
    </Box>

        
    </>
  )
}

export default TabCommon