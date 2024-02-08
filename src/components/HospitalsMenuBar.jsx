import React, { useState } from "react";
import DataTable from "./DataTable";
import data from "./data.json";
import styled from "styled-components";

const AppContainer = styled.div`
  text-align: center;
  padding: 20px;
`;

const TabBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #eee;
  padding: 10px;
  margin-bottom: 20px;
`;

const Tab = styled.div`
  padding: 8px;
  cursor: pointer;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 10px;
  background-color: ${(props) => (props.active ? "#fff" : "#eee")};
`;

const App = () => {
  const [filterType, setFilterType] = useState("All");

  const handleFilterChange = (type) => {
    setFilterType(type);
  };

  return (
    <AppContainer>
      <h1>Hospitals</h1>
      <TabBar>
        <div>Sheets: </div>
        <Tab
          active={filterType === "All"}
          onClick={() => handleFilterChange("All")}
        >
          Sheet1
        </Tab>
        <Tab
          active={filterType === "Government"}
          onClick={() => handleFilterChange("Government")}
        >
          Sheet2
        </Tab>
        <Tab
          active={filterType === "Private"}
          onClick={() => handleFilterChange("Private")}
        >
          Sheet3
        </Tab>
      </TabBar>
      <DataTable data={data} filterType={filterType} />
    </AppContainer>
  );
};

export default App;
