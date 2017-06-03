import React from 'react';
import ReactDOM from 'react-dom';
import { VictoryArea, VictoryBar, VictoryCandlestick, VictoryChart, VictoryAxis, VictoryTheme, VictoryStack } from 'victory';

const SavingsChartContainer = (props) => {
    return (
      <div className="col-md-6">
        <h3>Savings (past 3 months)</h3>
        <VictoryChart >
        <VictoryBar
          data={[
            {month: "September", income: 10000, expenses: 5000},
            {month: "October", income: 10000, expenses: 5000},
            {month: "November", income: 10000, expenses: 5000}
          ]}
          x="month"
          y={(datum) => datum.income - datum.expenses}
        />
        </VictoryChart>
      </div>
    )
}

export default SavingsChartContainer;
