const getDay = (state, day) => {
  if (
    state === null ||
    day === null ||
    state === undefined ||
    day === undefined ||
    state.days.length === 0
  ) {
    return undefined;
  }
  const found = state.days.find((dayListItem) => day === dayListItem.name);
  if (found === undefined) return undefined;
  return found;
};

export function getIndexForDay(state, day) {
  const found = getDay(state, day);
  if (found === undefined) return undefined;
  return found.id - 1;
}

export function getAppointmentsForDay(state, day) {
  const found = getDay(state, day);
  if (found === undefined) return [];
  return found.appointments.map(
    (appointment) => state.appointments[appointment]
  );
}

export function getInterview(state, interview) {
  if (interview === null) return null;
  const interviewerID = interview.interviewer;
  let interviewerData = interview;
  interviewerData.interviewer = state.interviewers[interviewerID];
  return interviewerData;
}

export function getInterviewersForDay(state, day) {
  const found = getDay(state, day);
  if (found === undefined) return [];
  return found.interviewers.map(
    (interviewer) => state.interviewers[interviewer]
  );
}

export function getSpotsForDay(state, day) {
  const found = getDay(state, day);
  if (found === undefined) return undefined;
  return found.spots;
}
