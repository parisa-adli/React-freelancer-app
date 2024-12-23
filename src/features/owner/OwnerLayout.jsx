import { GoHomeFill } from "react-icons/go";
import AppLayout from "../../ui/AppLayout";
import CustomNavLink from "../../ui/CustomNavLink";
import Sidebar from "../../ui/Sidebar";
import { IoIosApps } from "react-icons/io";

function OwnerLayout() {
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
      </Sidebar>
    </AppLayout>
  );
}
export default OwnerLayout;