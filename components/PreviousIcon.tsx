interface Props {
  onClick: () => void;
}

const PreviousIcon: React.FC<Props> = ({ onClick }) => (
  <div
    className="h-screen flex flex-col justify-center hover:bg-gray-700 text-gray-900 opacity-50 px-4 md:px-2 rounded cursor-pointer"
    onClick={onClick}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="cursor-pointer h-10 w-10 md:h-14 md:w-14"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
      />
    </svg>
  </div>
);

export default PreviousIcon;
