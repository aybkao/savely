import React from 'react';
import ReactDOM from 'react-dom';
import { VictoryChart, VictoryContainer, VictoryPie} from 'victory';

const PieChartContainer = (props) => {
    return (
      <div className='col-md-6' id='pie-chart-container'>
        <h2>Share of Spending by Category</h2>
        <VictoryPie data={props.data}
          style={{
            labels: {fontFamily: "'Verlag A', 'Verlag B'"},
          }}
          x="category"
          y={(datum) => datum.spending}
          colorScale="qualitative"
          padding={{top: 20, bottom: 20, right: 60, left: 60}}
          animate={{duration:2000, onLoad: {duration: 2000}}}
          />
      </div>
    )
}

export default PieChartContainer;
