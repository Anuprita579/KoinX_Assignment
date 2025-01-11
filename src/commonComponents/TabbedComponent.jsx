import * as React from "react";
//MUI Components
import { Tabs, Tab, Box } from "@mui/material";
//Context
import { useScroll } from "../utils/context/ScrollContext";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const TabbedComponent = (props) => {
  const { tabsList } = props;
  const [value, setValue] = React.useState(0);
  const { scrollToSection } = useScroll(); // Get scrollToSection from context

  const handleChange = (event, newValue) => {
    setValue(newValue);
    scrollToSection(tabsList[newValue]); // Scroll to the section corresponding to the tab
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          {tabsList.map((tabElement, idx) => (
            <Tab key={idx} label={tabElement} {...a11yProps(idx)} />
          ))}
        </Tabs>
      </Box>
    </Box>
  );
};

export default TabbedComponent;
