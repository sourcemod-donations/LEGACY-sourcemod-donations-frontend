import {
  PURCHASE_FETCH_PRODUCT,
  PURCHASE_FETCH_PRODUCT_FAILURE,
  PURCHASE_FETCH_PRODUCT_SUCCESS
} from "../actions/purchase";

const initialState = {
  isLoading: false,
  product: {},
  error: null
};

function auth(state = initialState, action) {
  const {payload} = action;

  switch (action.type) {
    case PURCHASE_FETCH_PRODUCT:
      return {
        ...state,
        isLoading: true
      };

    case PURCHASE_FETCH_PRODUCT_SUCCESS:
      return {
        ...state,
        product: payload.product,
        isLoading: false
      };

    case PURCHASE_FETCH_PRODUCT_FAILURE:
      return {
        ...state,
        product: null,
        error: payload.error,
        isLoading: false
      };

    default:
      return state
  }
}

export default auth;