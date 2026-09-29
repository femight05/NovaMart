const Button = ({ text, icon }) => {
  return (
    <button
      type="button"
      className="mt-6 inline-flex gap-1 cursor-pointer items-center justify-center rounded-xl border px-6 py-2 transition duration-300 ease-out hover:-translate-y-1 hover:border-red-500 hover:bg-red-500 hover:text-white hover:shadow-lg hover:shadow-red-500/30 active:translate-y-0 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400 focus-visible:ring-offset-2"
    >
      {text} {icon}
    </button>
  );
};

export default Button;
