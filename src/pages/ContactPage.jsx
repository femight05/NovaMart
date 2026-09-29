const ContactPage = () => {
  return (
    <section>
      <div>
        <h2>Contact Us</h2>
        <p>Have questions or need assistance? Reach out to us!</p>
      </div>
      <div>
        <div>
          <h3>Get in Touch</h3>
          <p>Email: info@company.com</p>
          <p>Phone: +1 (123) 456-7890</p>
        </div>
        <div>
          <h2>Send us a Message</h2>
          <form>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
