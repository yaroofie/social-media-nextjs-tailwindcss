import Layout from "../components/Layout";
import Card from "../components/Card";
import Avatar from "../components/Avatar";
import ProfileTabs from "../components/ProfileTabs";
import ProfileContent from "../components/ProfileContent";
import { useRouter } from "next/router";

export default function Profile ()
{
  const profile = {
    id: 1,
    name: "Jhon Doe",
    place: "Stockholm ?"
  };
  const router = useRouter();
  const tab = router?.query?.tab?.[ 0 ] || 'posts';
  return (
    <Layout>
      <Card noPadding={true}>
        <div className="relative overflow-hidden rounded-md">
          <div className="h-36 overflow-hidden flex justify-center items-center">
            <img src="https://api.lorem.space/image/house?w=1000&h=500&hash=v1pfsus5" alt="user cover" />
          </div>
          <div className="absolute top-24 left-4 z-20">
            <Avatar url="https://api.lorem.space/image/face?w=150&h=150&hash=bv9hpbpl" size="lg" />
          </div>
          <div className="p-4 pt-0 md:pt-4 pb-0">
            <div className="ml-24 md:ml-40 flex justify-between">
              <div className="">
                <h1 className="text-3xl font-bold">
                  {profile?.name}
                </h1>
                <div className="text-gray-500 leading-4">
                  {profile?.place || 'Internet'}
                </div>
              </div>
              <div className="grow">
                <div className="text-right">
                  <button
                    className="inline-flex mx-1 gap-1 bg-white rounded-md shadow-sm shadow-gray-500 py-1 px-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                    </svg>
                    Edit profile
                  </button>
                </div>
              </div>
            </div>
            <ProfileTabs activeTab={tab} userId={profile.id} />
          </div>
        </div>
      </Card>
      <ProfileContent activeTab={tab} userId={profile.id} />
    </Layout>
  );
}
