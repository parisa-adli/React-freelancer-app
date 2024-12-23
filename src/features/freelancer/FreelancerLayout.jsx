import { GoHomeFill } from "react-icons/go";
import AppLayout from "../../ui/AppLayout";
import CustomNavLink from "../../ui/CustomNavLink";
import Sidebar from "../../ui/Sidebar";
import { IoIosApps } from "react-icons/io";
import { MdOutlinePostAdd } from "react-icons/md";

function FreelancerLayout() {
  return (
    <AppLayout>
      <Sidebar>
        <CustomNavLink to="dashboard">
          <GoHomeFill />
          <span>داشبورد</span>
        </CustomNavLink>

        <CustomNavLink to="projects">
          <IoIosApps />
          <span>پروژه ها</span>
        </CustomNavLink>

        <CustomNavLink to="proposals">
          <MdOutlinePostAdd />
          <span>درخواست ها</span>
        </CustomNavLink>
      </Sidebar>
    </AppLayout>
  );
}
export default FreelancerLayout;
