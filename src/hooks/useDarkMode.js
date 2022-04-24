import React from "react";

function useDarkMode() {
  const [isDark, setIsDark] = React.useState(false);

  React.useEffect(() => {
    const themeMode = localStorage.getItem("theme-mode");
    if (themeMode && themeMode === "dark") {
      setIsDark(true);
    } else {
      setIsDark(false);
    }
  }, []);

  const toggleDark = () => {
    if (isDark) document.documentElement.classList.remove("dark");
    else document.documentElement.classList.add("dark");

    localStorage.setItem("theme-mode", isDark ? "light" : "dark");
    setIsDark(!isDark);
  };

  return { isDark, toggleDark };
}

export default useDarkMode;
