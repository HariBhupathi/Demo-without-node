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
import districtsData from "../assets/data/districtsData.json";

const ResponsiveContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
`;

const HorizontalBarChart = () => {
  return (
    <ResponsiveContainer>
      <BarChart
        width={1000}
        height={280}
        data={districtsData}
        layout="horizontal"
        margin={{ top: 0, right: 30, left: 30, bottom: 35 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="category" dataKey="district" />
        <YAxis type="number" unit="Rs" />
        <Tooltip />
        <Legend />
        <Bar dataKey="population" fill="#8884d8" name="Population" />
        <Bar dataKey="revenue" fill="#82ca9d" name="Expenditure" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default HorizontalBarChart;
