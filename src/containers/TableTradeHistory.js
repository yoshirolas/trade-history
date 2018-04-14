import React, { Component } from 'react';
import { asyncGetUpdates } from '../actions/appActions';
import { connect } from 'react-redux';

import Table, { 
  TableBody, 
  TableCell, 
  TableHead, 
  TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';


class SimpleTable extends Component {

  componentDidMount() {
    this.props.dispatch(asyncGetUpdates);
  }

  shouldComponentUpdate(nextProps) {
    if (this.props.data.length > 1) {
      if (this.props.data[0].tradeID === nextProps.data[0].tradeID) {
        return false;
      }
    }
    return true;
  }

  render(){ 
    return (
      <Paper>
        <h2>
          Trade History
        </h2>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Price(USDT)</TableCell>
              <TableCell>Amount(BTC)</TableCell>
              <TableCell>Total(USDT)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.data.map(item => {
              return (
                <TableRow key={item.tradeID}>
                  <TableCell>{item.date}</TableCell>
                  <TableCell>{item.type}</TableCell>
                  <TableCell>{item.rate}</TableCell>
                  <TableCell>{item.amount}</TableCell>
                  <TableCell>{item.total}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    );
  }

}

function mapStateToProps(state) {
  return {
    data: state.updateTableTradeHistory,
  }
}


export default connect(mapStateToProps)(SimpleTable);