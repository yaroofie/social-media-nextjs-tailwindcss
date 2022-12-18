import Layout from "../components/Layout";
import Card from "../components/Card";
import Link from "next/link";
import GoogleIcon from "../components/icons/GoogleIcon";
import TwitterIcon from "../components/icons/TwitterIcon";
import GithubIcon from "../components/icons/GithubIcon";

export default function LoginPage ()
{
  const classes =
    "flex w-full gap-4 items-center justify-center p-4 border-b border-b-gray-100 hover:bg-socialBlue hover:text-white hover:border-b-socialBlue hover:rounded-md hover:shadow-md hover:shadow-gray-300 transition-all hover:scale-110";
  return (
    <Layout hideNavigation={true}>
      <div className="h-screen flex items-center">
        <div className="max-w-xs mx-auto grow -mt-24">
          <h1 className="text-6xl mb-4 text-gray-300 text-center">Login</h1>
          <Card noPadding={true}>
            <div className="rounded-md">
              <button className={classes}>
                <GoogleIcon />
                Login with Google
              </button>
              <Link href="/" className={classes}>
                <TwitterIcon />
                Login with Twitter
              </Link>
              <Link href="/" className={classes}>
                <GithubIcon />
                Login with Github
              </Link>
            </div>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
