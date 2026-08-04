function ExpandButton({ expanded, onToggle }) {
  return (
    <button
      className="expand-btn"
      onClick={onToggle}
    >
      {expanded ? "Show Less" : "See More"}
    </button>
  );
}

export default ExpandButton;