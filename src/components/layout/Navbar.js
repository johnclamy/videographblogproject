import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";

export default function Navbar() {
  return (
    <nav className="w-full py-4 bg-cyan-900 drop-shadow-md md:drop-shadow-xl">
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between">
        <section className="flex items-center justify-between font-bold text-sm text-white uppercase no-underline">
          <a className="hover:text-slate-300 hover:no-underline px-4" href="/">
            home
          </a>
          <a className="hover:text-slate-300 hover:no-underline px-4" href="/">
            about
          </a>
        </section>
        <section className="flex items-center text-lg no-underline text-white pr-4">
          <a href="/">
            <BsFacebook />
          </a>
          <a className="pl-6" href="/">
            <BsInstagram />
          </a>
          <a className="pl-6" href="/">
            <BsTwitter />
          </a>
          <a className="pl-6" href="/">
            <BsLinkedin />
          </a>
        </section>
      </div>
    </nav>
  );
}