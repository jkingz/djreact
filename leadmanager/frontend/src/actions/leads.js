import axios from "axios";
import { CREATE_MESSAGE, createMessage, returnErrors } from "./messages";

import { GET_LEADS, DELETE_LEAD, ADD_LEAD, GET_MESSAGES } from "./types";

//GET LEADS
export const getLeads = () => dispatch => {
  axios
    .get("/apiv1/leads/")
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
export const deleteLead = id => dispatch => {
  axios
    .delete(`/apiv1/leads/${id}/`)
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
export const addLead = lead => dispatch => {
  axios
    .post("/apiv1/leads/", lead)
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
