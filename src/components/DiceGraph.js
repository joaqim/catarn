import React, { PureComponent } from "react";
import ResponsiveContainer from "@bit/recharts.recharts.responsive-container";
import ComposedChart from "@bit/recharts.recharts.composed-chart";
import Line from "@bit/recharts.recharts.line";
import Area from "@bit/recharts.recharts.area";
import Bar from "@bit/recharts.recharts.bar";
import XAxis from "@bit/recharts.recharts.x-axis";
import YAxis from "@bit/recharts.recharts.y-axis";
import CartesianGrid from "@bit/recharts.recharts.cartesian-grid";
import Tooltip from "@bit/recharts.recharts.tooltip";
import Legend from "@bit/recharts.recharts.legend";

const diceCol = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export default class DiceGraph extends PureComponent {
  render() {
    return (
      <div style={{ width: 500, height: 300 }}>
        <ResponsiveContainer>
          <ComposedChart
            width={800}
            height={400}
            data={this.props.count}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            <YAxis dataKey="count" type="number" allowDecimals={false} />
            <XAxis dataKey="value" domain={[2, 12]} />
            <Tooltip />
            {/*<Legend />*/}
            <Bar
              dataKey={"count"}
              tickFormatter={(tick) => tick}
              barSize={20}
              fill="#413ea0"
            />
            {/* <Line type="monotone" dataKey="uv" stroke="#ff7300" />*/}
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
