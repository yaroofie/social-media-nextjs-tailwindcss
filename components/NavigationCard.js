import { useRouter } from "next/router";
import Card from "./Card";
import NavigationItem from "./NavigationItem";

export default function NavigationCard() {
  const router = useRouter();
  const { pathname } = router;
  const routes = [
    {
      to: "/",
      title: "Home",
      icon: "home",
    },
    {
      to: "/friends",
      title: "Friends",
      icon: "user-group",
    },
    {
      to: "/saved",
      title: "Saved posts",
      icon: "bookmark",
    },
    {
      to: "/notifications",
      title: "Notifications",
      icon: "bell",
    },
    {
      to: "/logout",
      title: "Logout",
      icon: "logout",
    },
  ];
  return (
    <Card noPadding={true}>
      <div className="px-4 py-2 flex justify-between md:block shadow-md shadow-gray-500 md:shadow-none">
        <h2 className="text-gray-400 mb-3 hidden md:block">Navigation</h2>
        {routes.map((route) => (
          <NavigationItem
            to={route.to}
            key={route.to}
            title={route.title}
            icon={route.icon}
            isActive={pathname == route.to}
          />
        ))}
      </div>
    </Card>
  );
}
