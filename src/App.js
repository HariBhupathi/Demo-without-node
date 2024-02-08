import React, { useState } from "react";
import styled from "styled-components";
import LeftNav from "./components/VLeftMenu/LeftNav";
import Dashboard from "./components/VLeftMenu/Dashboard";
import DistDashboard from "./components/VLeftMenu/DistDashboard";
import Hospitals from "./components/VLeftMenu/Hospitals";
import MaSeva from "./components/VLeftMenu/MaSeva";
// import Speciality from "./components/VLeftMenu/Speciality/Speciality";
import PatientDetails from "./components/VLeftMenu/PatientDetails";
// import HorizontalBarChart from "./components/HorizontalBarChart";
import HorizontalMenuBar from "./components/HorizontalMenuBar";
import { Component } from "react";

const AppWrapper = styled.div`
  display: flex;
  height: 100vh;
`;

const MainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const App = () => {
  const [selectedItem, setSelectedItem] = useState("Dashboard");

  return (
    <>
      <HorizontalMenuBar />
      <AppWrapper>
        <LeftNav
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
        />
        <MainContent>
          {selectedItem === "Dashboard" && <Dashboard />}
          {selectedItem === "DistDashboard" && <DistDashboard />}
          {selectedItem === "Hospitals" && <Hospitals />}
          {selectedItem === "MaSeva" && <MaSeva />}
          {/* {selectedItem === "Speciality" && <Speciality />} */}
          {selectedItem === "Patient Details" && <PatientDetails />}
        </MainContent>
      </AppWrapper>
    </>
  );
};

export default App;
