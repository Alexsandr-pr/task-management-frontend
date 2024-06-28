import React from 'react'
import { Input } from './ui/input'

const SearchCustom = () => {
    return (
        <div className='flex justify-between items-center gap-5'>
            <div className="w-2/5">
                <Input type="search" placeholder="Search  Mentors "/>
            </div>
            <div className="">

            </div>
        </div>
    )
}

export default SearchCustom