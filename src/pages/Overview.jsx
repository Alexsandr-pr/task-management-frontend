import Calendar from "@/components/Calendar";

import DashboardState from "@/components/DashboardState";
import Header from "@/components/Header";
import Slider from "@/components/Slider";
import { useLocation } from "react-router-dom";







const Overview = () => {
    const {pathname} = useLocation();
    return (
        <div className="flex">
            <div className="flex flex-col w-[63%] gap-8  p-8">
                {
                    pathname === "/" && <Header/>
                }
                <DashboardState/>
                <Slider type={"mentors"} title={"Monthly Mentors"}/>
                <Slider type={"task"} title={"Upcoming Task"}/>
            </div>
            <div className="bg-[#F5F5F7] w-[36%]  p-8 flex flex-col items-center">
                <Calendar/>
            </div>
        </div>
        
    )
}

export default Overview