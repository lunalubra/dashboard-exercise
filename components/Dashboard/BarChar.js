import { Flex, Text } from '@chakra-ui/layout';
import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const data = [
  {
    name: 'enero',
    uv: 10000,
    pv: 2000,
    amt: 10000
  },
  {
    name: 'febrero',
    uv: 10000,
    pv: 4000,
    amt: 10000
  },
  {
    name: 'marzo',
    uv: 10000,
    pv: 6000,
    amt: 10000
  },
  {
    name: 'abril',
    uv: 10000,
    pv: 9000,
    amt: 10000
  },
  {
    name: 'mayo',
    uv: 10000,
    pv: 7000,
    amt: 10000
  },
  {
    name: 'junio',
    uv: 10000,
    pv: 5000,
    amt: 10000
  },
  {
    name: 'julio',
    uv: 10000,
    pv: 3000,
    amt: 10000
  },
  {
    name: 'agosto',
    uv: 10000,
    pv: 7000,
    amt: 10000
  },
  {
    name: 'septiembre',
    uv: 10000,
    pv: 10000,
    amt: 10000
  },
  {
    name: 'octubre',
    uv: 10000,
    pv: 7000,
    amt: 10000
  },
  {
    name: 'noviembre',
    uv: 10000,
    pv: 5000,
    amt: 10000
  }
];

export default function App() {
  return (
    <ResponsiveContainer width="100%" height="100%" aspect={4}>
      <BarChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}
        barSize={20}
      >
        <XAxis
          tickLine={false}
          tickFormatter={(month) => {
            return month.toUpperCase().substring(0, 3);
          }}
          dataKey="name"
          scale="point"
          tickMargin={10}
        />
        <YAxis
          tickFormatter={(amount) =>
            Math.abs(amount) > 999
              ? Math.sign(amount) * (Math.abs(amount) / 1000).toFixed(1) + 'k'
              : Math.sign(amount) * Math.abs(amount)
          }
          tickMargin={30}
        />
        <Tooltip />
        <CartesianGrid strokeDasharray="3 3" />
        <Bar
          barSize={40}
          dataKey="pv"
          fill="#2C2CE7"
          background={{ fill: '#E5E5F1' }}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
