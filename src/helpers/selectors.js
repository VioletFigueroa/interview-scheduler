export function getAppointmentsForDay(state, day) {
  let output = [];
  const filteredDays = state.days.filter((id) => id.name === day);
  if (filteredDays.length === 0) {
    return output;
  }
  const appointmentIDs = filteredDays[0]["appointments"];
  for (const id of appointmentIDs) {
    for (const key of Object.keys(state.appointments)) {
      if (state.appointments[key]["id"] === id) {
        output.push(state.appointments[key]);
      }
    }
  }
  return output;
}

export function getInterview(state, interview) {
  if (interview === null) return null;
  const interviewerID = interview.interviewer;
  let interviewerData = interview;
  interviewerData.interviewer = state.interviewers[interviewerID];
  return interviewerData;
}
