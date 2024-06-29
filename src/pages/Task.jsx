
import Slider from '@/components/Slider'
import { setLoadingMentors } from '@/store/reducers/mentorReducer';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

const Task = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const timer = setTimeout(() => {
            dispatch(setLoadingMentors(false));
        }, 300)
    }, [])
    return (
        <div className='w-full  flex flex-col p-8 gap-8 bg-[#FAFAFA] border-l border-solid border-l-main'>
            <Slider itemclasses={"basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 pl-5 xl:pl-8"} type={"task"} title={"Time Limit"}/>
            <Slider itemclasses={"basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 pl-5 xl:pl-8"} type={"task"} title={"New Task"}/>
        </div>
    )
}

export default Task