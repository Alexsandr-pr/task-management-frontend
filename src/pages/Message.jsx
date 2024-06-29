import { Input } from '@/components/ui/input'
import photoMentor from "@/assets/photo-mentor.png"
import ChatUserTop from '@/components/chat/ChatUserTop'
import { Button } from '@/components/ui/button'
import { v4 as uuidv4 } from 'uuid';

import send from "/public/img/send-2.svg"
import attachCircle from "/public/img/attach-circle.svg"
import { useEffect, useState } from 'react'
import useMediaQuery from '@/hooks/useMediaQuery';

const data = [
    {
        id:1,
        name: "Angelie Crison",
        messages: [
            {
                param: "left",
                text: " Morning Angelie, I have question about My Task",
                date: "Today 11:52"
            },
            {
                param: "left",
                text: " Morning Angelie, I have question about My Task",
                date: "Today 11:52"
            }, 
            {
                param: "left",
                text: " Morning Angelie, I have question about My Task",
                date: "Today 11:52"
            },
            {
                param: "right",
                text: " Morning Angelie, I have question about My Task",
                date: "Today 11:52"
            },
            {
                param: "left",
                text: " Morning Angelie, I have question about My Task",
                date: "Today 11:52"
            },
            {
                param: "right",
                text: " Morning Angelie, I have question about My Task",
                date: "Today 11:52"
            },
            {
                param: "right",
                text: " Morning Angelie, I have question about My Task",
                date: "Today 11:52"
            },
            {
                param: "left",
                text: " Morning Angelie, I have question about My Task",
                date: "Today 11:52"
            },
            {
                param: "right",
                text: " Morning Angelie, I have question about My Task",
                date: "Today 11:52"
            },
        ]
    },
    {
        id:2,
        name: "Angelie Crison",
        messages: [
            {
                param: "right",
                text: " Morning Angelie, I have question about My Task",
                date: "Today 11:52"
            },
            {
                param: "left",
                text: " Morning Angelie, I have question about My Task",
                date: "Today 11:52"
            },
            {
                param: "right",
                text: " Morning Angelie, I have question about My Task",
                date: "Today 11:52"
            },
            {
                param: "right",
                text: " Morning Angelie, I have question about My Task",
                date: "Today 11:52"
            },
            {
                param: "left",
                text: " Morning Angelie, I have question about My Task",
                date: "Today 11:52"
            },
            {
                param: "right",
                text: " Morning Angelie, I have question about My Task",
                date: "Today 11:52"
            },
            {
                param: "right",
                text: " Morning Angelie, I have question about My Task",
                date: "Today 11:52"
            },
            {
                param: "left",
                text: " Morning Angelie, I have question about My Task",
                date: "Today 11:52"
            },
            {
                param: "right",
                text: " Morning Angelie, I have question about My Task",
                date: "Today 11:52"
            },
            {
                param: "right",
                text: " Morning Angelie, I have question about My Task",
                date: "Today 11:52"
            },
            {
                param: "left",
                text: " Morning Angelie, I have question about My Task",
                date: "Today 11:52"
            },
            {
                param: "right",
                text: " Morning Angelie, I have question about My Task",
                date: "Today 11:52"
            },
            {
                param: "right",
                text: " Morning Angelie, I have question about My Task",
                date: "Today 11:52"
            },
            {
                param: "left",
                text: " Morning Angelie, I have question about My Task",
                date: "Today 11:52"
            },
            {
                param: "right",
                text: " Morning Angelie, I have question about My Task",
                date: "Today 11:52"
            },
            {
                param: "right",
                text: " Morning Angelie, I have question about My Task",
                date: "Today 11:52"
            },
            {
                param: "left",
                text: " Morning Angelie, I have question about My Task",
                date: "Today 11:52"
            },
            {
                param: "right",
                text: " Morning Angelie, I have question about My Task",
                date: "Today 11:52"
            },
            {
                param: "right",
                text: " Morning Angelie, I have question about My Task",
                date: "Today 11:52"
            },
            {
                param: "left",
                text: " Morning Angelie, I have question about My Task",
                date: "Today 11:52"
            },
            {
                param: "right",
                text: " Morning Angelie, I have question about My Task",
                date: "Today 11:52"
            },
        ]
    },
    {
        id:3,
        name: "Angelie Crison",
        messages: [
            {
                param: "right",
                text: " Morning Angelie, I have question about My Task",
                date: "Today 11:52"
            },
            {
                param: "left",
                text: " Morning Angelie, I have question about My Task",
                date: "Today 11:52"
            },
            {
                param: "right",
                text: " Morning Angelie, I have question about My Task",
                date: "Today 11:52"
            },
        ]
    },
    {
        id:4,
        name: "Angelie Crison",
        messages: [
            
        ]
    },
]


const Message = () => {
    const [dataChat, setDataChat] = useState([])
    const [chatActive, setChatActive] = useState(3);
    const activeChat = dataChat.find(chat => chat.id === chatActive);
    const [value, setValue] = useState("")

    useEffect(() => {
        setDataChat(data)
    }, [])

    const addTextToArray = (text, id) => {
        const newData = [...dataChat];
        const newMessage = {
            param: "right",
            text: text,
            date: new Date().toLocaleTimeString()
        };

        const chatIndex = newData.findIndex(chat => chat.id === id);
        if (chatIndex !== -1) {
            newData[chatIndex].messages.push(newMessage);
            setDataChat(newData);
            setValue("");
        }
    }


    const query = useMediaQuery('(max-width:1024px)');
    const [activeState, setActiveState] = useState("chat");

    
    return (
        <div className='flex'>
            
            {
                !query && 
                <>
                        <div className=" flex w-full w-full lg:w-2/5 xl:w-1/3 bg-white p-6  flex-col gap-8">
                        <Input placeholder={"Search  Name"} type="search" />
                        <ul className='flex flex-col h-[70vh] chat-scroll pr-2'>
                            {
                                dataChat.map(({name, messages,id}) => {
                                    
                                    
                                    return (
                                        <>
                                            <li key={id} className='chat-user'>
                                                <button 
                                                    onClick={() => setChatActive(id)}
                                                    className={`py-2.5 px-5 flex items-center gap-3 w-full ${id === chatActive ? " bg-main rounded" : null}`}>
                                                    <img src={photoMentor} alt="" />
                                                    <div className="flex  flex-col gap-1 w-full">
                                                        <div className='flex gap-2 items-center justify-between'>
                                                            <p className='text-sm text-left'> {name}</p>
                                                            <span className='text-xs font-normal text-right text-second-300'>2 m Ago</span>
                                                        </div>
                                                        <div className='flex items-center gap-2 justify-between '>
                                                            <p className='text-xs font-normal w-24 sm:w-72 lg:w-36 xl:w-48 overflow-hidden text-ellipsis whitespace-nowrap text-left'>{messages[0]?.text}</p>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                                                <path d="M13.5 5.24988L12.4425 4.19238L7.6875 8.94738L8.745 10.0049L13.5 5.24988ZM16.68 4.19238L8.745 12.1274L5.61 8.99988L4.5525 10.0574L8.745 14.2499L17.745 5.24988L16.68 4.19238ZM0.307495 10.0574L4.5 14.2499L5.5575 13.1924L1.3725 8.99988L0.307495 10.0574Z" fill="#04A4F4"/>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </button>
                                            </li>
                                        </>
                                    )
                                })
                            }
                            
                            
                        </ul>
                    </div>
                        
                        <div className="flex-col flex w-full  lg:w-3/5 xl:w-2/3 ">
                        <ChatUserTop/>
                        <div className="bg-[#FAFAFA] h-[65vh] pt-12 chat-scroll flex flex-col gap-5 w-full h-64 px-8">
                            {
                                activeChat?.messages.map((item, i) => {
                                    return (
                                        <div key={i} className={`flex   ${item.param === "left" ? "justify-start" : " justify-end"}`}>
                                            <div className={`flex  flex-col gap-2 ${item.param === "left" ? " text-left" : " text-right"}`}>
                                                <p className={`text-sm chat-message-right ${item.param === "left" ? " chat-message-left" : " chat-message-right"}`} >{item.text}</p>
                                                <span className='text-second-300 text-xs font-normal'>{item.date}</span>
                                            </div>
                                        </div>
                                    )
                                }) 
                            }
                        </div>
                        <div className="flex gap-8 p-5 bg-white">
                            <textarea  
                                onChange={e => setValue(e.target.value)}
                                value={value}
                                className='w-full h-12 resize-none' placeholder='Send your message…' 
                            />
                            <div className="flex items-center gap-8 ">
                                <button>
                                    <img src={attachCircle} alt="" />
                                </button>
                                <Button onClick={() => addTextToArray(value, chatActive)} className="w-12 h-12 p-2">
                                    <img src={send} alt="" />
                                </Button>
                            </div>
                        </div>
                    </div>
                
                </>
            }


            {
                query && activeState === "chatUser" && <div className=" flex w-full w-full lg:w-2/5 xl:w-1/3 bg-white p-6  flex-col gap-8">
                <Input placeholder={"Search  Name"} type="search" />
                <ul className='flex flex-col h-[70vh] chat-scroll pr-2'>
                    {
                        dataChat.map(({name, messages,id}) => {
                            
                            
                            return (
                                <>
                                    <li key={id} className='chat-user'>
                                        <button 
                                            onClick={() => setChatActive(id)}
                                            className={`py-2.5 px-5 flex items-center gap-3 w-full ${id === chatActive ? " bg-main rounded" : null}`}>
                                            <img src={photoMentor} alt="" />
                                            <div className="flex  flex-col gap-1 w-full">
                                                <div className='flex gap-2 items-center justify-between'>
                                                    <p className='text-sm text-left'> {name}</p>
                                                    <span className='text-xs font-normal text-right text-second-300'>2 m Ago</span>
                                                </div>
                                                <div className='flex items-center gap-2 justify-between '>
                                                    <p className='text-xs font-normal w-24 sm:w-72 lg:w-36 xl:w-48 overflow-hidden text-ellipsis whitespace-nowrap text-left'>{messages[0]?.text}</p>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                                        <path d="M13.5 5.24988L12.4425 4.19238L7.6875 8.94738L8.745 10.0049L13.5 5.24988ZM16.68 4.19238L8.745 12.1274L5.61 8.99988L4.5525 10.0574L8.745 14.2499L17.745 5.24988L16.68 4.19238ZM0.307495 10.0574L4.5 14.2499L5.5575 13.1924L1.3725 8.99988L0.307495 10.0574Z" fill="#04A4F4"/>
                                                    </svg>
                                                </div>
                                            </div>
                                        </button>
                                    </li>
                                </>
                            )
                        })
                    }
                    
                    
                </ul>
                </div>
            }
            {
            query && activeState === "chat" && 
            <div className="flex-col flex w-full  lg:w-3/5 xl:w-2/3 ">
            <ChatUserTop/>
            <div className="bg-[#FAFAFA] h-[65vh] pt-12 chat-scroll flex flex-col gap-5 w-full h-64 px-8">
                {
                    activeChat?.messages.map((item, i) => {
                        return (
                            <div key={i} className={`flex   ${item.param === "left" ? "justify-start" : " justify-end"}`}>
                                <div className={`flex  flex-col gap-2 ${item.param === "left" ? " text-left" : " text-right"}`}>
                                    <p className={`text-sm chat-message-right ${item.param === "left" ? " chat-message-left" : " chat-message-right"}`} >{item.text}</p>
                                    <span className='text-second-300 text-xs font-normal'>{item.date}</span>
                                </div>
                            </div>
                        )
                    }) 
                }
            </div>
            <div className="flex gap-8 p-5 bg-white">
                <textarea  
                    onChange={e => setValue(e.target.value)}
                    value={value}
                    className='w-full h-12 resize-none' placeholder='Send your message…' 
                />
                <div className="flex items-center gap-8 ">
                    <button>
                        <img src={attachCircle} alt="" />
                    </button>
                    <Button onClick={() => addTextToArray(value, chatActive)} className="w-12 h-12 p-2">
                        <img src={send} alt="" />
                    </Button>
                </div>
            </div>
        </div>
            }
        </div>
    )
}

export default Message