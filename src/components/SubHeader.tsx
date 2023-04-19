function SubHeader() {
  return (
    <div
      className="bg-black flex flex-col justify-center items-center pb-[20px]
      "
    >
      <p className="font-bold text-white my-2">
        👻 Tired of being ghosted by employers? Apply for jobs through referrals
        instead with CariKabel.com
      </p>
      <div>
        <button className="bg-white p-2 rounded-lg hover:bg-slate-300 mx-2 font-thin">
          Go to CariKabel.com 🤝
        </button>

        <button className="bg-black border-gray-500 border-[1px] p-2 rounded-lg text-slate-500 font-semibold ">
          No, thank you.
        </button>
      </div>
    </div>
  );
}

export default SubHeader;
