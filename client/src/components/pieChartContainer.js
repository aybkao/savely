import React from 'react';
import ReactDOM from 'react-dom';
import {VictoryChart, VictoryContainer, VictoryPie} from 'victory';

const PieChartContainer = (props) => {
    return (
      <div className='col-md-6' id='pie-chart-container'>
        <VictoryContainer height={325} width={525}>
        <VictoryPie data={props.data}
          style={{
            labels: {fontFamily: "'Verlag A', 'Verlag B'", fontSize: 18},
          }}
          x="category"
          y={(datum) => datum.spending}
          colorScale="qualitative"
          padding={{top: 50, bottom: 80, right: 80, left: 80}}
          duration={1000}
          />
        </VictoryContainer>
      </div>
    )
}

export default PieChartContainer;
