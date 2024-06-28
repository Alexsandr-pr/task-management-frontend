import React from 'react'
import image from "@/assets/task-image.jpg";
import { Slider } from "@/components/ui/slider"
import { TimeCircle } from './Icons';
import photo from "@/assets/photo-5-task.png"

const Task = ({clazz}) => {
    return (
        <article className={`flex flex-col ${clazz}`}>
            <img  className='w-full h-full ' src={image} alt="" />
            <div className="flex flex-col gap-1">
                <h3 className='text-base'>Creating Mobile App Design</h3>
                <p className='text-second-400 text-xs font-medium'>UI UX Design</p>
            </div>
            <div className="">
                <div className="flex items-center justify-between gap-5 ">
                    <p className='text-base font-medium mb-3 text-left'>Progress</p>
                    <span className='text-right text-primary-500 text-base'>75%</span>
                </div>
                <Slider defaultValue={[75]} max={100} step={1} />
            </div>
            <div className="flex items-center gap-4 justify-between">
                <div className="flex items-center gap-2">
                    <TimeCircle/>
                    <span className='inline-flex font-medium '>3 Days Left</span>
                </div>
                <div className="flex items-center">
                    <img src={photo} alt="" />
                    <img className='ml-[-8px]' src={photo} alt="" /> 
                    <img className='ml-[-8px]' src={photo} alt="" />
                    <img className='ml-[-8px]' src={photo} alt="" />
                    <img className='ml-[-8px]' src={photo} alt="" />
                </div>
            </div>
        </article>
    )
}

export default Task