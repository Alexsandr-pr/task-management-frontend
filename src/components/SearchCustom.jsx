import React from 'react'
import { Input } from './ui/input'

import { useLocation } from 'react-router-dom'
import Icon from './block/Icon'
import IconId from '@/utils/icon-consts'


const SearchCustom = () => {

    const {pathname} = useLocation();

    const placeholder = {
        "/task": "Search Task",
        "/task/1": "Search Task",
        '/settings': "",
        '/message': "",
        "/mentors": "Search Mentors"
    }

    return (
        <div className='flex justify-between items-center gap-5'>
            <div className="w-full md:w-2/3 xl:w-2/5">
                <Input className={"dark:bg-dark-200  dark:text-white"} type="search" placeholder={placeholder[pathname]}/>
            </div>
            <div className="flex gap-6">
                <button className='text-xs flex md:hidden gap-3 items-center w-[52px] font-semibold py-3.5 h-[52px] px-4 rounded dark:text-white bg-white dark:bg-dark-200 border border-solid dark:border-second-300 border-main'>
                    <Icon className='text-second-300' id={IconId.settingFilter}/> 
                    
                </button>
                <button className='text-xs hidden md:flex gap-3 items-center  font-semibold py-3.5 h-[52px] px-7 rounded dark:text-white bg-white dark:bg-dark-200 border border-solid dark:border-second-300 border-main'>
                    <Icon className='text-second-300' id={IconId.categoryFilter}/> 
                    <span className='hidden md:block'>Category</span>
                </button>
                <button className='text-xs hidden md:flex gap-3 items-center font-semibold py-3.5 h-[52px] px-7 rounded dark:text-white bg-white dark:bg-dark-200 border border-solid  dark:border-second-300 border-main'>
                    <Icon className='text-second-300' id={IconId.sort}/> 
                    <span className='hidden md:block'>Sort By : Deadline</span>
                </button>
            </div>
        </div>
    )
}

export default SearchCustom