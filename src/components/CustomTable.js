import React, { Component } from 'react';

import shortid from 'shortid';
import styled from 'styled-components';

import Table, { 
  TableBody, 
  TableCell, 
  TableHead, 
  TableRow } from 'material-ui/Table';

const TableContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
`;

class CustomTable extends Component {

  // componentDidMount() {
  //   this.props.dispatch(asyncGetUpdates);
  // }

  // shouldComponentUpdate(nextProps) {
  //   if (this.props.data.length > 1) {
  //     if (this.props.data[0].tradeID === nextProps.data[0].tradeID) {
  //       return false;
  //     }
  //   }
  //   return true;
  // }

  render(){ 
    return (
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {this.props.header.map(cellName => {
                return (
                  <TableCell key={cellName}>
                    {cellName}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.data.map(item => {
              if (item.tradeID) {
                return (
                  <TableRow key={item.tradeID}>
                    <TableCell>{item.date}</TableCell>
                    <TableCell>{item.type}</TableCell>
                    <TableCell>{item.rate}</TableCell>
                    <TableCell>{item.amount}</TableCell>
                    <TableCell>{item.total}</TableCell>
                  </TableRow>
                );
              } else {
                return (
                  <TableRow key={shortid.generate()}>
                    <TableCell>{item[0]}</TableCell>
                    <TableCell>{item[1]}</TableCell>
                    <TableCell>{item[0] * item[1]}</TableCell>
                  </TableRow>
                );
              }
            })}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}

export default CustomTable;