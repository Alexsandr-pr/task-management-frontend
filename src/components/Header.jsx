import profile from "@/assets/profil.png"

import MobileNav from "./MobileNav";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useLocation } from "react-router-dom";
import SearchCustom from "./SearchCustom";
import ThemeToggle from "./ThemeToggle";
import Icon from "./block/Icon";
import IconId from "@/utils/icon-consts";


const Header = () => {
    const {pathname} = useLocation()
    let firstPathName = pathname.split('/').slice(0, 2).join('/');
    
    const user = {
        name: "Alex",
        surname: "Pierierodov"
    }
    const titles = {
        "/task": "Explore Task",
        "/task/1": "Detail Task",
        '/settings': "Settings",
        '/message': "Message",
        "/mentors": "Explore Mentors"
    }


    const query = useMediaQuery('(max-width:767.98px)');

    return (
        <header className='bg-white md:bg-inherit border-b border-solid border-main dark:border-none md:border-none px-6 py-8 gap-6 flex flex-col md:p-0  dark:bg-dark-100'>
            
            <div className="flex flex-col-reverse md:flex-row justify-between md:items-center gap-6">
            {
                    !query && <div className="flex justify-start flex-col items-start">
                        <h1 className="title mb-2">
                            
                            {
                                pathname === "/" ? <>
                                    Hi, {user.name} {user.surname}
                                </> 
                                :
                                <>
                                    {
                                        titles[firstPathName]
                                    }
                                </>
                            }
                            
                            </h1>
                        {
                            pathname === "/" && <p className='text'>Let's finish your task today!</p>
                        }
                    </div>
                }
                    
                <div className="flex items-center justify-between md:justify-end gap-6">
                    {
                        query && <MobileNav/>
                    }
                    


                    <div className="flex items-center gap-4 md:gap-6">
                        <div className="">
                            <ThemeToggle/>
                        </div>
                        <button className="rounded-full w-11 h-11 md:w-[52px] md:h-[52px] border border-solid dark:border-second-300 border-main dark:bg-dark-100  flex justify-center items-center">
                            <Icon  className="text-second-300" id={IconId.notification}/>
                        </button>
                        <button>
                            <img className="w-11 h-11 md:w-[52px] md:h-[52px]" src={profile} alt="" />
                        </button>
                    </div>
                </div>
            </div>
            {
                firstPathName !== "/" && firstPathName !== "/settings"  &&  firstPathName !== "/message" && <SearchCustom/>
            }
        </header>
    )
}

export default Header