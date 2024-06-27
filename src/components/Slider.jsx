


import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Task from "./Task"
import Mentor from "./Mentor"


const Slider = ({title, type}) => {
    return (
            <Carousel >
                <div className="flex justify-between gap-5 items-center mb-5">
                    <h2 className="text-xl xl:text-2xl ">{title}</h2>
                    <div className="flex gap-2.5">
                        <CarouselPrevious className="relative">
                            
                        </CarouselPrevious>
                        <CarouselNext className="relative"/>
                    </div>
                </div>
                
                    {
                        type === "task" && 
                        <CarouselContent  >
                            <CarouselItem className={"basis-full sm:basis-1/2 pl-5 xl:pl-8"}>
                            <Task clazz="gap-4 p-4 xl:p-6 bg-white rounded-[10px]"/>
                            </CarouselItem>
                            <CarouselItem className={"basis-full sm:basis-1/2 pl-5 xl:pl-8"}>
                            <Task clazz="gap-4 p-4 xl:p-6 bg-white rounded-[10px]"/>
                            </CarouselItem>
                            <CarouselItem className={"basis-full sm:basis-1/2 pl-5 xl:pl-8"}>
                            <Task clazz="gap-4 p-4 xl:p-6 bg-white rounded-[10px]"/>
                            </CarouselItem>
                            <CarouselItem className={"basis-full sm:basis-1/2 pl-5 xl:pl-8"}>
                            <Task clazz="gap-4 p-4 xl:p-6 bg-white rounded-[10px]"/>
                            </CarouselItem>
                        </CarouselContent>
                    }
                    {
                        type === "mentors" && 
                        <CarouselContent >
                            <Mentor />
                            <Mentor/>
                            <Mentor />
                            <Mentor/>
                            <Mentor />
                            <Mentor/>
                            <Mentor />
                            <Mentor/>
                        </CarouselContent>
                    }
                
                
                
            </Carousel>
       
    )
}

export default Slider