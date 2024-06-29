import Calendar from "@/components/Calendar";

import DashboardState from "@/components/DashboardState";
import Header from "@/components/Header";
import { PointsIcon } from "@/components/Icons";
import Slider from "@/components/Slider";
import { useLocation } from "react-router-dom";
import Task from "@/components/Task";
import { Button } from "@/components/ui/button";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useDispatch, useSelector } from "react-redux";
import { setLoadingMentors } from "@/store/reducers/mentorReducer";
import { useEffect } from "react";
import Skeleton from "@/components/Skeleton";


const data = [
    {
        text: "Understanding the tools in Figma"
    },
    {
        text: "Understand the basics of making designs"
    },
    {
        text: "Design a mobile application with figma "
    }
]






const Overview = () => {
    const {pathname} = useLocation();
    const query = useMediaQuery('(max-width:767.98px)');
    const {loading} = useSelector(store => store.mentor);
    const dispatch = useDispatch();

    useEffect(() => {
        const timer = setTimeout(() => {
            dispatch(setLoadingMentors(false));
        }, 300)
    }, [])

    return (
        <div className="flex flex-col xl:flex-row">
            <div className="flex flex-col xl:w-[70%] bg-[#FCFCFC] md:bg-[#FAFAFA]  2xl:w-[63%] gap-8 p-5  2xl:p-8">
                {
                    pathname  === "/" && !query && <Header/>
                }
                <DashboardState/>
                <Slider itemclasses={"basis-full sm:basis-1/2 xl:basis-full  2xl:basis-1/2  2xl:pl-8"} type={"mentors"} title={"Monthly Mentors"}/>
                <Slider itemclasses={"basis-full sm:basis-1/2 pl-5 xl:pl-8"} type={"task"} title={"Upcoming Task"}/>
            </div>
            <div className="bg-main xl:w-[30%] 2xl:w-[36%] p-5  2xl:p-8 flex flex-col gap-10 items-center">
                <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-full">
                    <Calendar/>
                </div>
                <div className="w-full   p-4 xl:p-6 bg-white rounded-[10px]">
                    <div className="flex items-center justify-between gap-5 mb-5">
                        <h3 className="text-sm font-semibold">Task Today</h3>
                        <button>
                            <PointsIcon/>
                        </button>
                    </div>
                    <div className="flex flex-col sm:flex-row xl:flex-col  gap-8 ">
                        <div className="pb-8 sm:pb-0 xl:pb-8  xl:border-b w-full sm:w-1/2 xl:w-full border-b border-b-main border-solid sm:border-none xl:border-b-main xl:border-solid">
                            
                            <div className="">
                                <Task clazz={"gap-5"}/>
                            </div>
                        </div>

                        <div className=" w-full sm:w-1/2  flex flex-col xl:w-full pt-8 sm:pt-0 xl:pt-8" >
                            <div className="flex items-center justify-between  gap-5 mb-5">
                                <p>Detail Task</p>
                                <Skeleton cls={"w-20 h-5 bg-skelet-300"} loading={loading}>
                                    <span className="text-xs text-second-400 font-medium">UI / UX Designer</span>
                                </Skeleton>   
                            </div>
                            <ul className="flex basis-full flex-col mb-14 sm:mb-0 xl:mb-14 gap-5">
                                    {
                                        data.map(({text}, i) => {
                                            return (
                                                <Skeleton cls={"w-full h-8 bg-skelet-300"} loading={loading}>
                                                    <li key={i} className="flex items-center gap-3 ">
                                                        <span className="w-9 h-9 flex items-center justify-center text-sm  rounded bg-main">{i + 1}</span>
                                                        <p className="text-sm font-medium">{text}</p>
                                                    </li>
                                                </Skeleton>   
                                            )
                                        })
                                    }
                                
                                
                                
                            </ul>
                            <Button className="w-full">
                                Go To Detail
                            </Button>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        
    )
}

export default Overview