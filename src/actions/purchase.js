import apiFetch from "../apiFetch";

export const PURCHASE_FETCH_PRODUCT = 'PURCHASE_FETCH_PRODUCT';
export const PURCHASE_FETCH_PRODUCT_SUCCESS = 'PURCHASE_FETCH_PRODUCT_SUCCESS';
export const PURCHASE_FETCH_PRODUCT_FAILURE = 'PURCHASE_FETCH_PRODUCT_FAILURE';

export const RECIPIENT_MYSELF = 'RECIPIENT_MYSELF';
export const RECIPIENT_SOMEBODYELSE = 'RECIPIENT_SOMEBODYELSE';

export const PAYMENT_METHOD = {
  PAYPAL: 'PAYPAL'
};

export function purchaseStart(productId) {
  return (dispatch) => {
    dispatch({
      type: PURCHASE_FETCH_PRODUCT
    });

    apiFetch(`products/${+productId}`)
        .then(res => {
          if (res.ok)
            return res
                .json()
                .then(data => {
                  dispatch(purchaseFetchProductSuccess(data));
                });
        });
  };
}

export function purchaseFetchProductSuccess(product) {
  return {
    type: PURCHASE_FETCH_PRODUCT_SUCCESS,
    payload: {product}
  }
}

export function purchaseFetchProductFailure(error) {
  return {
    type: PURCHASE_FETCH_PRODUCT_FAILURE,
    payload: {error}
  }
}