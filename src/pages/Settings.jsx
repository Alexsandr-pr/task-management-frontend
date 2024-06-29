
import GeneralSettings from "@/components/settings/GeneralSettings";
import SettingsProfile from "@/components/settings/SettingsProfile";
import SettingsSecurity from "@/components/settings/SettingsSecurity";
import { useEffect, useState } from "react"
import {  Link, Route, Routes, useNavigate } from "react-router-dom";

const data = [
    {
        param: "general",
        text: "General"
    },
    {
        param: "notification",
        text: "Notification"
    },
    {
        param: "profile",
        text: "Profile"
    }
]


const Settings = () => {
    const [state, setState] = useState("general");
    const navigate = useNavigate();

    useEffect(() => {

        navigate("/settings/general");
    }, []);
    
    return (
        <div className='w-full  flex flex-col p-8 gap-8 bg-[#FAFAFA] border-l border-solid border-l-main'>
            <div className="p-8 rounded flex flex-col gap-8 bg-white ">
                <ul  className='w-full flex border-b gap-6 border-b-main border-solid'>
                    {
                        data.map(({text, param}) => {
                            return (
                                <li>
                                    <Link to={param} className={`
                                    pt-0 
                                    flex
                                    text-sm 
                                    font-semibold 
                                    p-3  
                                    ${param === state && "border-b-primary-500 border-b  border-solid"}
                                    `}
                                    >{text}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
                <div className="flex flex-col gap-8">
                    <Routes>
                        <Route path="general" element={<GeneralSettings/>}/>
                        <Route path="notification" element={<SettingsSecurity/>} /> 
                        <Route path="profile" element={<SettingsProfile/>}/>
                    </Routes>
                </div>

            </div>


        </div>
    )
}

export default Settings