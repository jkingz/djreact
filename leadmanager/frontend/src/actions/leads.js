import axios from "axios";
import { CREATE_MESSAGE, createMessage, returnErrors } from "./messages";
import { tokenConfig } from "./auth";

import { GET_LEADS, DELETE_LEAD, ADD_LEAD, GET_MESSAGES } from "./types";

//GET LEADS
export const getLeads = () => (dispatch, getState) => {
  axios
    .get("/apiv1/leads/", tokenConfig(getState))
    .then(res => {
      dispatch({
        type: GET_LEADS,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// DELETE LEADS
export const deleteLead = id => (dispatch, getState) => {
  axios
    .delete(`/apiv1/leads/${id}/`, tokenConfig(getState))
    .then(res => {
      dispatch(
        createMessage({
          deleteLead: "LEAD DELETED!"
        })
      );
      dispatch({
        type: DELETE_LEAD,
        payload: id
      });
    })
    .catch(err => console.log(err));
};

// ADD LEAD
export const addLead = lead => (dispatch, getState) => {
  axios
    .post("/apiv1/leads/", lead, tokenConfig(getState))
    .then(res => {
      dispatch(
        createMessage({
          addLead: "LEAD ADDED!"
        })
      );
      dispatch({
        type: ADD_LEAD,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
