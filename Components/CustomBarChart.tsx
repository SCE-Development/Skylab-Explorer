import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, LabelList } from 'recharts';

/* custom line chart and you can pass different customization to it
   something is that we need to pass width and height number to line chart
   and if we want to linechart to have 100% screen size on all devices, what number it needs to pass
   docs: https://recharts.org/en-US/api/LineChart
*/

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${label} : ${payload[0].value}`}</p>
      </div>
    );
  }

  return null;
};

export default function CustomBarChart({
  title,
  total = '',
  data,
  xLabel = '',
  isYAxis = true,
  dataKey,
  width = 1000,
  height = 300,
}) {
  return (
    <div>
      <h1>{title}</h1>
      <h2>{total}</h2>
      <BarChart data={data} width={width} height={height}>
        <CartesianGrid stroke="#ccc" />
        <Bar type="monotone" dataKey={dataKey} stroke="#8884d8" />
        <XAxis dataKey={xLabel} />
        {
          // if you want to display YAxis or not
          isYAxis && <YAxis />
        }
        <Tooltip content={<CustomTooltip />} />
      </BarChart>
    </div>
  );
}
