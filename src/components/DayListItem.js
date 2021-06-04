import React from "react";

import "./DayListItem.scss";

import classnames from "classnames";

export default function DayListItem(props) {
  const formatSpots = (spots) =>
    spots === 1
      ? `${spots} spot remaining`
      : spots === 0
      ? `no spots remaining`
      : `${spots} spots remaining`;

  const liClass = classnames("li", "day-list__item", {
    "day-list__item--selected": props.selected,
    "day-list__item--full": props.spots === 0,
  });

  return (
    <li
      className={liClass}
      onClick={() => props.setDay(props.name)}
      data-testid="day"
    >
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light">{formatSpots(props.spots)}</h3>
    </li>
  );
}
