import { CircleUserRound, X } from "lucide-react";
import { NavItems } from "../../constant";
import Link from "next/link";

const MobileSidebar = ({
  showSidebar,
  toggleSidebar,
}: {
  showSidebar: boolean;
  toggleSidebar: () => void;
}) => {
  return (
    <>
      <div
      aria-label="overlay"
        className={`md:hidden fixed top-0 ${
          showSidebar ? "right-0" : "right-[-800px]"
        } transition-all h-full w-full z-[1000] bg-[#0000009d]`}
        onClick={toggleSidebar}
      ></div>
      <div
        className={`md:hidden fixed top-0 ${
          showSidebar ? "right-0" : "right-[-800px]"
        } transition-all h-full w-[70%] z-[10000] bg-white flex flex-col p-10 pl-5`}
      >
        <button className="ml-auto mb-5" aria-label="close" onClick={toggleSidebar}>
          <X />
        </button>
        {NavItems.map(
          (item: { name: string; url: string; active?: boolean }) => {
            return (
              <Link
                href={item?.url}
                key={item?.name}
                className={`capitalize text-xl rounded-md px-5 py-3 transition-all hover:bg-black hover:text-white ${
                  item?.active ? "text-black font-bold" : "text-[#b8b6b6]"
                }`}
              >
                {item?.name}
              </Link>
            );
          }
        )}
        <button className="mt-auto w-full flex justify-center items-center gap-3 font-bold rounded-md px-5 py-3 transition-all hover:bg-black hover:text-white">
          <CircleUserRound />
          Login
        </button>
      </div>
    </>
  );
};

export default MobileSidebar;
