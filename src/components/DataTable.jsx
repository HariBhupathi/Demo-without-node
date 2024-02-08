import React from "react";
import styled from "styled-components";

const TableContainer = styled.div`
  margin: 20px;
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
`;

const Td = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
`;

const DataTable = ({ data, filterType }) => {
  const columns = ["District", "Government", "Private", "Total"];

  const filteredData =
    filterType === "All"
      ? data
      : data.map((row) => ({
          District: row.District,
          [filterType]: row[filterType],
          Total: row.Total,
        }));

  return (
    <TableContainer>
      <h2>{filterType === "All" ? "All" : `${filterType} Only`} Details</h2>
      <Table>
        <thead>
          <tr>
            {columns.map((col) => (
              <Th key={col}>{col}</Th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredData.map((row, index) => (
            <tr key={index}>
              {columns.map((col) => (
                <Td key={col}>{row[col]}</Td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;
