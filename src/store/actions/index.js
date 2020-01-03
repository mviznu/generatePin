import { ADD_PIN, DELETE_PIN, UPDATE_PIN_NAME } from "../constants/action-types";

export function addPin(payload) {
  return { type: ADD_PIN, payload };
}

export function updatePinName(payload) {
  return { type: UPDATE_PIN_NAME, payload };
}

export function deletePin(payload) {
  return { type: DELETE_PIN, payload };
}