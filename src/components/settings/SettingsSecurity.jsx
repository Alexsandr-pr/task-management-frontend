import React from 'react'
import { Switch } from "@/components/ui/switch"
import { Button } from '../ui/button'


const SettingsSecurity = () => {
    return (
        <>  
            <div className="flex flex-col gap-5">
                <div className="flex items-center gap-5">
                    <Switch checked/>
                    <span className='text-sm '> Message</span>
                </div>
                <div className="flex items-center gap-5">
                    <Switch />
                    <span className='text-sm '> Task Update</span>
                </div>
                <div className="flex items-center gap-5">
                    <Switch checked/>
                    <span className='text-sm '> Task Deadline</span>
                </div>
                <div className="flex items-center gap-5">
                    <Switch />
                    <span className='text-sm '> Mentor Help</span>
                </div>
            </div>
            <div className="w-full sm:w-[216px]">
                <Button className="w-full">
                    Save Changes
                </Button>
            </div>
        </>
    )
}

export default SettingsSecurity