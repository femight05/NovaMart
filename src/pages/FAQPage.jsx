import faqData from "../data/faq.json";
import FAQItem from "../components/FAQItem";

const FAQPage = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-8">
        Frequently Asked Questions
      </h1>
      {faqData.map((item) => (
        <FAQItem
          key={item.id}
          question={item.question}
          answer={item.answer}
          icon={item.icon}
        />
      ))}
    </div>
  );
};

export default FAQPage;
