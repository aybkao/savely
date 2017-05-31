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
  handleItemClick = (e, { i }) => this.setState({ currPage: i })
  changePage(num) {
    console.log(context);
  }
  formatPages(transactions){
    var numPages = transactions.length / 5;
    var numPages = numPages % 1 === 0 ? numPages : parseInt(numPages) + 1;
    var pageButtons = [];
    for (var i = 1; i <= numPages; i++) {
      pageButtons.push(
        <Menu.Item name=JSON.stringify(i) active={JSON.stringify(i)} onClick={this.handleItemClick}>${i}</Menu.Item>
      );
    }
    return pageButtons;
  }
  formatTransactions(transactions){
    console.log(transactions);
    var initial = (this.state.currPage - 1) * 5;
    var rows = [];
    console.log(numPages);
    console.log(this.state.currPage * 5);
    for (var i = initial; i < (this.state.currPage * 5); i++) {
      rows.push(
        <Table.Row key={i}>
          <Table.Cell>{transactions[i].vendor}</Table.Cell>
          <Table.Cell>{transactions[i].date}</Table.Cell>
          <Table.Cell>${transactions[i].amount}</Table.Cell>
        </Table.Row>
      );
    }
    return rows;
  }
  render() {
    return (
      <Table celled>
         <Table.Header>
           <Table.Row>
             <Table.HeaderCell>Vendor</Table.HeaderCell>
             <Table.HeaderCell>Date</Table.HeaderCell>
             <Table.HeaderCell>Amount</Table.HeaderCell>
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
                {this.formatPages(this.props.transactions)}
               <Menu.Item as='a' icon>
                 <Icon name='right chevron' />
               </Menu.Item>
             </Menu>
           </Table.HeaderCell>
         </Table.Row>
         </Table.Footer>
       </Table>
    )
  }
};

export default TransactionsList;
