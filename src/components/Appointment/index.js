import React from "react";

import useVisualMode from "hooks/useVisualMode";

import "./styles.scss";

import Header from "./Header";

import Empty from "./Empty";

import Show from "./Show";

import Form from "./Form";

import Status from "./Status";

import Confirm from "./Confirm";

import Error from "./Error";

const EMPTY = "EMPTY";

const SHOW = "SHOW";

const CREATE = "CREATE";

const SAVING = "SAVING";

const DELETING = "DELETEING";

const CONFIRM = "CONFIRM";

const EDIT = "EDIT";

const ERROR_SAVE = "ERROR_SAVE";

const ERROR_DELETE = "ERROR_DELETE";

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

    props
      .bookInterview(props.id, interview, props.day)
      .then(() => transition(SHOW))
      .catch(() => transition(ERROR_SAVE, true));
  };

  const destroy = () => {
    transition(DELETING, true);
    props
      .cancelInterview(props.id, props.day)
      .then(() => transition(EMPTY))
      .catch(() => transition(ERROR_DELETE, true));
  };


  return (
    <article className="appointment">
      <Header time={props.time} />
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && props.interview && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
          onDelete={() => transition(CONFIRM)}
          onEdit={() => transition(EDIT)}
        />
      )}
      {mode === CREATE && (
        <Form interviewers={props.interviewers} onCancel={back} onSave={save} />
      )}
      {mode === EDIT && (
        <Form
          name={props.interview.student}
          interviewer={props.interview.interviewer.id}
          interviewers={props.interviewers}
          onCancel={back}
          onSave={save}
        />
      )}
      {mode === SAVING && <Status message={SAVING} />}
      {mode === CONFIRM && <Confirm onCancel={back} onConfirm={destroy} />}
      {mode === DELETING && <Status message={DELETING} />}
      {mode === ERROR_SAVE && <Error message={ERROR_SAVE} onCancel={back} />}
      {mode === ERROR_DELETE && (
        <Error message={ERROR_DELETE} onCancel={back} />
      )}
    </article>
  );
}
