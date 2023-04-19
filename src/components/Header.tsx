import MyButton from "./MyButton";

function Header(props: any) {
  return (
    <div className="flex justify-between items-center mx-[180px] h-20">
      <h1 className="text-lg font-bold p-4">Kerja-IT.com</h1>
      <div className="space-x-1">
        <MyButton text="🏹Talents" />
        <MyButton text="📣Post Jobs" />
        <MyButton text="💌Get Job Alerts" />
        <MyButton text="☁️Login" />
        <MyButton text="✨Register" />
      </div>
    </div>
  );
}
export default Header;
