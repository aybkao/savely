import React from 'react';
import ReactDOM from 'react-dom';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryStack, VictoryPie} from 'victory';

const PieChartContainer = () => {
    return (
      <div>
        <h3>Total Spending by Category</h3>
        <VictoryPie data={[
          {category: "Restaurants", spending: 1331},
          {category: "Clothing", spending: 1358},
          {category: "Insurance", spending: 1222}
          ]}
          x="category"
          y={(datum) => datum.spending}
          colorScale="qualitative"
          padding={{top: 20, bottom: 60, right: 60, left: 60}}
          />
      </div>
    )
}

export default PieChartContainer;
