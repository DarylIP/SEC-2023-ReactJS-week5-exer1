function MyBlackButton(props: any) {
  return (
    <button className="p-2 hover:bg-slate-700 rounded-lg bg-black text-white">
      {props.text}
    </button>
  );
}

export default MyBlackButton;
