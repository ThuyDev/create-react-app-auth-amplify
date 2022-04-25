function MinusIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className={`w-6 h-6 ${className || ""}`}
    >
      <polyline points="0,8 20,8 20,12 0,12" />
    </svg>
  );
}

export default MinusIcon;