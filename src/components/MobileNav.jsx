import React from 'react'


import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { publicRoutes } from '@/route';
import { NavLink } from 'react-router-dom';

const MobileNav = () => {
    return (
        <Sheet>
            <SheetTrigger>
                <button className="rounded-full w-11 h-11 md:w-[52px] md:h-[52px] border border-solid border-main flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M3 7H21" stroke="#8E92BC" stroke-width="1.5" stroke-linecap="round"/>
                        <path d="M3 12H21" stroke="#8E92BC" stroke-width="1.5" stroke-linecap="round"/>
                        <path d="M3 17H21" stroke="#8E92BC" stroke-width="1.5" stroke-linecap="round"/>
                    </svg>
                </button>
            </SheetTrigger>
            <SheetContent className="bg-white">
                <nav className="mt-10">
                    <ul className="flex flex-col gap-6">
                    {
                        publicRoutes.map((item) => {
                            return (
                                <li className="">
                                    <NavLink to={item.path} className="flex gap-3 group nav-link items-center justify-start  py-2.5 px-5">
                                        <div className="">
                                            <item.icon/>
                                        </div>
                                        <div className="text-sm text-second-300 nav-text font-semibold leading-normal">
                                            {item.name}
                                        </div>
                                    </NavLink>
                                </li>
                            )
                        })
                    }
                    </ul>
                    
                </nav>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNav