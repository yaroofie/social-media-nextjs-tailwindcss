import NavigationCard from "./NavigationCard";
export default function Layout({ children }) {
  return (
    <div className="md:flex mt-4 max-w-4xl mx-auto gap-6 mb-24 md:mb-0">
      <div className="fixed md:static w-full bottom-0 md:w-3/12 -mb-5">
        <NavigationCard />
      </div>
      <div>{children}</div>
    </div>
  );
}
