import React, { useState, useEffect } from "react";
import styled from "styled-components";
import districtData from "../../assets/data/DistrictDashboard.json";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #0498db;
  padding: 10px;
  width: 95vw;
  height: 130%;
  margin-top: -5px;
  background-color: #051b41;
`;

const BlockTitle = styled.span`
  font-weight: 900;
  margin-bottom: 5px;
  font-size: 2.05rem;
  color: #0099cc;
  background-color: #051b41;
  text-align: center; /* Center the text horizontally */
  display: block;
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
  align-items: center !important;
`;

const Title = styled.h3`
  margin-bottom: 10px;
  align-items: center;
`;

const DataItem = styled.p`
  margin: 5px 0;
`;

const BoxesContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  width: 100vw;
  height: 100%;
  background-color: #03122d;
  margin: 30px;
`;

const DistDashboard = () => {
  const [districts, setDistricts] = useState([]);

  useEffect(() => {
    setDistricts(districtData.districts);
  }, []);

  return (
    <>
      <BlockTitle>Districts of Andhra Pradesh</BlockTitle>
      <Container>
        <BoxesContainer>
          {districts.map((district, index) => (
            <Card key={index}>
              <Title>{district.DistrictTitle}</Title>
              <DataItem>
                Treatments Done: {district.TreatmentsDone} Laks
              </DataItem>
              <DataItem>Reimbursement: Rs {district.Reimbursement} Cr</DataItem>
            </Card>
          ))}
        </BoxesContainer>
      </Container>
    </>
  );
};

export default DistDashboard;
