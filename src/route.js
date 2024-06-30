import { MessageIcon, CategoryIcon, SettingsIcon, BookIcon, UserOctagonIcon} from "@/components/Icons";
import Mentors from "@/pages/Mentors";
import Overview from "@/pages/Overview";
import Task from "@/pages/Task";
import Message from "@/pages/Message";
import Settings from "@/pages/Settings";
import { MENTORS, MESSAGE, OVERVIEW, SETTINGS, TASK } from "@/utils/consts";



export const publicRoutes = [
    {
        path: OVERVIEW,
        Component:Overview,
        icon: CategoryIcon,
        name: "Overview"
    },
    {
        path: TASK,
        Component:Task,
        icon: BookIcon,
        name:"Task"
    },
    {
        path: MENTORS,
        Component:Mentors,
        icon: UserOctagonIcon,
        name:"Mentors"
    },
    // {
    //     path: MESSAGE,
    //     Component:Message,
    //     icon: MessageIcon,
    //     name:"Message"
    // },
    {
        path: SETTINGS,
        Component:Settings,
        icon: SettingsIcon,
        name:"Settings"
    }
]