import Avatar from "./Avatar";
import Card from "./Card";
import { useState } from "react";
import Link from "next/link";
import OutsideClickHandler from "react-outside-click-handler";
import NavigationItem from "./NavigationItem";

export default function PostCard() {
  const [ dropdown, setDropdown ] = useState( false );
  const dropdownList = [
    {
      to: "#",
      title: true ? "Save this" : "Unsave this",
      icon: true ? "bookmark" : "bookmark-line",
      handler: () => {
        alert("Saving this post ...");
      },
    },
    {
      to: "#",
      title: "Turn notifications",
      icon: "bell-alert",
      handler: undefined,
    },
    {
      to: "#",
      title: "Hide post",
      icon: "x-mark",
      handler: undefined,
    },
    {
      to: "#",
      title: "Delete",
      icon: "trash-can",
      handler: undefined,
    },
    {
      to: "#",
      title: "Report",
      icon: "exclamation-triangle",
      handler: undefined,
    },
  ];
  return (
    <Card>
      {/* Auther Info */}
      <div className="flex gap-3">
        <div>
          <Link href={"/profile"}>
            <span className="cursor-pointer">
              <Avatar url="https://api.lorem.space/image/face?w=50&h=50&hash=6yb0hv3h" />
            </span>
          </Link>
        </div>
        <div className="grow">
          <p>
            <Link href={"/profile/1"}>
              <span className="mr-1 font-semibold cursor-pointer hover:underline">
                yaroofie
              </span>
            </Link>
            shared a post
          </p>
          <p className="text-gray-500 text-sm">2 hours ago</p>
        </div>
        <div className="relative">
          <OutsideClickHandler
            onOutsideClick={() => {
              if (dropdown) setDropdown(false);
            }}
          >
            <button
              className="text-gray-400"
              onClick={() => {
                setDropdown(!dropdown);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
            </button>
            {dropdown && (
              <div className="absolute -right-6 bg-white shadow-md shadow-gray-300 p-3 rounded-sm border border-gray-100 w-52">
                {dropdownList.map((item) => (
                  <NavigationItem
                    to={item.to}
                    title={item.title}
                    icon={item.icon}
                    handler={item.handler}
                    key={item.title}
                  />
                ))}
              </div>
            )}
          </OutsideClickHandler>
        </div>
      </div>
      {/* Content */}
      <div>
        <p className="my-3 text-sm">
          Nulla laboris labore nisi id consectetur culpa sit adipisicing ea aute
          aliquip consequat. Duis officia ad qui reprehenderit sunt sunt in.
        </p>
        <div className="flex gap-4">
          <div className="">
            <img
              src="https://api.lorem.space/image/movie?w=1000&h=500&hash=wogogwkk"
              className="rounded-md"
              alt=""
            />
          </div>
        </div>
      </div>
      {/* Options */}
      <div className="mt-5 flex gap-8">
        <button className="flex gap-2 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={"w-6 h-6 fill-red-500"}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
          12
        </button>
        <button className="flex gap-2 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
            />
          </svg>
          35
        </button>
        <button className="flex gap-2 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
            />
          </svg>
          4
        </button>
      </div>
      {/* Comments */}
      <div className="flex mt-4 gap-3">
        <div>
          <Avatar url="https://api.lorem.space/image/face?w=50&h=50&hash=6yb0hv3h" />
        </div>
        <div className="border grow rounded-full relative">
          <form>
            <input
              className="block w-full p-3 px-4 overflow-hidden h-12 rounded-full"
              placeholder="Leave a comment"
            />
          </form>
          <button className="absolute top-3 right-3 text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </Card>
  );
}
