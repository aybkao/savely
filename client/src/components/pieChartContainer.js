import React from 'react';
import ReactDOM from 'react-dom';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryStack, VictoryPie} from 'victory';

const PieChartContainer = () => {
    return (
      <div className='col-md-6'>
        <h3>Total Spending by Category</h3>
        <VictoryPie data={[
          {category: "Restaurants", spending: 1331},
          {category: "Clothing", spending: 1358},
          {category: "Insurance", spending: 1222}
          ]}
          x="category"
          y={(datum) => datum.spending}
          colorScale="qualitative"
          />
      </div>
    )
}

export default PieChartContainer;
