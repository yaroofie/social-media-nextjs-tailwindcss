import Link from "next/link";

import BellIcon from "./icons/BellIcon";
import BellAlertIcon from "./icons/BellAlertIcon";
import BookmarkIcon from "./icons/BookmarkIcon";
import BookmarkSlashIcon from "./icons/BookmarkSlashIcon";
import ExclamationTriangleIcon from "./icons/ExclamationTriangleIcon";
import UserGroupIcon from "./icons/UserGroupIcon";
import HomeIcon from "./icons/HomeIcon";
import LogoutIcon from "./icons/LogoutIcon";
import TrashCanIcon from "./icons/TrashCanIcon";
import XMarkIcon from "./icons/XMarkIcon";

export default function NavigationItem({
  to,
  title,
  icon,
  isActive,
  handler,
}) {
  const activeElementClasses =
    "text-sm md:text-md flex gap-1 md:gap-3 py-3 my-1 bg-socialBlue text-white md:-mx-7 px-6 md:px-7 rounded-md shadow-md shadow-gray-300 items-center";
  const nonActiveElementClasses =
    "text-sm md:text-md flex gap-1 md:gap-3 py-2 my-2 hover:bg-blue-500 hover:bg-opacity-20 md:-mx-4 px-6 md:px-4 rounded-md transition-all hover:scale-110 hover:shadow-md shadow-gray-300 items-center";

  let iconComponent = undefined;
  switch (icon) {
    case "bell":
      iconComponent = BellIcon();
      break;
    case "bell-alert":
      iconComponent = BellAlertIcon();
      break;
    case "bookmark":
      iconComponent = BookmarkIcon();
      break;
    case "bookmark-slash":
      iconComponent = BookmarkSlashIcon();
      break;
    case "exclamation-triangle":
      iconComponent = ExclamationTriangleIcon();
      break;
    case "user-group":
      iconComponent = UserGroupIcon();
      break;
    case "home":
      iconComponent = HomeIcon();
      break;
    case "logout":
      iconComponent = LogoutIcon();
      break;
    case "trash-can":
      iconComponent = TrashCanIcon();
      break;
    case "x-mark":
      iconComponent = XMarkIcon();
      break;
  }
  
  return (
    <Link
      href={to}
      onClick={(e) => {
        if (handler) {
          e.preventDefault();
          handler();
        }
      }}
      className={isActive ? activeElementClasses : nonActiveElementClasses}
    >
      {iconComponent}
      <span className="hidden md:block">{title}</span>
    </Link>
  );
}

function PascalCase(str) {
  let arr = str.split("-");
  let capital = arr.map(
    ( item, index ) =>
      // camelCase
      // index
      //   ? item.charAt(0).toUpperCase() + item.slice(1).toLowerCase()
      //   : item.toLowerCase()
      item.charAt(0).toUpperCase() + item.slice(1).toLowerCase()
  );
  // ^-- change here.
  let capitalString = capital.join("");

  return capitalString;
}
