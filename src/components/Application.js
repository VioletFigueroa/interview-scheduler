import React, { useState, useEffect } from "react";
import axios from "axios";

import DayList from "components/DayList";
import Appointment from "components/Appointment";

import {
  getAppointmentsForDay,
  getInterview,
  getInterviewersForDay,
} from "helpers/selectors";

import "components/Application.scss";

export default function Application(props) {
  const ERROR_SAVE = "ERROR_SAVE";
  const ERROR_DELETE = "ERROR_DELETE";
  let error = null;
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {},
  });
  const bookInterview = (id, interview) => {
    console.log(id, interview);
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
          appointments
        });
      })
      .catch((err) => {
        console.error(err);
        error = ERROR_SAVE;
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
        error = ERROR_DELETE;
      });
  };
  const setDay = (day) => setState({ ...state, day });
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
  const schedule = getAppointmentsForDay(state, state.day).map(
    (appointment) => {
      const interview = getInterview(state, appointment.interview);
      const interviewers = getInterviewersForDay(state, state.day);
      return (
        <Appointment
          key={appointment.id}
          id={appointment.id}
          time={appointment.time}
          interview={interview}
          interviewers={interviewers}
          bookInterview={bookInterview}
          cancelInterview={cancelInterview}
          error={error}
        />
      );
    }
  );
  return (
    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">
          <DayList days={state.days} day={state.day} setDay={setDay} />
        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
      </section>
      <section className="schedule">
        {schedule}
        <Appointment key="last" time="5pm" />
      </section>
    </main>
  );
}
