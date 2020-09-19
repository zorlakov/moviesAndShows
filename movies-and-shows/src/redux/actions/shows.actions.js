import {
  TOP_SHOWS_FETCH_START,
  TOP_SHOWS_FETCH_SUCCESS,
  TOP_SHOWS_FETCH_FAIL,
  SHOW_DETAILS_FETCH_START,
  SHOW_DETAILS_FETCH_SUCCESS,
  SHOW_DETAILS_FETCH_FAIL,
  SET_SHOW_SEARCH_QUERY_SUCCESS,
  SEARCH_SHOWS_START,
  SEARCH_SHOWS_SUCCESS,
  SEARCH_SHOWS_FAIL,
} from './actionTypes';

import {
  API_KEY,
  URL_SHOW_DETAILS,
  URL_SHOW_LIST,
  URL_SHOWS_SEARCH,
  URL_QUERY,
} from '../../utils/api';

const topShowsFetchStart = () => {
  return {
    type: TOP_SHOWS_FETCH_START,
  };
};

const topShowsFetchSuccess = (data) => {
  return {
    type: TOP_SHOWS_FETCH_SUCCESS,
    data,
  };
};

const topShowsFetchFail = (error) => {
  return {
    type: TOP_SHOWS_FETCH_FAIL,
    error,
  };
};

const showDetailsFetchStart = () => {
  return {
    type: SHOW_DETAILS_FETCH_START,
  };
};

const showDetailsFetchSuccess = (data) => {
  return {
    type: SHOW_DETAILS_FETCH_SUCCESS,
    data,
  };
};

const showDetailsFetchFail = (error) => {
  return {
    type: SHOW_DETAILS_FETCH_FAIL,
    error,
  };
};

export const setShowSearchQuery = (data) => {
  return {
    type: SET_SHOW_SEARCH_QUERY_SUCCESS,
    data,
  };
};

const showsSearchFetchStart = () => {
  return {
    type: SEARCH_SHOWS_START,
  };
};

const showsSearchFetchSuccess = (data) => {
  return {
    type: SEARCH_SHOWS_SUCCESS,
    data,
  };
};

const showsSearchFetchFail = (error) => {
  return {
    type: SEARCH_SHOWS_FAIL,
    error,
  };
};

export const fetchShowSearch = (query) => {
  let url = URL_SHOWS_SEARCH + API_KEY + URL_QUERY + query;
  return (dispatch) => {
    dispatch(showsSearchFetchStart());
    return fetch(url)
      .then((response) => response.json())
      .then((json) => json.results)

      .then((data) => {
        dispatch(showsSearchFetchSuccess(data));
      })
      .catch((err) => dispatch(showsSearchFetchFail(err)));
  };
};

export const fetchTopShows = () => {
  let url = URL_SHOW_LIST + API_KEY;
  return (dispatch) => {
    dispatch(topShowsFetchStart());
    return fetch(url)
      .then((response) => response.json())
      .then((json) => json.results)
      .then((data) => {
        dispatch(topShowsFetchSuccess(data));
      })
      .catch((err) => dispatch(topShowsFetchFail(err)));
  };
};

export const fetchShowDetails = (id) => {
  let url = URL_SHOW_DETAILS + id + API_KEY;
  return (dispatch) => {
    dispatch(showDetailsFetchStart());
    return fetch(url)
      .then((response) => response.json())
      .then((data) => {
        dispatch(showDetailsFetchSuccess(data));
      })
      .catch((err) => dispatch(showDetailsFetchFail(err)));
  };
};
