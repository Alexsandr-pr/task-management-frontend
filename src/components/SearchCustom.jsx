import React from 'react'
import { Input } from './ui/input'
import { CategoryFilter, FilterMobile, Sort } from './Icons'
import { useLocation } from 'react-router-dom'

const SearchCustom = () => {

    const {pathname} = useLocation();

    const placeholder = {
        "/task": "Search Task",
        '/settings': "",
        '/message': "",
        "/mentors": "Search Mentors"
    }
    return (
        <div className='flex justify-between items-center gap-5'>
            <div className="w-full md:w-2/3 xl:w-2/5">
                <Input type="search" placeholder={placeholder[pathname]}/>
            </div>
            <div className="flex gap-6">
                <button className='text-xs flex md:hidden gap-3 items-center w-[52px] font-semibold py-3.5 h-[52px] px-4 rounded bg-white border border-solid border-main'>
                    <FilterMobile/>
                    
                </button>
                <button className='text-xs hidden md:flex gap-3 items-center  font-semibold py-3.5 h-[52px] px-7 rounded bg-white border border-solid border-main'>
                    <CategoryFilter/>
                    <span className='hidden md:block'>Category</span>
                </button>
                <button className='text-xs hidden md:flex gap-3 items-center font-semibold py-3.5 h-[52px] px-7 rounded bg-white border border-solid border-main'>
                    <Sort/>
                    <span className='hidden md:block'>Sort By : Deadline</span>
                </button>
            </div>
        </div>
    )
}

export default SearchCustom