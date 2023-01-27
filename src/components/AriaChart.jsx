import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    uv: 30,
    pv: 0,
    amt: 10,
  },
  {
    name: "Feb",
    uv: 30,
    pv: 31,
    amt: 10,
  },
  {
    name: "March",
    uv: 30,
    pv: 40,
    amt: 10,
  },
  {
    name: "April",
    uv: 30,
    pv: 28,
    amt: 10,
  },
  {
    name: "May",
    uv: 30,
    pv: 51,
    amt: 10,
  },
  {
    name: "June",
    uv: 30,
    pv: 42,
    amt: 10,
  },
  {
    name: "July",
    uv: 30,
    pv: 109,
    amt: 10,
  },
  { name: "Aug", uv: 100, pv: 150, amt: 10 },
];

export default function Chart() {
  return (
    <ResponsiveContainer width="99%" height="85%">
      <AreaChart
        data={data}
        margin={{
          top: 10,
          right: 15,
          left: -20,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="0 100" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        {/* <Area
          type="monotone"
          dataKey="uv"
          stackId="1"
          stroke="#8884d8"
          fill="#8884d8"
        /> */}
        <Area
          type="monotone"
          dataKey="pv"
          stackId="1"
          stroke="#82ca9d"
          fill="#82ca9d"
        />
        {/* <Area
          type="monotone"
          dataKey="amt"
          stackId="1"
          stroke="#ffc658"
          fill="#ffc658"
        /> */}
      </AreaChart>
    </ResponsiveContainer>
  );
}
