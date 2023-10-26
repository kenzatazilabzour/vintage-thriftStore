import sendRequest from "./send-request";
const BASE_URL = '/api/orders';

export async function add(order) {
  return sendRequest(BASE_URL, 'POST', order);
}

export async function getOrder() {
  return sendRequest(BASE_URL)
}

export async function addToOrder(product) {
  return sendRequest(`${BASE_URL}/products/${product._id}`, 'POST', product)
}
