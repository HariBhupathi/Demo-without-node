import React, { useState } from "react";
import styled from "styled-components";

const MenuItem = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 15px;
  ${(props) => props.selected && `background-color: #2cf52f;`}
  &:hover {
    background-color:  #2cf52f; //#0099cc;
  }
`;

const Container = styled.div`
  background-color: #0099cc; // #051b41;
  color: white;
  padding: 10px;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
  position: relative;
`;

const Divider = styled.div`
  width: 117%;
  height: 1px;
  background-color: white;
  position: relative;
  margin-top: 10px;
  color: black;
`;

const Icon = styled.img`
  width: 50px;
  height: 50px;
  margin-bottom: 5px;
`;

const Text = styled.p`
  margin: 0;
  text-align: center;
`;

const LeftNav = ({ selectedItem, setSelectedItem }) => {
  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const [activeTab, setActiveTab] = useState("Dashboard");

  return (
    <>
      <Container>
        <Box>
          <MenuItem
            isActive={activeTab === "Dashboard"}
            onClick={() => handleItemClick("Dashboard")}
            selected={selectedItem === "Dashboard"}
          >
            <Icon src="dashboard.png" alt="Dashboard" />
            <Text>Dashboard</Text>
          </MenuItem>
          <Divider />
        </Box>

        <Box>
          <MenuItem
            onClick={() => handleItemClick("DistDashboard")}
            selected={selectedItem === "DistDashboard"}
          >
            <Icon src="dashboard.png" alt="District Dashboard" />
            <Text>Dist Dashboard</Text>
            <Divider />
          </MenuItem>
        </Box>

        <Box>
          <MenuItem
            onClick={() => handleItemClick("Hospitals")}
            selected={selectedItem === "Hospitals"}
          >
            <Icon src="hospitals.png" alt="Hospitals" />
            <Text>Hospitals</Text>
            <Divider />
          </MenuItem>
        </Box>

        <Box>
          <MenuItem
            onClick={() => handleItemClick("MaSeva")}
            selected={selectedItem === "MaSeva"}
          >
            <Icon src="hospitals.png" alt="Hospitals" />
            <Text>MaSeva</Text>
            <Divider />
          </MenuItem>
        </Box>

        <Box>
          <MenuItem
            onClick={() => handleItemClick("Patient Details")}
            selected={selectedItem === "Speciality"}
          >
            <Icon src="speciality.png" alt="Speciality" />
            <Text>Speciality</Text>
            <Divider />
          </MenuItem>
        </Box>
      </Container>
    </>
  );
};

export default LeftNav;
