
import LineChart from "@/components/LineChart";
import CustomSelect from "./CustomSelect";

const DashboardState = () => {
    return (
        <div className="gap-8 flex flex-col md:flex-col">

            <div className="   p-5 bg-second-500 dark:bg-dark-100 rounded-[10px] gap-4  leading-normal justify-between  inline-flex font-semibold flex-row  text-white">
                <div className="">
                    <h2 className="text-base ">Running Task</h2>
                    <p className=" text-[32px] flex-auto leading-normal ">65</p>
                </div>
                <div className="flex gap-5 items-center">
                    <div className="w-[68px] h-[68px] relative">
                        <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72" fill="none">
                            <path opacity="0.1" fill-rule="evenodd" clip-rule="evenodd" d="M36 70C54.7777 70 70 54.7777 70 36C70 17.2223 54.7777 2 36 2C17.2223 2 2 17.2223 2 36C2 54.7777 17.2223 70 36 70Z" stroke="#546FFF" stroke-width="3"/>
                            <path d="M48.2448 67.7283C60.972 62.8133 70 50.4609 70 36C70 17.2223 54.7777 2 36 2" stroke="#546FFF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <span className="text-lg absolute top-[50%] left-[50%] transfor translate-y-[-50%] translate-x-[-50%]">45%</span>
                    </div>
                    <div className="">
                        <p className="text-xl ">100</p>
                        <p className="text-second-300 text-sm font-medium">Task</p>
                    </div>
                </div>
            </div>
                <div className="w-full ">
                    <div className="p-5 rounded inline-flex flex-col gap-5 bg-[#F5F5F7] dark:bg-dark-100 w-[100%]">
                        <div className="flex items-center justify-between gap-4">
                            <p className="text-base  ">Activity</p>
                            <CustomSelect/>
                        </div>
                        <div className="bg-white dark:bg-dark-100 rounded p-2.5 w100%">
                            <LineChart />
                        </div>
                    </div>
                </div>
        </div>  
    )
}

export default DashboardState