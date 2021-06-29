import { useState } from "react";
import { Pie, PieChart, ResponsiveContainer } from "recharts";

export default function SamplePieChart() {
    const [data, setData] = useState([
        { name: 'A', value: 400 },
        { name: 'B', value: 300 },
        { name: 'C', value: 200 },
        { name: 'C', value: 500 },
    ]);

    return (
        <ResponsiveContainer width = {400} height = {400}>
            <PieChart>
                <Pie data = {data} dataKey = "value" />
            </PieChart>
        </ResponsiveContainer>
    );
}
