import { useState } from "react";
import { Button } from "../ui/button"
import ChatUserTop from "./ChatUserTop"
import send from "/public/img/send-2.svg"
import attachCircle from "/public/img/attach-circle.svg"
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Icon from "../block/Icon";
import IconId from "@/utils/icon-consts";


const Chat = ({

}) => {
    const {id } = useParams()

    const dataChat = useSelector(store => store.chat.data);
    const [value, setValue] = useState("");
    const activeChat = dataChat.find(chat => chat.id === +id);

    return (

        <div className="flex-col flex w-full  lg:w-3/5 xl:w-2/3 ">
            <ChatUserTop/>
            <div className="bg-[#FAFAFA] dark:bg-dark-100 mb-24 lg:mb-0 pt-12 chat chat-scroll flex flex-col gap-5 w-full  px-8">
                {
                    activeChat?.messages.map((item, i) => {
                        return (
                            <div key={i} className={`flex ${item.param === "left" ? "justify-start" : " justify-end"}`}>
                                <div className={`flex  flex-col gap-2 ${item.param === "left" ? " text-left" : " text-right"}`}>
                                    <p className={`text-sm chat-message-right ${item.param === "left" ? " chat-message-left" : " chat-message-right"}`} >{item.text}</p>
                                    <span className='text-second-300 text-xs font-normal'>{item.date}</span>
                                </div>
                            </div>
                        )
                    }) 
                }
            </div>
            <div className="fixed bottom-0 w-full lg:relative items-center flex gap-4 p-5 bg-white dark:bg-dark-100">
                <textarea  
                    onChange={e => setValue(e.target.value)}
                    value={value}
                    className='w-[78%] h-12 resize-none outline-none dark:bg-dark-100' placeholder='Send your message…' 
                />
                <div className="flex items-center gap-4 lg:gap-8 ">
                    <button>
                        <Icon className="text-second-300" id={IconId.attachCircle}/>
                    </button>
                    <Button onClick={() => addTextToArray(value, chatActive)} className="w-[48px] h-[48px] p-2">
                    <Icon className="text-white" id={IconId.sendChat}/>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Chat