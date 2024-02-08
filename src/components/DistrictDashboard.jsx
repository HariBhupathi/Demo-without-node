import React, { useState, useEffect } from "react";
import styled from "styled-components";
import districtData from "../assets/data/DistrictDashboard.json";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
  flex-direction: row;
  align-items: center;
  background-color: #0498db; /* Black background */
  padding: 0px;
  width: 90vw;
  height: 120%;
  background-color: #051b41;
`;

const BlockTitle = styled.span`
  font-weight: 900;
  font-size: 2.05rem;
  color: #0099cc;
  align-items: center;
`;
const Card = styled.div`
  width: 20vw;
  color: #0099cc;
  background-color: #03122d;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h3`
  margin-bottom: 10px;
`;

const DataItem = styled.p`
  margin: 50px 0;
`;

const DistrictDashboard = () => {
  const [districts, setDistricts] = useState([]);

  useEffect(() => {
    setDistricts(districtData.districts);
  }, []);

  return (
    <>
      <BlockTitle>Districts Dashboard</BlockTitle>
      <Container>
        {districts.map((district, index) => (
          <Card key={index}>
            <Title>{district.DistrictTitle}</Title>
            <DataItem>Treatments Done: {district.TreatmentsDone} Laks</DataItem>
            <DataItem>Reimbursement: Rs {district.Reimbursement} Cr</DataItem>
          </Card>
        ))}
      </Container>
    </>
  );
};

export default DistrictDashboard;
