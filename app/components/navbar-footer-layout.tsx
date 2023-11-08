import { ReactNode } from "react";
import NavBarLayout from "./navbarlayout";
import FooterLayout from "./footerlayout";

interface LayoutProps {
  children: ReactNode;
}

const NavBarFooterLayoutHOC: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <NavBarLayout />
      {children}
      <FooterLayout />
    </div>
  );
};

export default NavBarFooterLayoutHOC;
