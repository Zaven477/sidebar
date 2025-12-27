import { FiMenu } from "react-icons/fi";
import type { THeaderProps } from "./types";

export const Header = ({ setIsOpen }: THeaderProps) => {

  const showSideBar = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header className="h-15 bg-[#00BFFF] flex items-center pl-5 relative">
      <FiMenu
        size={30}
        color="white"
        className="cursor-pointer"
        onClick={showSideBar}
      />
    </header>
  );
};
