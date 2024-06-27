


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
                    <h2 className="text-2xl ">{title}</h2>
                    <div className="flex gap-2.5">
                        <CarouselPrevious className="relative">
                            
                        </CarouselPrevious>
                        <CarouselNext className="relative"/>
                    </div>
                </div>
                
                    {
                        type === "task" && 
                        <CarouselContent  >
                            <Task />
                            <Task />
                            <Task />
                            <Task />
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