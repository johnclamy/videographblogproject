export default function Auth({ onToggleAuth }) {
  const handleClick = e => {
    e.preventDefault()
  }
  return (
    <button
      onClick={handleClick}
      className="relative inline-flex items-center justify-center p-0.5 ml-2 mt-4 overflow-hidden text-sm font-medium text-cyan-900 rounded-lg group bg-gradient-to-br from-cyan-600 to-cyan-800 group-hover:from-cyan-500 group-hover:to-gray-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
    >
      <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
        Register/ Sign In
      </span>
    </button>
  );
}