import React from 'react';
import ReactDOM from 'react-dom';
import { VictoryArea, VictoryBar, VictoryCandlestick, VictoryChart, VictoryAxis, VictoryTheme, VictoryStack } from 'victory';

const SpendingCategoriesChartContainer = () => {
    return (
      <div>
        <h3>Budget Status (by Category)</h3>
        <VictoryChart >
        <VictoryBar
          data={[
            {category: "Rent", spending: 2000},
            {category: "Groceries", spending: 1388},
            {category: "Restaurants", spending: 1300},
            {category: "Insurance", spending: 1200}
          ]}
          x="category"
          y={(datum) => datum.spending}
          horizontal={true}
          colorScale="qualitative"
        />
        </VictoryChart>
      </div>
    )
}

export default SpendingCategoriesChartContainer;
