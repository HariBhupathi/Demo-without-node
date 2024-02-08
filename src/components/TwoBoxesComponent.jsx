import React from "react";
import styled from "styled-components";
import PieChart from "./PieChart";
import HorizontalBarChart from "./HorizontalBarChart";
import data from "../assets/data/AgeWisePie.json";

const Container = styled.div`
  display: flex;
  width: 100%;
`;

const LeftBox = styled.div`
  flex: 0 0 20%;
  background-color: transparent;
  border: 1px solid blue;
  height: 35vh; /* Adjust the height as needed */
  text-align: center;
  padding: 30px;
  border-radius: 10px;
  margin: 20px;
  color: white;
`;

const RightBox = styled.div`
  flex: 0 0 65%;
  background-color: transparent;
  border: 1px solid blue;
  height: 43vh; /* Adjust the height as needed */
  padding: 0px;
  border-radius: 10px;
  margin: 20px;
  margin-right: 30px;
  color: white;
  width: 1000px;
`;

const TwoBoxesComponent = () => {
  return (
    <Container>
      <LeftBox>
        <PieChart data={data} />
      </LeftBox>
      <RightBox>
        <h3 style={{ textAlign: "center" }}>
          District wise Total Beneficiary v/s Total Card Holders
        </h3>
        <HorizontalBarChart />
      </RightBox>
    </Container>
  );
};

export default TwoBoxesComponent;
