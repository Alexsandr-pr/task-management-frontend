
import Mentors from "@/pages/Mentors";
import Overview from "@/pages/Overview";
import Task from "@/pages/Task";
import Message from "@/pages/Message";
import Settings from "@/pages/Settings";
import { MENTORS, MESSAGE, OVERVIEW, SETTINGS, TASK } from "@/utils/consts";
import IconId from "./utils/icon-consts";


export const publicRoutes = [
    {
        path: OVERVIEW,
        Component:Overview,
        icon: IconId.overview,
        name: "Overview"
    },
    {
        path: TASK,
        Component:Task,
        icon: IconId.task,
        name:"Task"
    },
    {
        path: MENTORS,
        Component:Mentors,
        icon: IconId.userOctagon,
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
        icon: IconId.settingSidebar,
        name:"Settings"
    }
]