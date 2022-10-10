const Stop = ({ onStop }) => {
  return (
    <div>
      <button
        onClick={onStop}
        className="bg-white text-red-500 outline-2 outline outline-rose-500 rounded-md  px-10 py-2 hover:bg-rose-500 hover:text-white
            duration-700"
      >
        Stop
      </button>
    </div>
  );
};

export default Stop;
