export default function CreatePost({ username }) {
  return (
    <form className="bg-slate-400 p-2 pb-12 w-full md:w-3/5 lg:w-7/12 mx-auto">
      <h1 className="text-cyan-50 text-2xl">Create a Post</h1>
      <hr />
      <p className="font-thin text-sm text-black mt-1 mb-6">
        <i className="font-medium text-xs text-gray-700">author:</i> {username}
      </p>
      <div className="flex gap-4 items-center">
        <label className="text-lg font-normal text-gray-900" htmlFor="title">
          Title:
        </label>
        <input
          type="text"
          name="title"
          id="title"
          required
          className="block w-full rounded-md border-0 pv-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
        />
      </div>
      <div className="flex pt-2 gap-4 items-center">
        <label className="text-lg font-normal text-gray-900" htmlFor="post">
          Post:
        </label>
        <textarea
          type="text"
          name="post"
          id="post"
          rows={3}
          required
          className="block w-full rounded-md border-0 pv-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
        />
      </div>
    </form>
  );
}
