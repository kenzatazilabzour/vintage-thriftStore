import sendRequest from "./send-request";
const BASE_URL = '/api/users';

export async function addNote(note) {
  return sendRequest(BASE_URL, 'POST', { note });
}
