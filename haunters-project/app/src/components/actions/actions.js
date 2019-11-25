import { INCREMENT, DECREASE, SUCCESS, FAILED } from "./actionTypes";
import { toast } from "react-toastify";

export function incrementAction() {
  return function(dispatch) {
    dispatch({
      type: INCREMENT
    });
    toast.info("Booking submitted");
  };
}
export function decreaseAction() {
  return function(dispatch) {
    dispatch({
      type: DECREASE
    });
    toast.error("Booking deleted");
  };
}
export function successAction() {
  return function(dispatch) {
    dispatch({
      type: SUCCESS
    });
    toast.warn("SUCCESS");
  };
}
export function failedAction() {
  return function(dispatch) {
    dispatch({
      type: FAILED
    });
    toast.warn("FAILED");
  };
}
