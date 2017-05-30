import React from 'react';
import ReactDOM from 'react-dom';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryStack } from 'victory';

const data2012 = [
  {month: 3, earnings: 13000},
  {month: 3, earnings: 16500},
  {month: 4, earnings: 14250},
];

const SavingsChartContainer = () => {
    return (
      <div>
        <h3>Savings (past 3 months)</h3>
        <VictoryChart
          domainPadding={10}
          theme={VictoryTheme.material}
        >
        </VictoryChart>
      </div>
    )
}

export default SavingsChartContainer;
