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

export default function CustomPieChart({ title, total = '', data, xLabel = '', isYAxis = true, dataKey }) {
  return (
    <ScatterChart width={730} height={250} margin={{ top: 20, right: 20, bottom: 10, left: 10 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="x" name="stature" unit="cm" />
      <YAxis dataKey="y" name="weight" unit="kg" />
      <ZAxis dataKey="z" range={[64, 144]} name="score" unit="km" />
      <Tooltip cursor={{ strokeDasharray: '3 3' }} />
      <Legend />
      <Scatter name="A school" data={data} fill="#8884d8" />
    </ScatterChart>
  );
}
