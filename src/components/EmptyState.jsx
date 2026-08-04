import { FiFolder } from "react-icons/fi";

function EmptyState() {
  return (
    <div className="empty-state">

      <div className="empty-icon">
        <FiFolder />
      </div>

      <h3>No Projects Found</h3>

      <p>
        There are no projects in this category.
        Please choose another category.
      </p>

    </div>
  );
}

export default EmptyState;