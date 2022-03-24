const Tooltip = ({ children }) => (
  <div className="text-sm bg-gray-600 text-gray-100 px-1 absolute rounded bg-opacity-50 shadow-xl">
    {children}
  </div>
)

export default Tooltip