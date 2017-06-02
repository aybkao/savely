import React from 'react';
import ReactDOM from 'react-dom';
import { VictoryArea, VictoryBar, VictoryCandlestick, VictoryChart, VictoryAxis, VictoryTheme, VictoryStack } from 'victory';

const data2012 = [
  {month: 3, earnings: 13000},
  {month: 3, earnings: 16500},
  {month: 4, earnings: 14250},
];

const SavingsChartContainer = () => {
    return (
      <div className="col-md-6">
        <h3>Savings (past 3 months)</h3>
        <VictoryChart >
        <VictoryBar
          data={[
            {month: "September", savings: 1000},
            {month: "October", savings: -500},
            {month: "November", savings: -5000}
          ]}
          x="month"
          y={(datum) => datum.savings}
        />
        </VictoryChart>
      </div>
    )
}

export default SavingsChartContainer;
