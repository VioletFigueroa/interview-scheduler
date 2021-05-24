export function getAppointmentsForDay(state, day) {
  if (state.days.length === 0 || state === null || day === null) {
    return [];
  }
  const found = state.days.find((dayListItem) => day === dayListItem.name);
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

// Manali worked with me to help guide my code for this function;
export function getInterviewersForDay(state, day) {
  if (state.days.length === 0 || state === null || day === null) {
    return [];
  }
  const found = state.days.find((dayListItem) => day === dayListItem.name);
  if (found === undefined) return [];
  return found.interviewers.map(
    (interviewer) => state.interviewers[interviewer]
  );
}
export function getSpotsForDay(state, day) {
  if (state.days.length === 0 || state === null || day === null) {
    return [];
  }
  const found = state.days.find((dayListItem) => day === dayListItem.name);
  if (found === undefined) return [];
  return found.spots;
}
