import React, { Component } from 'react';
import CustomTable from '../components/CustomTable';
import { asyncGetOrders } from '../actions/appActions';
import { connect } from 'react-redux';
import styled from 'styled-components';


const tableHeader = [
  "Price(USDT)",
  "Amount(BTC)",
  "Total(USDT)"
];

const OrdersContainer = styled.section`
  margin: 20px 0 20px 0;
  width: 100%;
  height: 400px;
  display: flex;
`;

const SellOrders = styled.article`
  width: 50%;
  height: 100%;
  overflow: hidden;
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
`;

const BuyOrders = styled.article`
  width: 50%;
  height: 100%;
  overflow: hidden;
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
`;

class Orders extends Component {

  componentDidMount() {
    this.props.dispatch(asyncGetOrders);
  }

  shouldComponentUpdate(nextProps) {
    if (this.props.data.seq) {
      if (this.props.data.seq === nextProps.data.seq) {
        return false;
      }
    }
    return true;
  }

  render(){ 
    return (
      <OrdersContainer>
        <SellOrders>
          <h3>
            Sell Orders
          </h3>
          <CustomTable
            header={tableHeader}
            data={this.props.data.asks}
          />
        </SellOrders>
        <BuyOrders>
          <h3>
            Buy Orders
          </h3>
          <CustomTable
            header={tableHeader}
            data={this.props.data.bids}
          />
        </BuyOrders>
      </OrdersContainer>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state.updateOrdersReducer,
  }
}


export default connect(mapStateToProps)(Orders);