import React from 'react';
import ReactDOM from 'react-dom';
import { VictoryArea, VictoryBar, VictoryContainer } from 'victory';

class SpendingCategoriesChartContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  getBars(chartData) {
    var budgetBars = [];
    for (var i = 0; i < chartData.length; i++) {
      budgetBars.push(
        <tr key={i}>
          <td>{chartData[i].category}</td>
          <td><VictoryContainer height={50} width={325}><VictoryBar horizontal={true}
          data={[chartData[i]]}
          x="category"
          y={(datum) => (datum.spent / datum.limit) * 1}
          width={325}
          labels={(datum) => '$'+(datum.spent).toFixed(2)}
          style={{
              data: {fill: (d) => d.spent / d.limit > 1 ? "red" : "green", width: 14},
              labels: {fontSize: 18, fontFamily: "'Gotham Narrow A', 'Gotham Narrow B'"},
              parent: {border: "1px solid #ccc"}
            }}
          animate={{duration:2000, onLoad: {duration: 2000}}}
          padding={{left: 10, right: 85, top: 28, bottom: 20}}
          /></VictoryContainer>
          </td>
          <td>${chartData[i].limit}</td>
        </tr>
      );
    }
    return budgetBars;
  }
  render(){
    return (
      <div className="col-md-6" id="spending_categories_chart_container">
        <h2>Budget Status (by category, past 1 month)</h2>
        <table id="budget_status_chart">
          <thead>
            <tr>
              <th><h3>Category</h3></th>
              <th><h3>Status</h3></th>
              <th><h3>Budget</h3></th>
            </tr>
          </thead>
          <tbody>
            {this.getBars(this.props.data)}
          </tbody>
        </table>
      </div>
    )
  }
}

export default SpendingCategoriesChartContainer;
