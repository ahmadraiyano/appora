import React from 'react';

import { Bar, BarChart, XAxis, YAxis } from "recharts";

const Chart = ({ratings}) => {
    return (
        <div>
          <BarChart
            layout="vertical"
            style={{
              width: "100%",
              maxHeight: "50vh",
              aspectRatio: 1.618,
            }}
            responsive
            data={[...ratings].reverse()}
            margin={{ bottom: 20 }}
          >
            <XAxis
              type="number"
              height={50}
            />
            <YAxis
              type="category"
              dataKey="name"
              width="auto"
            />
            <Bar dataKey="count" fill={`#FF8811`} maxBarSize={40} />
          </BarChart>
        </div>
    );
};

export default Chart;