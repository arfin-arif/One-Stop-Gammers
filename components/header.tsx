
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaSun, FaMoon } from "react-icons/fa";
import Link from "next/link";
import { Button, Divider, useColorMode } from "@chakra-ui/react";
import { ClassNames } from "@emotion/react";
const Header = () => {
    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <header className={colorMode === 'dark' ? 'bg-gray-800 sticky top-0 z-50' : 'bg-gray-50 sticky top-0 z-50'} >
            <div className="xl:container xl:mx-auto  flex flex-col items-center sm:flex-row sm:justify-between text-center h-14">
                <div className="md:flex-none w-96 order-2 sm:order-1 flex justify-center py-4  lg:m-0 mt-2 sm:py-0">
                    <input className="input-text p-2 rounded-xl" type="text" placeholder="Search" />
                </div>
                <div className="shrink w-80 sm:order-2">
                    <Link href={'/'} className="font-bold uppercase text-3xl">
                        One Stop Gamer
                    </Link>
                </div>
                <div className="w-96 order-3 gap-3 flex justify-center">
                    <Link href={''} onClick={toggleColorMode}>

                        {colorMode === 'dark' ?
                            <FaSun /> : <FaMoon />
                        }
                    </Link>
                    <div className=" hidden lg:block">
                        <div className=" flex gap-6">

                            <Link href={'/'}>  <FaFacebookF color="#888888" /></Link>
                            <Link href={'/'}>  <FaInstagram color="#888888" /></Link>
                            <Link href={'/'}>  <FaLinkedinIn color="#888888" /></Link>
                        </div>

                    </div>
                </div>
            </div>
            <Divider />
        </header >
    );
};

export default Header;