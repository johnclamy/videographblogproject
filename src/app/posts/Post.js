import { FaArrowRight } from "react-icons/fa";

export default function Post() {
  return (
    <section className="w-full md:w-2/3 flex flex-col items-center px-3">
      <div className="flex flex-col shadow my-4">
        <a href="/" className="hover:opacity-75">
          <img
            alt="Role set leader structure"
            src="https://api.slingacademy.com/public/sample-blog-posts/1.png"
          />
        </a>
        <section className="bg-white flex flex-col justify-start p-6">
          <a
            href="/"
            className="text-cyan-500"
            text-sm
            font-bold
            uppercase
            pb-4
          >
            love
          </a>
          <a href="/" class="text-3xl font-bold hover:text-gray-700 pb-4">
            Defense the travel.
          </a>
          <p href="/" class="text-sm pb-3">
            By{" "}
            <a href="/" class="font-semibold hover:text-gray-800">
              John Doe
            </a>
            , <i>April 25th, 2020</i>
          </p>
          <a href="/" className="pb-6">
            <p>
              Money form live strategy consider finally. Must time lose trade
              force will usually.
            </p>
          </a>
          <a href="/" class="uppercase text-cyan-800 hover:text-cyan-900">
            Continue Reading <FaArrowRight className="inline-block" />
          </a>
        </section>
      </div>
    </section>
  );
}
