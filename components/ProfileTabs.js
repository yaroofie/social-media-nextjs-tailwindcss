import TabItem from "./TabItem";

export default function ProfileTabs ( { activeTab, userId } )
{
  const items = [
    {
      to: "/profile/1/posts",
      title: "Posts",
      key: "posts",
      icon: "document-text",
      handler: undefined,
    },
    {
      to: "/profile/1/about",
      title: "About",
      key: "about",
      icon: "information-circle",
      handler: undefined,
    },
    {
      to: "/profile/1/friends",
      title: "Friends",
      key: "friends",
      icon: "user-group",
      handler: undefined,
    },
    {
      to: "/profile/1/photos",
      title: "Photos",
      key: "photos",
      icon: "photo",
      handler: undefined,
    },
  ];
  return (
    <div className="mt-4 md:mt-10 flex gap-0">
      {items.map( ( item ) => (
        <TabItem
          to={item.to}
          title={item.title}
          icon={item.icon}
          handler={item.handler}
          isActive={activeTab == item.key}
          key={`tab-${ item.key }`}
        />
      ) )}
    </div>
  );
}
