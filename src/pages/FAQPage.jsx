import faqData from "../data/faq.js";
import FAQItem from "../components/FAQItem";

const FAQPage = () => {
  return (
    <section className="px-4 py-8 md:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 text-center md:mb-12">
          <span className="inline-flex items-center rounded-full border border-red-200 bg-red-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-red-700">
            Support Center
          </span>
          <h1 className="mt-4 text-3xl font-black tracking-tight text-slate-900 md:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-600 md:text-base">
            Everything you need to know about shopping, delivery, returns, and
            customer support — all in one place.
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((item) => (
            <FAQItem
              key={item.id}
              question={item.question}
              answer={item.answer}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQPage;
