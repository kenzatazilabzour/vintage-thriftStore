import sendRequest from "./send-request";
const BASE_URL = '/api/orders';

export async function add(order) {
  return sendRequest(BASE_URL, 'POST', order);
}

export async function checkoutAll() {
  return sendRequest(BASE_URL)
}
