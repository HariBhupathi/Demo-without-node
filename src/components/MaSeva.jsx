import React from "react";
import styled from "styled-components";
import jsonData from "./MaSevaData.json";

const Container = styled.div`
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 8px;
  margin: 20px;
`;

const DataItem = styled.div`
  margin-bottom: 10px;
`;

const DataKey = styled.span`
  font-weight: bold;
  margin-right: 5px;
`;

const DataValue = styled.span`
  color: #333;
`;

const MaSeva = () => {
  return (
    <Container>
      {jsonData.map((data, index) => (
        <DataItem key={index}>
          <DataKey>SNo:</DataKey>
          <DataValue>{data.SNo}</DataValue>

          <DataKey>District:</DataKey>
          <DataValue>{data.District}</DataValue>

          <DataKey>Block:</DataKey>
          <DataValue>{data.Block}</DataValue>

          <DataKey>Owner:</DataKey>
          <DataValue>{data.Owner}</DataValue>

          <DataKey>Address:</DataKey>
          <DataValue>{data.Address}</DataValue>

          <DataKey>Contact No:</DataKey>
          <DataValue>{data["Contact No"]}</DataValue>
        </DataItem>
      ))}
    </Container>
  );
};

export default MaSeva;
