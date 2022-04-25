function DeleteIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className={`w-6 h-6 ${className || ""}`}
    >
      <polyline points="0,0 4,0 20,16 20,20 16,20 0,4 0,0" />
      <polyline points="16,0 20,0 20,4 4,20 0,20 0,16 16,0" />
    </svg>
  );
}

export default DeleteIcon;
