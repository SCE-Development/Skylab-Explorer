import { useState } from 'react';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

export default function CustomAreaChart({ title, data, dataKey }) {
  return (
    <div>
      <h1>{title}</h1>
      <ResponsiveContainer width={800} height={500}>
        <AreaChart data={data}>
          <CartesianGrid />
          <XAxis dataKey="date" />
          <YAxis />
          <Area type="monotone" dataKey={dataKey} />
          <Tooltip />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
