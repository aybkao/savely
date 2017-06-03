import React from 'react';
import ReactDOM from 'react-dom';
import { VictoryArea, VictoryBar, VictoryCandlestick, VictoryChart, VictoryAxis, VictoryTheme, VictoryStack } from 'victory';

const SpendingCategoriesChartContainer = (props) => {
    return (
      <div className="col-md-6">
        <h2>Budget Status (by Category)</h2>
        <VictoryChart>
        <VictoryBar
          data={props.data}
          x="category"
          y={(datum) => (datum.spent / datum.limit) <= 1 ? (datum.spent / datum.limit)*100 : 100}
          horizontal={true}
          colorScale="qualitative"
          labels={(datum) => '$'+(datum.spent).toFixed(2)+' / '+(datum.limit).toFixed(2)}
          padding={{top: 200}}
          style={{
                  data: {fill: (d) => d.spent / d.limit > 1 ? "red" : "green"},
                  labels: {fontSize: 14, fontFamily: "'Verlag A', 'Verlag B'"},
                  parent: {border: "1px solid #ccc"}
                }}
        />
        </VictoryChart>
      </div>
    )
}

export default SpendingCategoriesChartContainer;
