import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import useMediaQuery from "@/hooks/useMediaQuery";


const Layout = () => {
    const {pathname} = useLocation();
    const query = useMediaQuery('(max-width:767.98px)');

    return (
        <div className="flex h-full w-full bg-[#FAFAFA]">
            <div className="hidden md:flex md:w-[8vw] min-w-[80px] xl:w-[16vw] 2xl:w-[20vw]">
                <Sidebar/>
            </div>
            <main className="main xl:w-[84vw] 2xl:w-[80vw]">
                {
                    pathname === "/" && query && <Header/> 
                }
                {
                    pathname !== "/" && 
                    <div className="md:p-8 md:border-b md:border-solid md:border-b-main md:bg-white">
                        <Header/> 
                    </div>
                }

                
                
                    <Outlet/>
                
            </main>
        </div>
    )
}

export default Layout