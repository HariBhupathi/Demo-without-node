import React from "react";
import { PieChart, Pie, Cell, Legend, Tooltip, Label } from "recharts";
import data from "../assets/data/AgeWisePie.json";
const AgePieChart = () => {
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#AF19FF"];

  const chartTitle = "Age wise Card Holders Distribution";

  return (
    <>
      <h3>{chartTitle}</h3>
      <PieChart width={400} height={220}>
        <Label value={chartTitle} position="top" />
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="40%"
          outerRadius={55}
          fill="#8884d8"
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </>
  );
};

export default AgePieChart;
