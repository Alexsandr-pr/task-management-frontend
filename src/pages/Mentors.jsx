import Mentor from '@/components/Mentor'
import Slider from '@/components/Slider'
import { setLoadingMentors } from '@/store/reducers/mentorReducer';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

const Mentors = () => {
    
    const dispatch = useDispatch();

    useEffect(() => {
        const timer = setTimeout(() => {
            dispatch(setLoadingMentors(false));
        }, 300)
    }, [])
    return (
        <div className='w-full  flex flex-col p-8 gap-8 bg-[#FAFAFA] dark:bg-dark-200 border-l border-solid border-l-main'>
            <Slider itemclasses={"basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 pr-5 xl:pr-8 pl-0"} type={"mentors"} title={"Recent Mentors"}/>
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