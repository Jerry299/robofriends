import {
  CHANGE_SEARCH_FIELD,
  REQUEST_COUNTRIES_PENDING,
  REQUEST_COUNTRIES_FAILED,
  REQUEST_COUNTRIES_SUCCESS,
} from "./constants";

import { API_URL } from "./config";

export const setSearchField = (text) => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text,
});

export const requestCountries = (dispatch) => {
  dispatch({ type: REQUEST_COUNTRIES_PENDING });
  fetch(`${API_URL}`)
    .then((res) => res.json())
    .then((data) =>
      dispatch({ type: REQUEST_COUNTRIES_SUCCESS, payload: data })
    )
    .catch((err) => dispatch({ type: REQUEST_COUNTRIES_FAILED, payload: err }));
};
