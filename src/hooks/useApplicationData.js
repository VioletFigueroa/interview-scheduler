import { useState, useEffect } from "react";
import axios from "axios";

import { getSpotsForDay } from "helpers/selectors";

export function useApplicationData() {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {},
  });
  const setDay = (day) => setState({ ...state, day });
  const bookInterview = (id, interview, selectedDay) => {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview },
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };
    const spots = getSpotsForDay(state, selectedDay) - 1;
    console.log("New Book Spots: " + spots);
    const newDay = {
      ...state.days[selectedDay],
    };
    newDay.spots = spots;
    const days = [...state.days];
    days[selectedDay] = newDay;
    return axios
      .put(`/api/appointments/${id}`, appointment)
      .then(() => {
        console.log("Book Days: " + JSON.stringify(days));
        console.log("Book Appointments: " + JSON.stringify(appointments));
        setState({
          ...state,
          appointments,
          days,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };
  const cancelInterview = (id, selectedDay) => {
    const appointment = {
      ...state.appointments[id],
      interview: null,
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };
    const spots = getSpotsForDay(state, selectedDay) + 1;
    console.log(`New Cancel Spots: ` + spots);
    const day = {
      ...state.days[selectedDay],
    };
    day.spots = spots;
    const days = [...state.days];
    days[selectedDay] = day;
    return axios
      .delete(`/api/appointments/${id}`)
      .then(() => {
        console.log("Cancel Days: " + JSON.stringify(days));
        console.log("Cancel Appointments: " + JSON.stringify(appointments));
        setState({
          ...state,
          appointments,
          days,
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
