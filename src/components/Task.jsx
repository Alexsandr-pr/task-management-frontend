import React from 'react'
import image from "@/assets/task-image.jpg";
import { Slider } from "@/components/ui/slider"
import { TimeCircle } from './Icons';
import photo from "@/assets/photo-5-task.png"
import Skeleton from './Skeleton';
import TitleBlock from './block/TitleBlock';
import { useSelector } from "react-redux"

const Task = ({clazz}) => {
    const {loading} = useSelector(store => store.mentor);
    return (
        <article className={`flex flex-col ${clazz}`}>
            <Skeleton cls={"w-full h-auto aspect-[16/6] bg-skelet-300"} loading={loading}>
                <img className='w-full h-full rounded' src={image} alt="" />
            </Skeleton>
            <TitleBlock title={"Creating Mobile App Design"} text={"UI UX Design"} loading={loading}/>
            
            <div className="">
                <div className="flex items-center justify-between gap-5 mb-3">
                    <Skeleton cls={"w-20 h-5 bg-skelet-300"} loading={loading}>
                        <p className='text-base font-medium dark:text-white text-left'>Progress</p>
                    </Skeleton>
                    <Skeleton cls={"w-10 h-5 bg-skelet-300"} loading={loading}>
                        <div className='text-right text-primary-500 dark:text-info-200 text-base'>75%</div>
                    </Skeleton>
                </div>
                <Skeleton cls={"w-full h-2 bg-skelet-200"} loading={loading}>
                    <Slider defaultValue={[75]} max={100} step={1} />
                </Skeleton>
            </div>
            <div className="flex items-center gap-4 justify-between">
                <div className="flex items-center gap-2">
                    <Skeleton cls={"w-5 h-5 bg-skelet-200"} loading={loading}>
                        <TimeCircle/>
                    </Skeleton>
                    <Skeleton cls={"w-20 h-5 bg-skelet-300"} loading={loading}>
                        <span className='inline-flex font-medium '>3 Days Left</span>
                    </Skeleton>
                    
                </div>
                <div className="flex items-center">
                    <Skeleton cls={"w-20 h-5 bg-skelet-300"} loading={loading}>
                        <img src={photo} alt="" />
                        <img className='ml-[-8px] ' src={photo} alt="" /> 
                        <img className='ml-[-8px]' src={photo} alt="" />
                        <img className='ml-[-8px]' src={photo} alt="" />
                        <img className='ml-[-8px]' src={photo} alt="" />
                    </Skeleton>
                    
                </div>
            </div>
        </article>
    )
}

export default Task