import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: #051b41;
  color: white;
  padding: 10px;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column; /* Display items in a column */
  align-items: center;
  margin-bottom: 10px;
  position: relative;
`;

const Divider = styled.div`
  width: 117%; /* Adjust the width of the divider as needed */
  height: 1px;
  background-color: white;
  position: relative;
  margin-top: 10px;
`;

const Icon = styled.img`
  width: 50px;
  height: 50px;
  margin-bottom: 5px; /* Add margin between image and text */
`;

const Text = styled.p`
  margin: 0;
  text-align: center;
`;

const VerticalMenuBar = () => {
  return (
    <Container>
      <Box>
        <Icon src="dashboard.png" alt="Dashboard" />
        <Text>Dashboard</Text>
        <Divider />
      </Box>
      <Box>
        <Icon src="dashboard.png" alt="District Dashboard" />
        <Text>District Dashboard</Text>
        <Divider />
      </Box>
      <Box>
        <Icon src="hospitals.png" alt="Hospitals" />
        <Text>Hospitals</Text>
        <Divider />
      </Box>
      <Box>
        <Icon src="govtService.png" alt="Ma-Seva" />
        <Text>Ma-Seva</Text>
        <Divider />
      </Box>
      <Box>
        <Icon src="speciality.png" alt="Speciality" />
        <Text>Speciality</Text>
        <Divider />
      </Box>
      <Box>
        <Icon src="patientDetails.png" alt="Patient Details" />
        <Text>Patient Details</Text>
        <Divider />
      </Box>
    </Container>
  );
};

export default VerticalMenuBar;
