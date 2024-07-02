
import GeneralSettings from "@/components/settings/GeneralSettings";
import SettingsProfile from "@/components/settings/SettingsProfile";
import SettingsSecurity from "@/components/settings/SettingsSecurity";
import { useEffect } from "react"
import {  Link,  Route, Routes, useLocation, useNavigate } from "react-router-dom";

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
    const {pathname} = useLocation();
    const navigate = useNavigate();
    

    useEffect(() => {
        navigate("/settings/general");
    }, []);
    
    return (
        <div className='w-full h-[100vh] flex flex-col dark:border-none p-6 md:p-8 gap-8 dark:bg-dark-200 bg-[#FAFAFA] border-l border-solid border-l-main'>
            <div className="p-5 md:p-8 h-[100%] rounded flex flex-col gap-8 bg-white dark:bg-dark-100">
                <ul  className='w-full flex border-b gap-6 dark:border-none  border-b-main border-solid'>
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
                                    ${pathname.split('/')[2] === param && "border-b border-solid border-b-primary-500"}
                                    
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