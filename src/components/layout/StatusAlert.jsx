const StatusAlert = ({ children }) => {
  return (
    <p className="p-5 rounded-lg text-center text-2xl font-bold bg-teal-300 max-w-screen-lg">
      {children}
    </p>
  );
}

export default StatusAlert