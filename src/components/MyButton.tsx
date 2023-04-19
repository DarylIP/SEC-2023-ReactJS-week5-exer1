function MyButton(props: any) {
  return (
    <button className="p-2 hover:bg-slate-200 rounded-lg">{props.text}</button>
  );
}

export default MyButton;
