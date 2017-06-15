import React from 'react';
import ReactDOM from 'react-dom';
import {Table} from 'semantic-ui-react';

class CashFlowChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      noMonths: 1
    };
  }
  filterTransactions(transactions) {
    var relevantTransactions = [];
    var totalExpenses = 0;
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1;
    var yyyy = today.getFullYear();

    for (var i = 0; i < transactions.length; i++) {
      var currTransDate = new Date(transactions[i].date);
      var timeDiff = Math.abs(today.getTime() - currTransDate.getTime());
      var daysSince = Math.ceil(timeDiff / (1000 * 3600 * 24));
      totalExpenses += daysSince <= (this.state.noMonths * 30) ? transactions[i].amount : 0;
    }
    return totalExpenses;
  }
  render() {
    return (
      <div className="col-md-6" id='cash_flow_table_container'>
      <Table celled id='cash_flow_table'>
         <Table.Header>
           <Table.Row>
             <Table.HeaderCell>Cash Flow</Table.HeaderCell>
             <Table.HeaderCell>${((this.props.income / (12 / this.state.noMonths)) - this.filterTransactions(this.props.transactions)).toFixed(2)}</Table.HeaderCell>
           </Table.Row>
         </Table.Header>
         <Table.Body>
         <Table.Row>
           <Table.Cell>Income</Table.Cell>
           <Table.Cell>${(this.props.income / (12 / this.state.noMonths)).toFixed(2)}</Table.Cell>
         </Table.Row>
         <Table.Row>
           <Table.Cell>Expenses</Table.Cell>
           <Table.Cell>${this.filterTransactions(this.props.transactions).toFixed(2)}</Table.Cell>
         </Table.Row>
         </Table.Body>
         <Table.Footer>
         <Table.Row>
           <Table.HeaderCell colSpan='3'>
           </Table.HeaderCell>
         </Table.Row>
         </Table.Footer>
       </Table>
      </div>
    )
  }
}

export default CashFlowChart;
