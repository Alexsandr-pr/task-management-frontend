import { Outlet, useLocation, useParams } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import useMediaQuery from "@/hooks/useMediaQuery";


const Layout = () => {

    const {pathname} = useLocation();
    const queryMobile = useMediaQuery('(max-width:767.98px)');
    const queryTablet = useMediaQuery('(max-width:1024px)');
    
    return (
        <div className={`flex  w-full bg-[#FAFAFA] dark:bg-dark-100`}>
            <div className="hidden md:flex  md:w-[8vw] min-w-[80px] xl:w-[16vw] 2xl:w-[20vw]">
                <Sidebar/>
            </div>
            <main className="main h-[100%] xl:w-[84vw] 2xl:w-[80vw]">
                {
                    pathname === "/" && queryMobile && <Header />
                }
                {
                    pathname !== "/" && (!pathname.startsWith(`/message/`) || !queryTablet) &&
                    <div className="md:p-8 md:border-b md:border-solid md:border-b-main dark:border-none md:bg-white dark:bg-dark-100">
                        <Header />
                    </div>
                }
                
                <Outlet/>
                
            </main>
        </div>
    )
}

export default Layout