import { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);
  function transition(newMode) {
    setHistory((prev) => [...prev, newMode]);
    return setMode(newMode);
  }
  function back() {
    if (history.length > 1) {
      console.log ("History at 12: " + history);
      setHistory((prev) => [...prev.slice(0,history.length-1)]);
      console.log ("History at 14: " + history);
      setMode(history[history.length - 1]);
    }
  }
  return { mode, transition, back };
}
