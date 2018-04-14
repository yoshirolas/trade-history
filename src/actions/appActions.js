import axios from 'axios';

export const asyncGetUpdates = (dispatch) => {
  setInterval(() => {
    axios.get('https://poloniex.com/public?command=returnTradeHistory&currencyPair=BTC_NXT')
    .then(res => {
      const data = res.data;
      return dispatch({
        type: 'UPDATE_TABLE_TRADE_HISTORY',
        payload: data
      })
    })
    .catch(err => console.log(err))
  }, 1000);
}