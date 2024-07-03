import Mentor from '@/components/Mentor'
import SliderFull from '@/components/slider/SliderFull';
import { setLoadingMentors } from '@/store/reducers/mentorReducer';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';

const Mentors = () => {
    
    const dispatch = useDispatch();

    useEffect(() => {
        const timer = setTimeout(() => {
            dispatch(setLoadingMentors(false));
        }, 300)
    }, [])
    return (
        <div className='w-full  p-8 bg-[#FAFAFA] dark:bg-dark-200 border-l dark:border-none border-solid border-l-main'>
            
            <div className=" mb-8">
            <SliderFull  title={"Recent Mentors"} type={"mentor"}/>
            </div>
            <div className="">
                <h2 className="text-xl xl:text-2xl mb-[18px]">Mentors</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
                    <Mentor text={"Hi, I'm Anna White. I'm a professional 3D Designer at Blender company . . ."}/>
                    <Mentor text={"Hi, I'm Anna White. I'm a professional 3D Designer at Blender company . . ."}/>
                    <Mentor text={"Hi, I'm Anna White. I'm a professional 3D Designer at Blender company . . ."}/>
                    <Mentor text={"Hi, I'm Anna White. I'm a professional 3D Designer at Blender company . . ."}/>

                    <Mentor text={"Hi, I'm Anna White. I'm a professional 3D Designer at Blender company . . ."}/>
                    <Mentor text={"Hi, I'm Anna White. I'm a professional 3D Designer at Blender company . . ."}/>
                    <Mentor text={"Hi, I'm Anna White. I'm a professional 3D Designer at Blender company . . ."}/>
                    <Mentor text={"Hi, I'm Anna White. I'm a professional 3D Designer at Blender company . . ."}/>
                </div>
            </div>
        </div>
    )
}

export default Mentors