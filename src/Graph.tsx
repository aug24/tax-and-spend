import React from 'react';
import type { State } from './State';
import { connect } from 'react-redux';
import { Tooltip, LineChart, Line, XAxis, YAxis } from 'recharts';

type GraphProps = {
  makeData: () => datapoint[]
  hangover: number;
  deficits: number[];
}

export type datapoint = {
   d: Date,
   c: number | null,
   l: number | null,
   ct: number | null,
   lt: number | null
}

export class Graph  extends React.Component<GraphProps> {

    makeData: () => datapoint[]

    constructor(props: GraphProps) {
      super(props)
      this.makeData = props.makeData
    }

    render = () => {
        return (
            <div
                style = {{
                    background: "#999999",
                    width: 800,
                    height: 400
                }}
            >
              <LineChart
                width={750}
                height={300}
                data={ this.makeData() }
                margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
              >
                <XAxis 
                  dataKey="d" 
                />
                <YAxis yAxisId="left"/>
                <YAxis orientation='right' yAxisId="right"/>
 I              <Tooltip />
                <Line 
                  yAxisId="left"
                  animationDuration={1}
                  type="monotone" 
                  dataKey="l" 
                  stroke="#ff0000" 
                />
                <Line 
                  yAxisId="left"
                  animationDuration={1}
                  type="monotone" 
                  dataKey="c" 
                  stroke="#0000ff" 
                />
/*
                <Line 
                  yAxisId="right"
                  animationDuration={1}
                  type="monotone" 
                  dataKey="lt" 
                  stroke="#ff8888" 
                />
                <Line 
                  yAxisId="right"
                  animationDuration={1}
                  type="monotone" 
                  dataKey="ct" 
                  stroke="#8888ff" 
                />
*/
              </LineChart>
            </div>
        );
    }
};

const mapStateToProps = (state: State) => {return {
  hangover: state.hangover,
  deficits: [],
}}

export default connect(mapStateToProps)(Graph)

