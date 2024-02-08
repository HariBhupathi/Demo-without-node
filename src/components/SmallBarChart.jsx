import React from "react";
import styled from "styled-components";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

import districtsData from "../assets/data/SpecialityBarChart.json";

const ResponsiveContainer = styled.div`
  width: 100%;
  max-width: 80px;
  margin: 10 auto;
`;
const CustomTooltip = styled.div`
  background-color: rgba(255, 255, 255, 0);
  border: 1px solid #ccc;
  padding: 1px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
  color: white;
  max-width: 300px;
`;

const SmallBarChart = () => {
  return (
    <ResponsiveContainer>
      <BarChart
        width={280}
        height={150}
        data={districtsData}
        layout="horizontal"
        margin={{ top: 10, right: 55, left: 0, bottom: 20 }}
      >
        <CartesianGrid strokeDasharray="0 1" />
        <XAxis type="category" dataKey="district" />
        <YAxis type="number" unit="Laks" />
        <Tooltip
          content={({ active, payload, label }) => {
            if (active) {
              return (
                <CustomTooltip>
                  <p>{`District: ${label}`}</p>
                  <p>{`Expenditure: ${payload[0].value} Laks`}</p>
                  <p>{`Treatments: ${payload[1].value} Laks`}</p>
                </CustomTooltip>
              );
            }
            return null;
          }}
        />
        <Legend />
        <Bar dataKey="Expenditure" fill="#888400" name="Expenditure" />
        <Bar dataKey="Treatments" fill="#00ca9d" name="Treated" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default SmallBarChart;
