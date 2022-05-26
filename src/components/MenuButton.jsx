import Button from "react-bootstrap/Button";

const MenuButton = ({ onMenuClick }) => (
  <Button className="text-dark" variant="link" onClick={onMenuClick}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 menu-btn"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  </Button>
);

export default MenuButton;
