const FAQItem = ({ question, answer, icon }) => {
  return (
    <article className="group rounded-2xl border border-slate-200 bg-white/85 p-4 shadow-[0_10px_30px_rgba(15,23,42,0.06)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-[0_18px_40px_rgba(239,68,68,0.12)] md:p-5">
      <div className="flex items-start gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-50 text-xl text-red-600 ring-1 ring-red-100 shadow-sm">
          {icon}
        </div>

        <div className="min-w-0 flex-1">
          <h3 className="text-base font-semibold leading-6 text-slate-900 md:text-lg">
            {question}
          </h3>
          <p className="mt-3 text-sm leading-7 text-slate-600 md:text-[15px]">
            {answer}
          </p>
        </div>
      </div>
    </article>
  );
};

export default FAQItem;
