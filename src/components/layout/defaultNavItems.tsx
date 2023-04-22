import { HomeIcon, UserGroupIcon } from "@heroicons/react/24/outline";
import { NavItem } from "./Sidebar";

export const defaultNavItems: NavItem[] = [
  {
    label: "Dashboard",
    href: "/",
    icon: <HomeIcon className="w-6 h-6" />,
  },
  {
    label: "Contact",
    href: "/contact",
    icon: <UserGroupIcon className="w-6 h-6" />,
  },
];
