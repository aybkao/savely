import React from 'react';
import ReactDOM from 'react-dom';
import { Icon, Label, Menu, Table } from 'semantic-ui-react';

class TransactionsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currPage: 1
    };
    this.changePage.bind(this);
  }
  changePage(num) {
    console.log(context);
  }
  formatTransactions (transactions){
    console.log(transactions);
    var initial = (this.state.currPage - 1) * 5;
    var rows = [];
    console.log(this.state.currPage * 5);
    for (var i = initial; i < transactions.length; i++) {
      rows.push(
        <Table.Row key={i}>
          <Table.Cell>{transactions[i].vendor}</Table.Cell>
          <Table.Cell>{transactions[i].description}</Table.Cell>
          <Table.Cell>${transactions[i].amount}</Table.Cell>
          <Table.Cell>{transactions[i].date}</Table.Cell>
        </Table.Row>
      );
    }
    return rows;
  }
  render() {
    return (
      <div>
      <h3>Transactions (last 3 months)</h3>
      <Table celled>
         <Table.Header>
           <Table.Row>
             <Table.HeaderCell className="trans-head">Vendor</Table.HeaderCell>
             <Table.HeaderCell className="trans-head">Item</Table.HeaderCell>
             <Table.HeaderCell className="trans-head">Amount</Table.HeaderCell>
             <Table.HeaderCell className="trans-head">Date</Table.HeaderCell>
           </Table.Row>
         </Table.Header>
         <Table.Body>
           {this.formatTransactions(this.props.transactions)}
         </Table.Body>
         <Table.Footer>
         <Table.Row>
           <Table.HeaderCell colSpan='3'>
             <Menu floated='right' pagination>
               <Menu.Item as='a' icon>
                 <Icon name='left chevron' />
               </Menu.Item>
               <Menu.Item as='a'>1</Menu.Item>
               <Menu.Item as='a'>2</Menu.Item>
               <Menu.Item as='a'>3</Menu.Item>
               <Menu.Item as='a'>4</Menu.Item>
               <Menu.Item as='a' icon>
                 <Icon name='right chevron' />
               </Menu.Item>
             </Menu>
           </Table.HeaderCell>
         </Table.Row>
         </Table.Footer>
       </Table>
     </div>
    );
  }
}

export default TransactionsList;
