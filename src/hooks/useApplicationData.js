import { useState, useEffect } from "react";

import axios from "axios";

import { updateSpots } from "helpers/selectors";

export function useApplicationData() {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {},
  });

  const setDay = (day) => setState({ ...state, day });

  const bookInterview = (id, interview) => {
    const newAppointment = {
      ...state.appointments[id],
      interview: { ...interview },
    };

    const newAppointments = {
      ...state.appointments,
      [id]: newAppointment,
    };
    
    const newDays = updateSpots(state); 
    
    return axios
      .put(`/api/appointments/${id}`, newAppointment)
      .then(() => {
        setState({
          ...state,
          appointments: newAppointments,
          days: newDays,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const cancelInterview = (id, selectedDay) => {
    const newAppointments = {
      ...state.appointments,
      [id]: {
        ...state.appointments[id],
        interview: null,
      },
    };

    const newDays = updateSpots(state);
    
    return axios
      .delete(`/api/appointments/${id}`)
      .then(() => {
        setState({
          ...state,
          appointments: newAppointments,
          days: newDays,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    const api = "/api/";

    const daysURL = api + "days";

    const appointmentsURL = api + "appointments";

    const interviewersURL = api + "interviewers";

    Promise.all([
      axios.get(daysURL),
      axios.get(appointmentsURL),
      axios.get(interviewersURL),
    ])
      .then((res) => {
        setState((prev) => ({
          ...prev,
          days: res[0].data,
          appointments: res[1].data,
          interviewers: res[2].data,
        }));
      })
      .catch((err) => console.log(err));
  }, []);

  return {
    state,
    setDay,
    bookInterview,
    cancelInterview,
  };
}
