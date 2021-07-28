import { useState } from 'react';
import {
  XAxis,
  YAxis,
  ZAxis,
  ReferenceArea,
  ReferenceDot,
  ReferenceLine,
  Brush,
  CartesianGrid,
  Legend,
  Tooltip,
  Scatter,
  ScatterChart,
  ResponsiveContainer,
} from 'recharts';

export default function CustomPieChart({ title, data, dataKey }) {
  return (
    <div>
      <h1>{title}</h1>
      <ScatterChart width={730} height={250} margin={{ top: 20, right: 20, bottom: 10, left: 10 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="x" name="Date" />
        <YAxis dataKey="y" name="Visits" />
        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
        <Legend />
        <Scatter dataKey={dataKey} name="Visits Per Day" data={data} fill="#8884d8" />
      </ScatterChart>
    </div>
  );
}
