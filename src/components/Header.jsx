import profile from "@/assets/profil.png"


import { Notification } from "./Icons";
import MobileNav from "./MobileNav";
import useMediaQuery from "@/hooks/useMediaQuery";


const Header = () => {
    const user = {
        name: "Alex",
        surname: "Pierierodov"
    }

    const query = useMediaQuery('(max-width:767.98px)');

    return (
        <header className='bg-white md:bg-inherit border-b border-solid border-main md:border-none px-6 py-8 md:p-0 flex flex-col-reverse md:flex-row justify-between md:items-center gap-6'>
            
            {
                !query && <div className="flex justify-start flex-col items-start">
                    <h1 className="title mb-2">Hi, {user.name} {user.surname}</h1>
                    <p className='text'>Let's finish your task today!</p>
                </div>
            }
                
            <div className="flex items-center justify-between md:justify-end gap-6">
                {
                    query && <MobileNav/>
                }
                


                <div className="flex items-center gap-4 md:gap-6">
                    <button className="rounded-full w-11 h-11 md:w-[52px] md:h-[52px] border border-solid border-main flex justify-center items-center">
                        <Notification/>
                    </button>
                    <button>
                        <img className="w-11 h-11 md:w-[52px] md:h-[52px]" src={profile} alt="" />
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header