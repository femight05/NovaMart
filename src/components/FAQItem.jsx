const FAQItem = ({ question, answer, icon }) => {
  return (
    <div>
      <div className="flex flex-row justify-between items-center p-4">
        <h3>{question}</h3>
        <h1>{icon}</h1>
      </div>
      <p>{answer}</p>
    </div>
  );
};

export default FAQItem;
