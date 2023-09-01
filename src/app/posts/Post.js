import { FaArrowRight } from "react-icons/fa";

export default function Post({ username = '', post = null }) {
  const date = post ? new Date(post.createdAt) : null
  let renderDate

  if (date) {
    renderDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  }

  return (
    <section className="mx-auto w-full md:w-2/3 flex flex-col items-center px-3">
      <div className="flex flex-col shadow my-4">
        <a href="/" className="hover:opacity-75">
          <img alt={post.description} src={post.photo} />
        </a>
        <section className="bg-white flex flex-col justify-start p-6">
          <a
            href="/"
            className="text-cyan-500 text-sm font-bold uppercase pb-4"
          >
            {post.category}
          </a>
          <a href="/" className="text-3xl font-bold hover:text-gray-700 pb-4">
            {post.title}
          </a>
          <p className="text-sm pb-3">
            Posted by{" "}
            <a href="/" className="font-semibold hover:text-gray-800">
              {username}
            </a>
            , <i>{renderDate}</i>
          </p>
          <a href="/" className="pb-6">
            {post.content}...
          </a>
          <a href="/" className="uppercase text-cyan-800 hover:text-cyan-900">
            Continue Reading <FaArrowRight className="inline-block" />
          </a>
        </section>
      </div>
    </section>
  );
}
