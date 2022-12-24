import Image from "next/image";
import { FaGamepad } from "react-icons/fa";
import {
  MdCollections,
  MdHome,
  MdLogin,
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
  {
    id: 6,
    title: "LOGIN",
    icon: MdLogin,
  },
];

const NavHeader = (props: Props) => {
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
        <div className="flex md:flex-grow-1  justify-evenly md:max-w-2xl ">
          {itemsHeader?.map((item) => (
            <HeaderItem key={item.id} title={item.title} Icon={item.icon} />
          ))}
        </div>
      </header>
    </div>
  );
};

export default NavHeader;
