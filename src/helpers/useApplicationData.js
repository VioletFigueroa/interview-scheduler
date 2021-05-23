import { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData() {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {},
  });
  const setDay = (day) => setState({ ...state, day });
  const bookInterview = (id, interview) => {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview },
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };
    axios
      .put(`/api/appointments/${id}`)
      .then(() => {
        setState({
          ...state,
          appointments,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };
  const cancelInterview = (id) => {
    const appointment = {
      ...state.appointments[id],
      interview: { ...null },
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };
    axios
      .delete(`/api/appointments/${id}`)
      .then(() => {
        setState({
          ...state,
          appointments,
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
}
