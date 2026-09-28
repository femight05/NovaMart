const Footer = () => {
  return (
    <footer className="bg-gray-100 py-4">
      <h1>NovaMart</h1>
      <p>Your one-stop shop for all your needs!</p>
      <div>
        <div className="flex flex-col md:flex-row justify-evenly gap-10">
          <h2>Quick Links</h2>
          <a href="/" className="text-gray-600 hover:text-blue-900">
            Home
          </a>
          <a href="/products" className="text-gray-600 hover:text-blue-900">
            Products
          </a>
          <a href="/contact" className="text-gray-600 hover:text-blue-900">
            About
          </a>
        </div>
        <div className="flex flex-col md:flex-row justify-evenly gap-10">
          <h2>Customer Service</h2>
          <a href="/contact" className="text-gray-600 hover:text-blue-900">
            Contact Us
          </a>
          <a href="/support" className="text-gray-600 hover:text-blue-900">
            Support
          </a>
          <a href="/returns" className="text-gray-600 hover:text-blue-900">
            Returns
          </a>
        </div>
      </div>
      <div className="container mx-auto text-center">
        <p className="text-gray-600 text-sm">
          &copy; {new Date().getFullYear()} NovaMart. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
