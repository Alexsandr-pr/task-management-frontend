import detailTask from "@/assets/detail-task.png"
import { HourIcon, StudentIcon, TickCircleIcon, UploadIcon } from "@/components/Icons"
import Label from "@/components/Label"
import { Button } from "@/components/ui/button"


const data = [
    {
        text: "Understanding the tools in Figma"
    },
    {
        text: "Understand the basics of making designs"
    },
    {
        text: "Designing a mobile application using figma"
    },
    {
        text: "Presenting the design flow"
    }
]

const DetailTask = () => {
    return (
        <div className=' dark:bg-dark-200 flex flex-col lg:flex-row p-6 md:p-8 bg-[#FAFAFA] gap-8 border-l border-solid border-l-main'>
            <div className="w-full lg:w-2/3 bg-white rounded flex flex-col">
                <img className="w-full h-auto " src={detailTask} alt="" />
                <div className="p-4 md:p-6 flex flex-col gap-6">
                    <div className="flex flex-col gap-4">
                        <h1 className="text-3xl font-semibold test-second-500 ">Creating Awesome Mobile Apps</h1>
                        <p className="text-sm text-second-400 font-medium">
                            UI UX Design . Apps Design
                        </p>
                        <div className="flex gap-5 items-center flex-wrap">
                            <Label text={"200 Students Involved"}>
                                <StudentIcon/>
                            </Label>
                            <Label text={"1 Hour"}>
                                <HourIcon/>
                            </Label>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 md:gap-4">
                        <h2 className="text-xl xl:text-2xl">Description</h2>
                        <p className="text-sm md:text-sm text-normal">Follow the video tutorial above. Understand how to use each tool in the Figma application. Also learn how to make a good and correct design. Starting from spacing, typography, content, and many other design hierarchies. Then try to make it yourself with your imagination and inspiration.</p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h2 className="text-xl xl:text-2xl ">Essence of Assessment</h2>
                        <ul className="flex flex-col gap-5"> 
                            {
                                data.map((item, i) => {
                                    return (
                                        <li key={i} className="flex items-center gap-2.5 text-xs md:text-sm font-normal">
                                            <TickCircleIcon/>
                                            {item.text}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
            <div className="w-full lg:w-1/3 p-6 bg-white rounded flex flex-col gap-6">
                <p className="text-sm ">Assigned Assignments</p>
                <div className="">
                    <h3 className="text-xl xl:text-2xl mb-3">Creating Awesome Mobile Apps</h3>
                    <p className="text-sm text-second-400 font-medium">
                        UI UX Design . Apps Design
                    </p>
                </div>
                <div className="">
                    <h4 className="text-lg md:text-xl font-semibold mb-4 md:mb-5">Detail Student</h4>
                    <ul className="flex flex-col gap-5">
                        <li className="flex items-center justify-between gap-4">
                            <p className="text-sm text-second-400 font-medium text-left">Student's name</p>
                            <p className="text-sm text-second-500 font-medium text-right">Dennis Nzioki</p>
                        </li>
                        <li className="flex items-center justify-between gap-4">
                            <p className="text-sm text-second-400 font-medium text-left">Student Class</p>
                            <p className="text-sm text-second-500 font-medium text-right">MIPA 2</p>
                        </li>
                        <li className="flex items-center justify-between gap-4">
                            <p className="text-sm text-second-400 font-medium text-left">Student Number</p>
                            <p className="text-sm text-second-500 font-medium text-right">10</p>
                        </li>
                    </ul>
                </div>
                <div className="">
                    <h4 className="text-lg md:text-xl font-semibold mb-4 md:mb-5">File Task</h4>
                    <ul className="flex flex-col gap-5">
                        <li className="flex items-center justify-between gap-4">
                            <p className="text-sm text-second-400 font-medium text-left">Last Modified</p>
                            <p className="text-sm text-second-500 font-medium text-right">1 July 2022</p>
                        </li>
                    </ul>
                </div>
                <div className=" mb-4 md:mb-9">
                    <p className="text-xs text-second-400 text-normal mb-2 md:mb-4">File submissions</p>
                    <div className="h-40 w-full flex rounded items-center justify-center mb-2 md:mb-3 border-dashed border border-primary-500">
                        <UploadIcon/>
                    </div>
                    <p className="text-xs text-second-400 text-normal">*drag or browser from device</p>
                </div>
                <Button>
                    Submit
                </Button>
            </div>

        </div>
    )
}

export default DetailTask