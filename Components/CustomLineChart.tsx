import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';

/* custom line chart and you can pass different customization to it
   something is that we need to pass width and height number to line chart
   and if we want to linechart to have 100% screen size on all devices, what number it needs to pass
   docs: https://recharts.org/en-US/api/LineChart
*/
export default function CustomLineChart({
  title,
  total = '',
  data,
  xLabel = '',
  isYAxis = true,
  dataKey,
  dataKey2,
  width = 750,
  height = 300,
}) {
  return (
    <div>
      <h1>{title}</h1>
      <h2>{total}</h2>
      <LineChart data={data} width={width} height={height}>
        <CartesianGrid stroke="#CCC" />
        <Line type="monotone" dataKey={dataKey2} stroke="#B0E0E6" />
        <Line type="monotone" dataKey={dataKey} stroke="#8884d8" />
        <XAxis dataKey={xLabel} />
        {
          // if you want to display YAxis or not
          isYAxis && <YAxis />
        }

        <Tooltip />
        <Legend verticalAlign="top" height={36} />
      </LineChart>
    </div>
  );
}
