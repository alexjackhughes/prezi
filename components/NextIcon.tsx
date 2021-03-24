interface Props {
  onClick: () => void;
}

const NextIcon: React.FC<Props> = ({ onClick }) => (
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
        d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  </div>
);

export default NextIcon;
