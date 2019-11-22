import { INCREMENT, DECREASE } from "./actionTypes";
import { toast } from "react-toastify";

export function incrementAction() {
  return function(dispatch) {
    dispatch({
      type: INCREMENT
    });
    toast.success("MY SUCCESS");
  };
}
export function decreaseAction() {
  return function(dispatch) {
    dispatch({
      type: DECREASE
    });
    toast.warn("DECREASE");
  };
}
