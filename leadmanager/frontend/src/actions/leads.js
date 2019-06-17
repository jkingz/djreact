import axios from "axios";
import { GET_LEADS, DELETE_LEAD } from "./types";

//GET LEADS
export const getLeads = () => dispatch => {
  axios
    .get("/apiv1/leads/")
    .then(res => {
      console.log(res.data);
      dispatch({
        type: GET_LEADS,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

// DELETE LEADS
export const deleteLead = id => dispatch => {
  axios
    .delete(`/apiv1/leads/${id}/`)
    .then(res => {
      dispatch({
        type: DELETE_LEAD,
        payload: id
      });
    })
    .catch(err => console.log(err));
};
