import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { FaGamepad } from "react-icons/fa";
import {
  MdCollections,
  MdHome,
  MdLogin,
  MdLogout,
  MdOutlineCategory,
  MdPhotoAlbum,
  MdTrendingUp,
} from "react-icons/md";
import HeaderItem from "./HeaderItem";

type Props = {};

let itemsHeader: {
  id: number;
  title: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}[];

itemsHeader = [
  {
    id: 1,
    title: "HOME",
    icon: MdHome,
  },
  {
    id: 2,
    title: "TRENDING",
    icon: MdTrendingUp,
  },
  {
    id: 3,
    title: "GAMES",
    icon: FaGamepad,
  },
  {
    id: 4,
    title: "TOPUP",
    icon: MdCollections,
  },
  {
    id: 5,
    title: "CATEGORY",
    icon: MdOutlineCategory,
  },
  {
    id: 6,
    title: "GALLERY",
    icon: MdPhotoAlbum,
  },
];

const NavHeader = (props: Props) => {
  const { data } = useSession();
  const { push, asPath } = useRouter();

  console.log(asPath);

  let handleSignOut: () => Promise<void>;

  handleSignOut = async () => {
    const data = await signOut({ redirect: false, callbackUrl: "/some" });
    push(data.url);
  };

  return (
    <div className="bg-gray-100 p-5">
      <header className="flex flex-col md:flex-row  items-center justify-between mx-20">
        <Image
          className="object-contain animate-spin ring-4 ring-[#1670D1] rounded-full "
          src="https://i.ibb.co/PtwJMsv/Purple-Minimalist-Game-Zone-Logo.png"
          width={80}
          height={80}
          alt=""
        />
        <div className="flex md:flex-grow-1 mt-5 justify-evenly md:max-w-2xl ">
          {itemsHeader?.map((item) => (
            <HeaderItem key={item.id} title={item.title} Icon={item.icon} />
          ))}
        </div>
        <div>
          {data?.user ? (
            <button
              onClick={handleSignOut}
              type="button"
              className="text-[#1670D1]"
            >
              <MdLogout />
            </button>
          ) : (
            <button
              onClick={() => push(`/auth/signin?callbackUrl=${asPath}`)}
              // onClick={() => signIn()}
              type="button"
              className="text-[#1670D1]"
            >
              <MdLogin />
            </button>
          )}
        </div>
      </header>
      <div>{data?.user && data?.user?.name}</div>
    </div>
  );
};

export default NavHeader;
