import React from "react";

import useVisualMode from "hooks/useVisualMode";

import "./styles.scss";

import Header from "./Header";
import Empty from "./Empty";
import Show from "./Show";
import Form from "./Form";
import Status from "./Status";
import Confirm from "./Confirm";

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";
const SAVING = "SAVING";
const CONFIRM = "CONFIRM";
const EDIT = "EDIT";



export default function Appointment(props) {
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );
  const save = (name, interviewer) => {
    const interview = {
      student: name,
      interviewer,
    };
    transition(SAVING);
    props.bookInterview(props.id, interview);
    if(props.error && props.error === props.ERROR_SAVE) error(props.ERROR_SAVE);
    transition(SHOW);
  };
  const cancel = (id) => {
    transition(CONFIRM);
    props.cancelInterview(id);
    if(props.error && props.error === props.ERROR_DELETE) error(props.ERROR_DELETE);
    transition(EMPTY);
  };
  const edit = (id) => {
    transition(EDIT);
  }
  const error = (error) =>{
    transition(error, true);
  }
  return (
    <article className="appointment">
      <Header time={props.time} />
      {mode === EMPTY && <Empty onClick={() => transition(CREATE)} />}
      {mode === SHOW && (
        <Show
          student={props.interview && props.interview.student}
          interviewer={props.interview && props.interview.interviewer}
          onCancel={cancel}
          onEdit={edit}
        />
      )}
      {mode === CREATE && (
        <Form interviewers={ props.interviewers} onCancel={back} onSave={save} />
      )}
      {mode === EDIT && (
        <Form name = {props.name} interviewers={ props.interviewers} onCancel={back} onSave={save} />
      )}
      {mode === SAVING && <Status message={props.message} />}
      {mode === CONFIRM && <Confirm onClick={() => cancel(props.id)}/>}
    </article>
  );
}
