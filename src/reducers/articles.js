import { GET_ARTICLES, GET_ARTICLE, ADD_ARTICLE } from "../actions/types";

const initialState = {
  articles: [],
  article: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ARTICLES:
      return {
        ...state,
        articles: action.payload,
      };
    case GET_ARTICLE:
      return {
        ...state,
        article: action.payload,
      };
    case ADD_ARTICLE:
      return {
        ...state,
      };
    default:
      return state;
  }
}
