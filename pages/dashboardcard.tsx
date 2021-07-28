import CustomLineChart from '../Components/CustomLineChart';
import { useState } from 'react';

export function DashboardCard(props) {
  const { title, total } = props;
  const [visits, setVisits] = useState([
    { date: '11/28', quantity: 10 },
    { date: '11/29', quantity: 9 },
    { date: '11/30', quantity: 6 },
    { date: '12/1', quantity: 4 },
    { date: '12/2', quantity: 15 },
  ]);
  return (
    <>
      <CustomLineChart
        title={title}
        total={total}
        data={visits}
        dataKey="quantity"
        isYAxis={false}
        width={200}
        height={100}
      />
    </>
  );
}
