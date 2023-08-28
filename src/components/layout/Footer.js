import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="w-full border-t bg-white pb-12">
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

      <section className="w-full container mx-auto flex flex-col items-center">
        <div className="flex flex-col md:flex-row text-center md:text-left md:justify-between py-6">
          <a href="/" class="uppercase px-3">
            About Us
          </a>
          <a href="/" class="uppercase px-3">
            Privacy Policy
          </a>
          <a href="/" class="uppercase px-3">
            Terms & Conditions
          </a>
          <a href="/" class="uppercase px-3">
            Contact Us
          </a>
        </div>
        <div className="uppercase pb-6">&copy; myblog.com</div>
      </section>
    </footer>
  );
}
