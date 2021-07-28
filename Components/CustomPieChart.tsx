import { useState } from 'react';
import { Pie, PieChart, ResponsiveContainer } from 'recharts';

export default function CustomPieChart({ title, total = '', data, xLabel = '', isYAxis = true, dataKey }) {
  return (
    <div>
      <h1>{title}</h1>
      <h2>{total}</h2>
      <ResponsiveContainer width={500} height={500}>
        <PieChart>
          <Pie fill="green" data={data} dataKey={dataKey} label />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
