import React from "react";

import "./InterviewListItem.scss";

import classnames from "classnames";

export default function InterviewerListItem(props) {
  const interviewerClass = classnames({
    "interviewers__item--selected": props.selected,
    "interviewers__item-image--selected": props.selected,
  });

  return (
    <li
      className={interviewerClass}
      onClick={() => props.setInterviewer(props.key)}
    >
      <img
        className="interviewers__item-image"
        src={props.avatar}
        alt={props.name}
      />
      {props.selected && props.name}
    </li>
  );
}
