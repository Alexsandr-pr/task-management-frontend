

import ChatUsers from '@/components/chat/ChatUsers';
import useMediaQuery from '@/hooks/useMediaQuery';

import { Outlet, useParams } from 'react-router-dom';


const Message = () => {
    const query = useMediaQuery('(max-width:1024px)');
    const {id} = useParams()

    // const addTextToArray = (text, id) => {
    //     const newData = [...dataChat];
    //     const newMessage = {
    //         param: "right",
    //         text: text,
    //         date: new Date().toLocaleTimeString()
    //     };

    //     const chatIndex = newData.findIndex(chat => chat.id === id);
    //     if (chatIndex !== -1) {
    //         newData[chatIndex].messages.push(newMessage);
            
    //         setValue("");
    //     }
    // }

    if(!query) {
        return (
            <div className='flex h-screen '>
                <ChatUsers 
                    clazz={" w-2/5 xl:w-1/3 "}
                />
                <Outlet />
            </div>
        )
    }
    return (
        <div className='flex h-screen '>
            {
                !id && <ChatUsers 
                clazz={" w-full  "}
                />
            }
            <Outlet />
        </div>
    )
}

export default Message