import { useState, useCallback } from "react";
import CustomBtn from "./buttons/CustomBtn";
import HamBtn from "./buttons/HamBtn";

const Navbar = () => {

  const [menu, setMenu] = useState(false);
  console.log(menu);

  const toggleMenu = useCallback(() => {
    setMenu((prev) => !prev);
  }, []);

  return (
    <div className="w-full min-h-20 bg-white font-sora flex items-center justify-between px-8">
      <h1 className="text-xl text-primary-600">IT Campaign</h1>

      <div className="hidden md:flex gap-6">
        <CustomBtn title={"Home"} redirect={"/"} />
        <CustomBtn title={"About"} redirect={"/about"} />
        <CustomBtn title={"Blog"} redirect={"/blog"} />
        <CustomBtn title={"Solution"} redirect={"/solution"} />
      </div>

      <div className="flex md:hidden z-30" onClick={toggleMenu}>
        <HamBtn isActive={menu} />
      </div>

      <div
        className={`${
          menu ? "opacity-100" : "opacity-0"
        } absolute md:hidden right-0 top-0 bg-primary-50 shadow-xl w-96 h-96 z-20 rounded-l-full rounded-br-full transition-opacity duration-900 ease-in-out`}
      >
        <div className="flex flex-col justify-center items-center w-full h-full gap-5">
        <CustomBtn title={"Home"} redirect={"/"} />
        <CustomBtn title={"About"} redirect={"/about"} />
        <CustomBtn title={"Blog"} redirect={"/blog"} />
        <CustomBtn title={"Solution"} redirect={"/solution"} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
