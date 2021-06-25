import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";

export default function CustomLineChart({ title, data, xLabel = "", isYAxis = true,
                                        dataKey, width = 1000, height = 300 }) {
    return(
        <div id = "chart1">
                <h1>{title}</h1>
                <LineChart data={data} width = {width} height = {height}>
                    <CartesianGrid stroke="#ccc"/>
                    <Line type = "monotone" dataKey= {dataKey} stroke="#8884d8" />
                    <XAxis dataKey = {xLabel} />
                    {
                        isYAxis && <YAxis />
                    }
                    <Tooltip />
                </LineChart>
        </div>
    );
}
