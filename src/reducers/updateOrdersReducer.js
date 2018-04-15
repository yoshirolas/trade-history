const initState = {
  asks: [],
  bids: [],
  seq: null,
}

function updateOrders (state = initState, action) {
  switch (action.type) {

    case 'UPDATE_ORDERS': {
      return action.payload
    }
    
    default:
      return state;
  }
}

export default updateOrders;