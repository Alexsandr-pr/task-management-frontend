import React, { useEffect, useState } from 'react'
import { publicRoutes } from '@/route';
import { Link, NavLink, useLocation } from 'react-router-dom';
import {useAutoAnimate} from "@formkit/auto-animate/react"
import logo from "@/assets/book-square.svg"
import { MessageIcon } from './Icons';
const MobileNav = () => {

    const [state, setState] = useState(false);
    const [block] = useAutoAnimate();

    const {pathname} = useLocation();

    useEffect(( ) => {
        setState(false)
    }, [pathname])

    return (
        <div ref={block} className="">
            <button onClick={() => setState(prev => !prev)} className="rounded-full w-11 h-11 md:w-[52px] md:h-[52px] border border-solid border-main flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M3 7H21" stroke="#8E92BC" stroke-width="1.5" stroke-linecap="round"/>
                        <path d="M3 12H21" stroke="#8E92BC" stroke-width="1.5" stroke-linecap="round"/>
                        <path d="M3 17H21" stroke="#8E92BC" stroke-width="1.5" stroke-linecap="round"/>
                    </svg>
            </button>

            {
                state && <div className={`fixed  w-full h-full right-0 top-0 z-50 flex justify-end bg-stone-300 transition-all duration-300`}>
                <div className="p-8 w-[80%] h-full bg-white sm:w-96">
                    <div className="pb-8 flex items-center justify-between gap-4 border-b border-solid border-main">
                        <Link to="/" className="flex gap-3 text-lg items-center  font-semibold leading-normal xl:justify-start text-second-500">
                            <img width={30} height={30} src={logo} alt="Logo" />
                            <span className="">DNX</span>
                        </Link>
                        <button onClick={() => setState(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M20 12H4M4 12L10 18M4 12L10 6" stroke="#8E92BC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>
                    </div>
                    <nav className="pt-8">
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
                            <li className="">
                                <NavLink to={"/message"} className="flex gap-3 group nav-link items-center justify-start  py-2.5 px-5">
                                    <div className="">
                                        <MessageIcon/>
                                    </div>
                                    <div className="text-sm text-second-300 nav-text font-semibold leading-normal">
                                        Message
                                    </div>
                                </NavLink>
                            </li>
                        </ul>
                        
                    </nav>
                </div>
            </div>
            }
        </div>
        
    )
}

export default MobileNav