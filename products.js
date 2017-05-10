import axios from 'axios';
export const REQUEST_GET_PRODUCTS = 'REQUEST_GET_PRODUCTS';
export const RESPONSE_GET_PRODUCTS = 'RESPONSE_GET_PRODUCTS';

export const requestGetProduct = url => ({
  type: REQUEST_GET_PRODUCTS,
  url
})

export const reponseGetProduct = payload => ({
  type: RESPONSE_GET_PRODUCTS,
  payload
})

export const fetchProducts = url => dispatch => {
  dispatch(requestGetProduct(url));

  return fetch(url, {
      headers: {
        'Content-Type': 'application/json, utf-8',
        'Accept': 'application/json'
      }
    })
    .then(response => response.json())
    .then (response => { dispatch(reponseGetProduct(response)) })
    .catch(err => {
      console.error(err);
      throw new Error(err);
    });
}