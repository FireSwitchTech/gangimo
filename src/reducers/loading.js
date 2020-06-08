import { LOADING } from "../actions/types";

const initialState = {
  isLoading: true,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOADING:
      return {
        isLoading: action.payload.isLoading,
      };
    default:
      return state;
  }
}
