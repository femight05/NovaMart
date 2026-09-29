const ContactPage = () => {
  return (
    <section className="contact-page-enter flex flex-col items-center justify-center gap-5 px-4 py-5">
      <div className="flex flex-col items-center gap-2">
        <h2 className="font-bold text-2xl md:text-3xl italic tracking-wide">
          Contact Us
        </h2>
        <p>Have questions or need assistance? Reach out to us!</p>
      </div>
      <div className="flex flex-col md:flex-row md:justify-between gap-8 md:gap-40">
        <div className="flex flex-col gap-5 rounded-md border border-slate-200 border-l-4 border-l-red-600 bg-slate-50 p-5 md:w-72 md:self-start">
          <div className="flex flex-col gap-1">
            <h3 className="text-lg font-semibold text-slate-900 md:text-xl">
              Get in Touch
            </h3>
            <p className="text-sm leading-6 text-slate-600">
              We’re here to help with your order or any other questions.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <span className="text-xs font-semibold uppercase text-slate-500">
                Email
              </span>
              <a
                href="mailto:novamart@company.com"
                className="wrap-break-word text-sm font-medium text-slate-800 transition hover:text-red-700 focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
              >
                novamart@company.com
              </a>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-xs font-semibold uppercase text-slate-500">
                Phone
              </span>
              <a
                href="tel:+11234567890"
                className="text-sm font-medium text-slate-800 transition hover:text-red-700 focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
              >
                +1 (123) 456-7890
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="font-semibold text-xl md:text-2xl">
            Send us a Message
          </h2>
          <form
            action="mailto:novamart@company.com"
            method="post"
            enctype="text/plain"
            className="flex w-full flex-col gap-2.5 md:min-w-80"
          >
            <label
              htmlFor="name"
              className="text-sm font-medium text-slate-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full rounded-md border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
              required
            />
            <label
              htmlFor="email"
              className="text-sm font-medium text-slate-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full rounded-md border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
              required
            />
            <label
              htmlFor="message"
              className="text-sm font-medium text-slate-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="min-h-36 w-full resize-none rounded-md border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
              required
            ></textarea>
            <button
              type="submit"
              className="mt-1 inline-flex min-h-11 items-center justify-center rounded-md bg-red-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-red-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 active:bg-red-800"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      <section className="mt-4 w-full max-w-4xl border-t border-slate-200 pt-6 text-center">
        <h2 className="text-xl font-semibold text-slate-900 md:text-2xl">
          Frequently Asked Questions
        </h2>
        <p className="mt-2 text-sm leading-6 text-slate-600 md:text-base">
          Find quick answers on our{" "}
          <a
            href="/faq"
            className="font-semibold text-red-600 underline decoration-red-300 underline-offset-4 transition hover:text-red-700 hover:decoration-red-600 focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
          >
            FAQ page
          </a>
          .
        </p>
      </section>
    </section>
  );
};

export default ContactPage;
