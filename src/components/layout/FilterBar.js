import { useState } from "react"
import { BsFillArrowDownSquareFill, BsFillArrowUpSquareFill } from "react-icons/bs";

export default function FilterBar() {
  const {open, setOpen} = useState(false)

  return (
    <section className="w-full mt-4 py-4 border-t border-b bg-gray-100">
      <div className="block sm:hidden">
        <a
          href="/"
          className="md:hidden text-base font-bold uppercase text-center flex justify-center items-center"
        >
          Blockchain Technology{" "}
          {open ? (
            <BsFillArrowDownSquareFill
              className="ml-2"
              onClick={() => setOpen(false)}
            />
          ) : (
            <BsFillArrowUpSquareFill
              className="ml-2"
              onClick={() => setOpen(true)}
            />
          )}
        </a>
      </div>
      <nav
        className={`${
          open ? "block" : "hidden"
        } w-full flex-grow sm:flex sm:items-center sm:w-auto`}
      >
        <div className="w-full container mx-auto flex flex-col sm:flex-row items-center justify-center text-sm font-bold uppercase mt-0 py-2">
          <a href="/" className="hover:bg-gray-400 rounded py-2 px-4 mx-2">
            Public
          </a>
          <a href="/" className="hover:bg-gray-400 rounded py-2 px-4 mx-2">
            Private
          </a>
          <a href="/" className="hover:bg-gray-400 rounded py-2 px-4 mx-2">
            Hybrid
          </a>
          <a href="/" className="hover:bg-gray-400 rounded py-2 px-4 mx-2">
            Consortium
          </a>
        </div>
      </nav>
    </section>
  );
}