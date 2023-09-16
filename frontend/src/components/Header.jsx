import { LuMenu, LuUserCircle } from "react-icons/lu";

export default function Header() {
  return (
    <header>
      <div className="text-[#22668D] flex justify-between text-3xl">
        <LuUserCircle className="" />
        <LuMenu />
      </div>
    </header>
  );
}
