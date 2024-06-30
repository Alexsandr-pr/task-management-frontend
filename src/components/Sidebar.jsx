
import logo from "@/assets/book-square.svg"
import { Link, NavLink, useLocation } from "react-router-dom"
import { publicRoutes } from "../route"
import { MessageIcon } from "./Icons";

const Sidebar = () => {
    const {pathname} = useLocation();
    return (
        <div className='h-full  min-w-full p-5 xl:p-8 bg-white'>
            <Link to="/" className="flex gap-3 mb-16 text-[32px] items-center justify-center font-semibold leading-normal xl:justify-start text-second-500">
                <img src={logo} alt="Logo" />
                <span className=" hidden xl:block">DNX</span>
            </Link>
            <nav >
                <ul className="flex flex-col gap-6">
                    {
                        publicRoutes.map((item) => {
                            const {path, name} = item;
                            return (
                                <li key={name} className="">
                                    <Link to={path} className={`
                                        ${pathname.split('/').slice(0, 2).join('/') === path.split('/').slice(0, 2).join('/') ? "active" : null}
                                        flex gap-3 group nav-link items-center justify-center xl:justify-start py-2.5 px-5
                                    `}>
                                        <div className="">
                                            <item.icon/>
                                        </div>
                                        <div className="text-sm hidden xl:block text-second-300 nav-text font-semibold leading-normal">
                                            {name}
                                        </div>
                                    </Link>
                                </li>
                            )
                        })
                    }
                    <li className="">
                        <Link to={"/message"}  className={`
                                        ${pathname.split('/').slice(0, 2).join('/') === "/message" ? "active" : null}
                                        flex gap-3 group nav-link items-center justify-center xl:justify-start py-2.5 px-5
                                    `}>
                            <div className="">
                                <MessageIcon/>
                            </div>
                            <div className="text-sm hidden xl:block text-second-300 nav-text font-semibold leading-normal">
                                Message
                            </div>
                        </Link>
                    </li>
                    <li className="">
                        <NavLink to="task/1" className="flex gap-3 group nav-link items-center justify-center xl:justify-start py-2.5 px-5">
                            <div className="text-sm hidden xl:block text-second-300 nav-text font-semibold leading-normal">
                                task 1
                            </div>
                        </NavLink>
                    </li>
                </ul>
                
            </nav>
        </div>

    )
}

export default Sidebar