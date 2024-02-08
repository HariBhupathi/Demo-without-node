import React from "react";
import styled from "styled-components";
import districtData from "../assets/data/hospitalData.json";

const TableContainer = styled.div`
  margin: 20px;
  font-family: Arial, sans-serif;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
`;

const Th = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
  background-color: #0099cc;
  color: blue;
`;

const Td = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`;

const DistrictDataTable = () => {
  return (
    <TableContainer>
      <Table>
        <thead>
          <tr>
            <Th>District</Th>
            <Th>All</Th>
            <Th>Government</Th>
            <Th>Private</Th>
          </tr>
        </thead>
        <tbody>
          {districtData.map((district, index) => (
            <tr key={index}>
              <Td>{district.District}</Td>
              <Td>{district.Government + district.Private} </Td>
              <Td>{district.Government}</Td>
              <Td>{district.Private}</Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  );
};

export default DistrictDataTable;
