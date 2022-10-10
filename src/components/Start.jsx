const Start = ({ onStart }) => {
  return (
    <div>
      <button
        onClick={onStart}
        className="bg-white text-red-500 outline-2 outline outline-rose-500 rounded-md ml-10 px-10 py-2 hover:bg-rose-500 hover:text-white
            duration-700"
      >
        Start
      </button>
    </div>
  );
};

export default Start;
