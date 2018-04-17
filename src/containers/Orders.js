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
  margin-right: 5px;
  width: 50%;
  height: 100%;
  overflow: hidden;
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
  display:flex;
  flex-direction: column;
`;

const BuyOrders = styled.article`
  width: 50%;
  height: 100%;
  overflow: hidden;
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
  display:flex;
  flex-direction: column;
`;

const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Title = styled.span`
  font-weight: bold;
  margin: 5px 0 0 10px;
`;

const Total = styled.span`
  margin: 5px 10px 10px 10px;
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
    let sellOrdersSumTotal = null;
    let buyOrdersSumTotal = null;
    if (this.props.data) {
      const sellOrdersTotal = this.props.data.asks.map(order => order[0] * order[1]);
      sellOrdersSumTotal = sellOrdersTotal.reduce((sum,next) => (sum + next), 0);

      const buyOrdersTotal = this.props.data.bids.map(order => order[0] * order[1]);
      buyOrdersSumTotal = buyOrdersTotal.reduce((sum,next) => (sum + next), 0);
    }

    return (
      <OrdersContainer>
        <SellOrders>
          <TitleContainer>
            <Title>
              Sell Orders
            </Title>
            <Total>
              {`Total: ${sellOrdersSumTotal} USDT`}
            </Total>
          </TitleContainer>
          <CustomTable
            header={tableHeader}
            data={this.props.data.asks}
          />
        </SellOrders>
        <BuyOrders>
          <TitleContainer>
            <Title>
              Buy Orders
            </Title>
            <Total>
              {`Total: ${buyOrdersSumTotal} USDT`}
            </Total>
          </TitleContainer>
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