
import Slider from '@/components/Slider'
import SliderFull from '@/components/slider/SliderFull';
import { setLoadingMentors } from '@/store/reducers/mentorReducer';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';

const Task = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const timer = setTimeout(() => {
            dispatch(setLoadingMentors(false));
        }, 300)
    }, [])
    return (
        <div className='w-full p-6  md:p-8 gap-8 bg-[#FAFAFA] border-l border-solid dark:bg-dark-200 dark:border-none border-l-main'>
            <div className="mb-8">
                <SliderFull  title={"Time Limit"} type={"task"}/>
            </div>
            <SliderFull title={"New Task"} type={"task"}/>
        </div>
    )
}

export default Task