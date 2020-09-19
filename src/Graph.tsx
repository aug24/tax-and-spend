import React from 'react';
import type { State } from './State';
import { connect } from 'react-redux';
import { LineChart, Line, XAxis, YAxis } from 'recharts';

type GraphProps = {
  makeData: () => datapoint[]
  hangover: number;
  deficits: number[];
}

export type datapoint = {
   d: number,
   x: number
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
 I              <YAxis />
                <Line 
                  animationDuration={1}
                  type="monotone" 
                  dataKey="l" 
                  stroke="#ff0000" 
                  yAxisId={0} />
                <Line 
                  animationDuration={1}
                  type="monotone" 
                  dataKey="c" 
                  stroke="#0000ff" 
                  yAxisId={0} />
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

