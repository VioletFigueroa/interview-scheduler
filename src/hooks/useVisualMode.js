import { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);
  const back = () => {
    if (history.length > 1) {
      setHistory((prev) => [...prev.slice(0, history.length - 1)]);
      setMode(history[history.length - 2]);
    }
  };
  const transition = (newMode, replace = false) => {
    if (replace) back();
    setHistory((prev) => [...prev, newMode]);
    return setMode(newMode);
  };
  return { mode, transition, back };
}
