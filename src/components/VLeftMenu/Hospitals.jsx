import React, { useState, useEffect } from "react";
import styled from "styled-components";
import hospitalsData from "../VLeftMenu/Hospitals/HospitalsData.json";

const TableContainer = styled.div`
  width: 99%;
  overflow-x: auto;
  padding: 20px;
  background-color: #03122d;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  color: whitesmoke;
  background-color: #051b41;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Th = styled.th`
  border: 1px solid #dddddd;
  text-align: left;
  padding: 10px;
  background-color: #03122d;
  cursor: pointer;

  &:hover {
    color: Blue;
    background-color: #e0e0e0;
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

const Td = styled.td`
  border: 1px solid #dddddd;
  text-align: left;
  padding: 10px;

  &:first-child {
    font-weight: bold;
  }
`;

const PhoneIcon = styled.span`
  cursor: pointer;
  &:hover {
    color: green;
  }
`;

const HospitalTable = () => {
  const [sortedData, setSortedData] = useState([]);
  const [sortBy, setSortBy] = useState(null);

  useEffect(() => {
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
    <>
      <TableContainer>
        <H2>Demography wise Hospital Details</H2>
        <Table>
          <thead>
            <tr>
              <Th onClick={() => handleSort("SL#")}>S.No</Th>
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
    </>
  );
};

export default HospitalTable;
