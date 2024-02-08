import React from "react";
import styled from "styled-components";
import MapComponent from "./MapComponent";
import HospitalsDBoard from "./HospitalsDBoard";

const Container = styled.div`
  display: flex;
  width: 100%;
`;

const LeftBox = styled.div`
  flex: 0 0 60%;
  background-color: transparent;
  border: 1px solid blue;
  height: height: 20vh; /* Adjust the height as needed */
  text-align: center;
  padding: 30px;
  border-radius: 10px;
  margin: 20px;
  color:white;
`;

const RightBox = styled.div`
  flex: -1 0 40%;
  background-color: transparent;
  border: 1px solid blue;
  height: 90%; /* Adjust the height as needed */
  padding: 30px;
  border-radius: 10px;
  margin: 20px;
  margin-right: 10px;
  color: white;
`;

const TwoBoxesComponent = () => {
  return (
    <Container>
      <LeftBox>
        {/* <img
          src="C:\react\dashboard\dashboard1\dash\src\components\AndhraMap.jpeg"
          alt="Andhra Map"
        /> */}
        <MapComponent />
      </LeftBox>
      <RightBox>
        <HospitalsDBoard />
      </RightBox>
    </Container>
  );
};

export default TwoBoxesComponent;
