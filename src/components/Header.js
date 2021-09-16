import React from 'react'
import Image from "next/image"
import { MenuIcon, SearchIcon, ShoppingCartIcon } from "@heroicons/react/outline"
import { signIn, signOut, useSession } from "next-auth/client"
import { useRouter } from "next/router";
import { useSelector } from 'react-redux';
import { selectItems } from '../slices/basketSlice';
import bliss from "../assets/bliss.png"
import { Button } from '@material-ui/core'

const Header = () => {

    const [session] = useSession();
    const router = useRouter();
    const items = useSelector(selectItems);

    return (
        <header className="sticky top-0 z-50">
            {/* Top nav */}
            <div className="flex items-center bg-shades p-1 flex-grow py-2 ">
                <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
                    <Image
                        onClick={() => router.push("/")}
                        src={bliss}
                        width={150}
                        height={40}
                        objectFit="contain"
                        className="cursor-pointer"
                    />
                </div>

                {/* Search */}
                <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-[#303F9F] hover:bg-[#303F8F]">
                    <input className="p-2  h-full w-6 flex-grow outline-none flex-shrink rounded-l-md px-4" type="text" placeholder="Search Items..." />
                    <SearchIcon className="h-12 p-4 " />
                </div>

                {/* Right */}
                <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
                    <div onClick={!session ? signIn : signOut} >
                        {!session ? (
                            <Button variant="contained" color="primary" >Login</Button>
                        ) : (
                            <Button variant="contained" color="primary">Logout</Button>
                        )
                        }

                    </div>

                    <div onClick={() => router.push("/checkout")} className="relative link flex items-center">
                        <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-[#303F9F] text-center rounded-full text-white  font-bold">{items.length}</span>
                        <ShoppingCartIcon className="h-10" />
                        <p className="hidden md:inline font-extrabold md:text-sm mt-2">Basket</p>
                    </div>
                </div>

            </div>

        </header>
    )
}

export default Header
