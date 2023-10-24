import sendRequest from "./send-request";
const BASE_URL = '/api/products';

export async function add(product) {
  return sendRequest(BASE_URL, 'POST',  product );
}

export async function getAll() {
  return sendRequest(BASE_URL)
}
