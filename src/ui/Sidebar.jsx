import { NavLink } from "react-router-dom";
import { IoIosApps } from "react-icons/io";
import { GoHomeFill } from "react-icons/go";

function Sidebar({ children }) {
  return (
    <div className="bg-secondary-0 md:row-start-1 md:row-span-2 border-l border-secondary-200 p-4">
      <ul className="flex flex-col gap-y-4">
        {children}
        {/* <li>
          <CustomNavLink to="/owner/dashboard">
            <GoHomeFill />
            <span>داشبورد</span>
          </CustomNavLink>
        </li>
        <li>
          <CustomNavLink to="/owner/projects">
            <IoIosApps />
            <span>پروژه ها</span>
          </CustomNavLink>
        </li> */}
      </ul>
    </div>
  );
}
export default Sidebar;
