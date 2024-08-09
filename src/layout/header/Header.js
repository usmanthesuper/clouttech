import { stickyNav } from "@/src/utils";
import { useEffect } from "react";
import DefaultHeader from "./DefaultHeader";

const Header = ({ header, singleMenu, dark }) => {
  useEffect(() => {
    stickyNav();
  }, []);

  return <DefaultHeader singleMenu={singleMenu} dark={dark} />;
};
export default Header;
