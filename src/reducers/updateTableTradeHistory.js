function updateTableTradeHistory (state = [], action) {
  switch (action.type) {

    case 'UPDATE_TABLE_TRADE_HISTORY': {
      return action.payload
    }
    
    default:
      return state;
  }
}

export default updateTableTradeHistory;