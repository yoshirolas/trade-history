import { combineReducers } from 'redux';
import updateTableTradeHistory from './updateTableTradeHistory';
import updateOrdersReducer from './updateOrdersReducer';


const appReducer = combineReducers ({
  updateTableTradeHistory,
  updateOrdersReducer,
});

export default appReducer;