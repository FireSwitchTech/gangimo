import axios from "axios";
import { GET_ARTICLES, GET_ARTICLE, GET_ERRORS } from "./types";

const endPoint = "https://api.gangimo.com";

export const getArticles = () => (dispatch) => {
  axios
    .get(`${endPoint}/?apptoken=T9H1E6KUYM&action=600`)
    .then((res) => {
      console.log(res.data);
      dispatch({
        type: GET_ARTICLES,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
      const errors = {
        msg: err.message,
        status: err,
      };
      dispatch({
        type: GET_ERRORS,
        payload: errors,
      });
    });
};

export const getArticle = (slug) => (dispatch) => {
  axios
    .get(`${endPoint}/?apptoken=T9H1E6KUYM&action=500&title_mod=${slug}`)
    .then((res) => {
      console.log(res.data);
      dispatch({
        type: GET_ARTICLE,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
      const errors = {
        msg: err.message,
        status: err,
      };
      dispatch({
        type: GET_ERRORS,
        payload: errors,
      });
    });
};
export const addArticle = (catid, title, content, userToken) => (dispatch) => {
  axios
    .post(
      `${endPoint}/?apptoken=T9H1E6KUYM&usertoken=${userToken}&action=300&catid=${catid}&title=${title}&content=${content}`,
    )
    .then((res) => {
      console.log(res.data);
      dispatch({
        message: res.data.message,
      });
    })
    .catch((err) => {
      console.log(err);
      const errors = {
        msg: err.message,
        status: err,
      };
      dispatch({
        type: GET_ERRORS,
        payload: errors,
      });
    });
};
