import React from "react";

export function useToggle(initialState = false) {
  const [isState, setIsState] = React.useState(initialState);

  const toggle = React.useCallback(() => {
    setIsState((isState) => !isState);
  }, []);

  return {
    isState,
    toggle,
  };
}
