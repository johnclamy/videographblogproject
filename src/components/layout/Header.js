export default function Header() {
  return (
    <header className="w-full container mx-auto">
      <div className="flex flex-col items-center pt-6 pb-12">
        <a
          className="font-bold capitalize text-gray-800 hover:text-gray-700 text-5xl"
          href="/"
        >
          crypto blog
        </a>
        <p className="mt-1 text-lg text-gray-600">Lorem Ipsum Dolor Sit Amet</p>
      </div>
    </header>
  );
}
