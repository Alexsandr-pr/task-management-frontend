
import logo from "@/assets/book-square.svg"
import { Link, NavLink } from "react-router-dom"
import { publicRoutes } from "../route"

const Sidebar = () => {
    return (
        <div className='h-full min-w-full p-5 xl:p-8 bg-white'>
            <Link to="/" className="flex gap-3 mb-16 text-[32px] items-center justify-center font-semibold leading-normal xl:justify-start text-second-500">
                <img src={logo} alt="Logo" />
                <span className=" hidden xl:block">DNX</span>
            </Link>
            <nav >
                <ul className="flex flex-col gap-6">
                    {
                        publicRoutes.map((item) => {
                            return (
                                <li className="">
                                    <NavLink to={item.path} className="flex gap-3 group nav-link items-center justify-center xl:justify-start py-2.5 px-5">
                                        <div className="">
                                            <item.icon/>
                                        </div>
                                        <div className="text-sm hidden xl:block text-second-300 nav-text font-semibold leading-normal">
                                            {item.name}
                                        </div>
                                    </NavLink>
                                </li>
                            )
                        })
                    }
                </ul>
                
            </nav>
        </div>

    )
}

export default Sidebar