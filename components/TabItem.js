import Link from "next/link";

import DocumentTextIcon from "./icons/DocumentTextIcon";
import InformationCircleIcon from "./icons/InformationCircleIcon";
import UserGroupIcon from "./icons/UserGroupIcon";
import PhotoIcon from "./icons/PhotoIcon";

export default function TabItem({to, title, icon, handler, isActive}) {
  const tabClasses =
    "flex gap-1 px-4 py-1 items-center border-b-4 border-b-white";
  const activeTabClasses =
    "flex gap-1 px-4 py-1 items-center border-socialBlue border-b-4 text-socialBlue font-bold";

  let iconComponent = undefined;
  switch (icon) {
    case "document-text":
      iconComponent = DocumentTextIcon();
      break;
    case "information-circle":
      iconComponent = InformationCircleIcon();
      break;
    case "user-group":
      iconComponent = UserGroupIcon();
      break;
    case "photo":
      iconComponent = PhotoIcon();
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
      className={isActive ? activeTabClasses : tabClasses}
    >
      {iconComponent}
      <span className="hidden sm:block">{title}</span>
    </Link>
  );
}
