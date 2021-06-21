import { useState } from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";

export default function SampleLineChart() {
    const [data, setData] = useState([
        { a: 200, name: "First" },
        { a: 300, name: "Second" },
        { a: 500, name: "Third" },
        { a: 245, name: "Fourth" },
        { a: 390, name: "Fifth" }]);


    return(
        <div id = "chart1">
                <h1>Testing</h1>
                <LineChart width={400} height={400} data={data}>
                    <CartesianGrid stroke="#ccc"/>
                    <Line type="monotone" dataKey="a" stroke="#8884d8" />
                    <XAxis dataKey = "name" />
                    <YAxis />
                    <Tooltip />
                </LineChart>
        </div>
    );
}
