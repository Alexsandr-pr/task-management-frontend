import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";


const Layout = () => {
    const {pathname} = useLocation();
    return (
        <div className="flex h-full w-full bg-[#FAFAFA]">
            <div className="w-[20vw]">
                <Sidebar/>
            </div>
            <main className="w-[80vw]">
                {
                    pathname !== "/" && <Header/>
                }
                
                
                    <Outlet/>
                
            </main>
        </div>
    )
}

export default Layout