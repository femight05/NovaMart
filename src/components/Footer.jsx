import { FaInstagram, FaFacebook, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer-enter bg-gray-800 py-4 flex flex-col items-center justify-center space-y-4">
      <h1 className="footer-brand text-white text-2xl tracking-wide font-bold">
        NovaMart
      </h1>
      <p className="footer-tagline text-gray-400 italic tracking-wide">
        Your one-stop shop for all your needs!
      </p>
      <div className="flex flex-col justify-evenly gap-4">
        <div className="flex flex-col md:flex-row justify-evenly gap-8 md:gap-16">
          <h2 className="text-white font-semibold">Quick Links</h2>
          <a href="/" className="footer-link text-gray-400 hover:text-blue-300">
            Home
          </a>
          <a
            href="/products"
            className="footer-link text-gray-400 hover:text-blue-300"
          >
            Products
          </a>
          <a
            href="/contact"
            className="footer-link text-gray-400 hover:text-blue-300"
          >
            About
          </a>
        </div>
        <div className="flex flex-col md:flex-row justify-evenly mt-2 md:mt-0 gap-8 md:gap-14">
          <h2 className="text-white font-semibold">Customer Service</h2>
          <a
            href="/contact"
            className="footer-link text-gray-400 hover:text-blue-300"
          >
            Contact Us
          </a>
          <a
            href="/support"
            className="footer-link text-gray-400 hover:text-blue-300"
          >
            Support
          </a>
          <a
            href="/returns"
            className="footer-link text-gray-400 hover:text-blue-300"
          >
            Returns
          </a>
        </div>
      </div>
      <div className="flex flex-col items-center gap-3">
        <h2 className="text-white md:text-xl tracking-widest">Follow Us</h2>
        <div className="flex justify-center gap-4">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-link"
          >
            <FaInstagram className="footer-social-icon text-pink-600 w-6 h-6 hover:text-blue-900" />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-link"
          >
            <FaFacebook className="footer-social-icon text-blue-600 w-6 h-6 hover:text-blue-900" />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-link"
          >
            <FaXTwitter className="footer-social-icon text-black w-6 h-6 hover:text-blue-900" />
          </a>
        </div>
      </div>
      <hr className="border-0 border-t border-gray-400 my-4 w-full" />
      <div className="footer-copyright container mx-auto text-center">
        <p className="text-gray-600 text-sm">
          &copy; {new Date().getFullYear()} NovaMart. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
