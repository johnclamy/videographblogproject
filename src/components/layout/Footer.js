import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="w-full border-t bg-white pb-12">
      <section className="flex justify-center items-center text-lg no-underline text-cyan-900 mt-5 mb-3">
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

      <section className="w-full container mx-auto flex flex-col items-center">
        <div className="flex flex-col md:flex-row text-center md:text-left md:justify-between pb-2">
          <a href="/" className="uppercase px-3">
            About Us
          </a>
          <a href="/" className="uppercase px-3">
            Privacy Policy
          </a>
          <a href="/" className="uppercase px-3">
            Terms & Conditions
          </a>
          <a href="/" className="uppercase px-3">
            Contact Us
          </a>
        </div>
        <div className="uppercase pb-6">&copy; myblog.com</div>
      </section>
    </footer>
  );
}
