const ContactPage = () => {
  return (
    <section className="px-4 py-5 flex flex-col gap-4">
      <div>
        <h2>Contact Us</h2>
        <p>Have questions or need assistance? Reach out to us!</p>
      </div>
      <div className="flex flex-col md:flex-row md:justify-between">
        <div>
          <h3>Get in Touch</h3>
          <p>Email: novamart@company.com</p>
          <p>Phone: +1 (123) 456-7890</p>
        </div>
        <div>
          <h2>Send us a Message</h2>
          <form
            action="mailto:novamart@company.com"
            method="post"
            enctype="text/plain"
          >
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
        <div>
          <h2>FAQ</h2>
          <p>
            Have Questions? Check our{" "}
            <a href="/faq">Frequently Asked Questions</a> page.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
