import DarkModeToggle from "./DarkModeToggle";
import Logout from "../features/authentication/Logout";
import UserAvatar from "../features/authentication/UserAvatar";

function HeaderMenu() {
  return (
    <ul className="flex items-center gap-x-4">
      <UserAvatar />
      <li className="flex">
        <DarkModeToggle />
      </li>
      <li className="flex hover:text-rose-500">
        <Logout />
      </li>
    </ul>
  );
}
export default HeaderMenu;
