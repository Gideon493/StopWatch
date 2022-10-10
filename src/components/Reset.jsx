const Reset = ({ onReset }) => {
  return (
    <div>
      <button
        onClick={onReset}
        className="bg-white text-red-500 outline-2 outline outline-rose-500 rounded-md px-10 py-2 hover:bg-rose-500 hover:text-white
            duration-700"
      >
        Reset
      </button>
    </div>
  );
};

export default Reset;
