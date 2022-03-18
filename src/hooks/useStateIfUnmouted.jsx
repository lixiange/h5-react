import { useState, useRef, useEffect, useCallback } from "react";

export default function useStateIfMounted(initialValue) {
  const isUnmounted = useRef(false);
  useEffect(() => {
    isUnmounted.current = false;
    return () => {
      isUnmounted.current = true;
    };
  }, []);
  const [state, setState] = useState(initialValue);
  const newSetState = useCallback((value) => {
    if (!isUnmounted.current) {
      setState(value);
    }
  }, []);
  return [state, newSetState];
}
