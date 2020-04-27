import {
  CHANGE_SEARCH_FIELD,
  REQUEST_COUNTRIES_PENDING,
  REQUEST_COUNTRIES_FAILED,
  REQUEST_COUNTRIES_SUCCESS,
} from "./constants";

const initialStateSearch = {
  searchField: "",
};
const initialStateCountries = {
  isPending: false,
  countries: [],
  err: "",
};

export const searchRobots = (state = initialStateSearch, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return Object.assign({}, state, { searchField: action.payload });
    default:
      return state;
  }
};

export const requestCountries = (
  state = initialStateCountries,
  action = {}
) => {
  switch (action.type) {
    case REQUEST_COUNTRIES_PENDING:
      return Object.assign({}, state, { isPending: true });
    case REQUEST_COUNTRIES_SUCCESS:
      return Object.assign({}, state, {
        countries: action.payload,
        isPending: false,
      });
    case REQUEST_COUNTRIES_FAILED:
      return Object.assign({}, state, {
        err: action.payload,
        isPending: false,
      });
    default:
      return state;
  }
};
