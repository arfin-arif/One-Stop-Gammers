import Image from "next/image";
import console1 from "../../public/assets/ConsoleNavBarImages/console1.svg";
import console4 from "../../public/assets/ConsoleNavBarImages/console4.svg";
import logo from "../../public/assets/Images/logo.png";
import NavHeader from "./NavHeader";

interface Props {}

const ImageSrcs = [
  console1,
  console4,
  console1,
  console1,
  console1,
  console1,
  console1,
  console1,
];

// ** #6D9FB9
// className="w-6 h-6 fill-current"
const Navbar = (props: Props) => {
  return (
    <div>
      <section className="lg:block hidden">
        <div className="w-full text-white bg-emerald-500">
          <div className="container flex items-center justify-between  mx-16">
            <div className="flex justify-center items-center">
              <div className="flex items-center">
                <Image src={logo} alt="" width={100} height={100} />
                <p className="mx-3">Get The Best | Be The Best</p>
              </div>
            </div>
            {ImageSrcs?.slice(0, 8)?.map((imageSrc, index) => (
              <Image
                key={index}
                src={imageSrc}
                alt=""
                width={100}
                height={100}
                className="rounded hover:animate-pulse hover:ring-4 hover:ring-[#1670D1] transition-all duration-500 ease-in-out hover:scale-125"
              />
            ))}
          </div>
        </div>
      </section>
      <NavHeader />
    </div>
  );
};

export default Navbar;
