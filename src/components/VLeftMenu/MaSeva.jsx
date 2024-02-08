import React from "react";
import styled from "styled-components";
import jsonData from "./MaSevaData.json";

const Container = styled.div`
  color: red;
  background-color: #03122d;
`;
const TableContainer = styled.table`
  width: 100%;
  overflow-x: auto;
  padding: 20px;
  background-color: #03122d;
  color: whitesmoke;
  border-collapse: collapse;
  margin: 20px;
`;

const TableRow = styled.tr`
  border-bottom: 1px solid #ddd;
`;

const TableCell = styled.td`
  border: 1px solid #dddddd;
  text-align: left;
  padding: 10px;

  &:first-child {
    font-weight: bold;
  }
`;
const H2 = styled.h2`
  border: 1px solid #dddddd;
  text-align: left;
  padding: 10px;
  color: whitesmoke;
  background-color: #03122d;
  cursor: pointer;
  text-align: center;

  &:hover {
    color: Blue;
    background-color: #e0e0e0;
  }
`;

const MaSeva = () => {
  return (
    <>
      <Container>
        <H2>Ma Seva Kendras.</H2>
        <TableContainer>
          <thead>
            <TableRow>
              <TableCell>SNo</TableCell>
              <TableCell>District</TableCell>
              <TableCell>Block</TableCell>
              <TableCell>Owner</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Contact No</TableCell>
            </TableRow>
          </thead>
          <tbody>
            {jsonData.map((data, index) => (
              <TableRow key={index}>
                <TableCell>{data.SNo}</TableCell>
                <TableCell>{data.District}</TableCell>
                <TableCell>{data.Block}</TableCell>
                <TableCell>{data.Owner}</TableCell>
                <TableCell>{data.Address}</TableCell>
                <TableCell>{data["Contact No"]}</TableCell>
              </TableRow>
            ))}
          </tbody>
        </TableContainer>
      </Container>
    </>
  );
};

export default MaSeva;
