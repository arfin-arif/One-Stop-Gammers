import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { FaGamepad } from "react-icons/fa";
// import { AiOutlineShoppingCart,AiFillCloseCircle } from "react-icons/ai";
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
// import { useRef } from "react";

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
    link: '/',
  },
  {
    id: 2,
    title: "TRENDING",
    icon: MdTrendingUp,
    link: '/#trending',
  },
  {
    id: 3,
    title: "GAMES",
    icon: FaGamepad,
    link: '/games',
  },
  {
    id: 4,
    title: "TOPUP",
    icon: MdCollections,
    link: '/Top-up',
  },
  {
    id: 5,
    title: "CATEGORY",
    icon: MdOutlineCategory,
    link: '/category',
  },
  {
    id: 6,
    title: "Dashboard",
    icon: MdPhotoAlbum,
    link: '/dashboard',
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

  // const toggleCart=()=>{
  //       if(ref.current.classList.contains('translate-x-full')){
  //         ref.current.classList.remove("translate-x-full")
  //         ref.current.classList.add('translate-x-0')
  //       }
  // }

  // const ref=useRef()

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
            <HeaderItem key={item.id} title={item.title} url={item.link} Icon={item.icon} />
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

        {/* <div onClick={toggleCart} className="cart  right-0 top-0">
          <AiOutlineShoppingCart className="text-xl md:text-2xl"/>
        </div>
        <div ref={ref} className="sideCart top-0 right-0 bg-slate-400 p-10 transform transition-transform translate-x-full">
             <h2 className="font-bold text-xl">Cart</h2>
             <span onClick={toggleCart} className="relative -top-16 -right-14 cursor-pointer"><AiFillCloseCircle/></span>
           <ol>
            <li>

            </li>
           </ol>
        </div> */}

       
      </header>
      <div>{data?.user && data?.user?.name}</div>
    </div>
  );
};

export default NavHeader;
