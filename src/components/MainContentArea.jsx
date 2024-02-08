import React, { useState } from "react";
import styled from "styled-components";
import TwoBoxesComponent from "./TwoBoxesComponent";
import MapBox from "./MapBox";
import DBPrimaryBox from "./DBPrimaryBox";
import Speciality from "./Speciality";
import DistrictDashboard from "./DistrictDashboard";
import boxesData from "../assets/data/boxesData.json";
import sData from "../assets/data/speciality.json";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #0498db; /* Black background */
  padding: 0px;
  width: 100vw;
  overflow-y: auto;
  background-color: #03122d;
`;

const BoxesContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  width: 100vw;
  height:100vh
  background-color: #03122d; 
  margin: 30px;
`;

const TabbedMenu = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 20px;
  background-color: #051b41;
  border-bottom: none;
`;

const HospitalsText = styled.p`
  margin-right: auto;
  color: white;
  margin-left: 2vw;
`;

const Tab = styled.div`
  padding: 10px;
  background-color: ${({ isActive }) => (isActive ? "#333" : "#555")};
  color: white;
  text-align: center;
  cursor: pointer;
  margin-left: 5px; /* Add margin between tabs */
  margin-right: 0.5vw;
  border-bottom: none;
`;

const MainContentArea = () => {
  const [activeTab, setActiveTab] = useState("All");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const { boxes } = boxesData;

  const { speciality } = sData;

  return (
    <Container>
      <BoxesContainer>
        <DBPrimaryBox boxes={boxes} />
      </BoxesContainer>

      <TabbedMenu>
        <HospitalsText>Hospitals</HospitalsText>
        <div style={{ display: "flex", marginLeft: "auto" }}>
          <Tab
            isActive={activeTab === "All"}
            onClick={() => handleTabClick("All")}
          >
            All
          </Tab>
          <Tab
            isActive={activeTab === "Government"}
            onClick={() => handleTabClick("Government")}
          >
            Government
          </Tab>
          <Tab
            isActive={activeTab === "Private"}
            onClick={() => handleTabClick("Private")}
          >
            Private
          </Tab>
        </div>
      </TabbedMenu>

      <MapBox />

      <TwoBoxesComponent />

      <Speciality speciality={speciality} />
      <DistrictDashboard />
    </Container>
  );
};

export default MainContentArea;
