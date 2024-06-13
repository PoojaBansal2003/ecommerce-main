import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from '../actions/wishlistActions';

const initialState = {
  wishlist: []
};

const wishlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_WISHLIST:
      return {
        ...state,
        wishlist: [...state.wishlist, action.payload]
      };
    case REMOVE_FROM_WISHLIST:
      return {
        ...state,
        wishlist: state.wishlist.filter(product => product._id !== action.payload)
      };
    default:
      return state;
  }
};

export default wishlistReducer;
