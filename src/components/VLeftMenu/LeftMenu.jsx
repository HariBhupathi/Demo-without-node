import React, { useState } from "react";
import styled from "styled-components";

import Dashboard from "../VLeftMenu/Dashboard";
import DistDashboard from "../VLeftMenu/DistDashboard";
import Hospitals from "../VLeftMenu/Hospitals/Hospitals";
import MaSeva from "../VLeftMenu/MaSeva";
import Speciality from "../VLeftMenu/Speciality";
import PatientDetails from "../VLeftMenu/PatientDetails";

const MainContent = styled.div`
  padding: 20px;
`;
const Container = styled.div`
  background-color: #051b41;
  color: white;
  padding: 10px;
`;

const Box = styled.div`
  flex-direction: column; /* Display items in a column */
  align-items: center;
  margin-bottom: 10px;
  position: relative;
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: white;
  position: relative;
  margin-top: 10px;
`;

const Icon = styled.img`
  width: 50px;
  height: 50px;
  margin-bottom: 5px;
`;

const Text = styled.p`
  margin: 0;
  text-align: left;
`;

const LeftMenu = () => {
  const [selectedItem, setSelectedItem] = useState("");

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const renderComponent = () => {
    switch (selectedItem) {
      case "Dashboard":
        return <Dashboard />;
      case "District Dashboard":
        return <DistDashboard />;
      case "Hospitals":
        return <Hospitals />;
      case "Ma-Seva":
        return <MaSeva />;
      case "Speciality":
        return <Speciality />;
      case "Patient Details":
        return <PatientDetails />;
      default:
        return null;
    }
  };

  return (
    <Container>
      <Box onClick={() => handleItemClick("Dashboard")}>
        <Icon src="dashboard.png" alt="Dashboard" />
        <Text>Dashboard</Text>
        <Divider />
      </Box>
      <Box onClick={() => handleItemClick("District Dashboard")}>
        <Icon src="dashboard.png" alt="District Dashboard" />
        <Text>District Dashboard</Text>
        <Divider />
      </Box>
      <Box onClick={() => handleItemClick("Hospitals")}>
        <Icon src="hospitals.png" alt="Hospitals" />
        <Text>Hospitals</Text>
        <Divider />
      </Box>
      <Box onClick={() => handleItemClick("Ma-Seva")}>
        <Icon src="govtService.png" alt="Ma-Seva" />
        <Text>Ma-Seva</Text>
        <Divider />
      </Box>
      <Box onClick={() => handleItemClick("Speciality")}>
        <Icon src="speciality.png" alt="Speciality" />
        <Text>Speciality</Text>
        <Divider />
      </Box>
      <Box onClick={() => handleItemClick("Patient Details")}>
        <Icon src="patientDetails.png" alt="Patient Details" />
        <Text>Patient Details</Text>
        <Divider />
      </Box>

      <MainContent>{renderComponent()}</MainContent>
    </Container>
  );
};

export default LeftMenu;
