import TodoStats from "../app/TodoStats";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white text-center border-t-4 border-teal-100 fixed inset-x-0 bottom-0 p-4 md:container md:mx-auto">
      <div className="max-w-3xl mx-auto flex justify-evenly">
        <TodoStats />
        <button className="bg-red-500 rounded px-2 capitalize">delete all</button>
      </div>
    </footer>
  );
}

export default Footer