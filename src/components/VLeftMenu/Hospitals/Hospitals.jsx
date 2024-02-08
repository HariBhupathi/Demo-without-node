import React, { useState, useEffect } from "react";
import styled from "styled-components";
import hospitalsData from "./path/to/hospitals_data.json";

const TableContainer = styled.div`
  width: 100%;
  overflow-x: auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

const Th = styled.th`
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
  background-color: #f2f2f2;
`;

const Td = styled.td`
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
`;

const PhoneIcon = styled.span`
  cursor: pointer;
  &:hover {
    color: blue;
  }
`;

const HospitalTable = () => {
  const [sortedData, setSortedData] = useState([]);
  const [sortBy, setSortBy] = useState(null);

  useEffect(() => {
    // Sort the data initially by SL#
    const initialSortedData = [...hospitalsData].sort(
      (a, b) => a["SL#"] - b["SL#"]
    );
    setSortedData(initialSortedData);
  }, []);

  const handleSort = (key) => {
    const newData = [...sortedData].sort((a, b) => {
      return a[key].localeCompare(b[key]);
    });

    setSortedData(newData);
    setSortBy(key);
  };

  const handlePhoneCall = (phoneNumber) => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <TableContainer>
      <Table>
        <thead>
          <tr>
            <Th onClick={() => handleSort("SL#")}>SL#</Th>
            <Th onClick={() => handleSort("District")}>District</Th>
            <Th onClick={() => handleSort("Block")}>Block</Th>
            <Th onClick={() => handleSort("Hospital Name")}>Hospital Name</Th>
            <Th onClick={() => handleSort("Address")}>Address</Th>
            <Th onClick={() => handleSort("PIN")}>PIN</Th>
            <Th onClick={() => handleSort("Contact no")}>Contact no</Th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((hospital, index) => (
            <tr key={index}>
              <Td>{hospital["SL#"]}</Td>
              <Td>{hospital["District"]}</Td>
              <Td>{hospital["Block"]}</Td>
              <Td>{hospital["Hospital Name"]}</Td>
              <Td>{hospital["Address"]}</Td>
              <Td>{hospital["PIN"]}</Td>
              <Td>
                <PhoneIcon
                  onClick={() => handlePhoneCall(hospital["Contact no"])}
                >
                  📞 {hospital["Contact no"]}
                </PhoneIcon>
              </Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  );
};

export default HospitalTable;
