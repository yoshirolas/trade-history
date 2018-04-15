import React, { Component } from 'react';
import CustomTable from '../components/CustomTable';
import { asyncGetTradeHistory } from '../actions/appActions';
import { connect } from 'react-redux';
import styled from 'styled-components';


const tableHeader = [
  "Date",
  "Type",
  "Price(USDT)",
  "Amount(BTC)",
  "Total(USDT)"
];

const TradeHistoryContainer = styled.section`
  margin: 20px 0 20px 0;
  width: 100%;
  height: 400px;
  overflow: hidden;
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
`;

class TradeHistory extends Component {

  componentDidMount() {
    this.props.dispatch(asyncGetTradeHistory);
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
      <TradeHistoryContainer>
        <h3>
          Trade History
        </h3>
        <CustomTable
          header={tableHeader}
          data={this.props.data}
        />
      </TradeHistoryContainer>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state.updateTableTradeHistory,
  }
}


export default connect(mapStateToProps)(TradeHistory);