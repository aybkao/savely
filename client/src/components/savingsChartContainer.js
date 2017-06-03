import React from 'react';
import ReactDOM from 'react-dom';
import { VictoryBar, VictoryChart, VictoryTheme} from 'victory';

const SavingsChartContainer = (props) => {
    return (
      <div className="col-md-6">
        <h2>Savings (past 3 months)</h2>
        <VictoryChart domainPadding={{ x: 40 }} padding={60}>
        <VictoryBar
          data={props.data}
          x="month"
          y={(datum) => datum.income - datum.expenses}
          labels={(datum) => '$'+(datum.income - datum.expenses).toFixed(2)}
          style={{
            data: {fill: "green", width: 24},
            labels: {fontSize: 14, fontFamily: "'Verlag A', 'Verlag B'"},
          }}
          animate={{duration:2000, onLoad: {duration: 2000}}}
        />
        </VictoryChart>
      </div>
    )
}

export default SavingsChartContainer;
