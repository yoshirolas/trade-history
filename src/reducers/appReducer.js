import { combineReducers } from 'redux';
import updateTableTradeHistory from './updateTableTradeHistory';


const appReducer = combineReducers ({
  updateTableTradeHistory,
});

export default appReducer;