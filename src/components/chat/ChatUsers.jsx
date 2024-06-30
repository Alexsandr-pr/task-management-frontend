import { Link, useParams } from "react-router-dom"
import { Input } from "../ui/input"
import photoMentor from "@/assets/photo-mentor.png"
import { useSelector } from "react-redux";

const ChatUsers = ({
    clazz, 
}) => {
    const param = useParams();
    const dataChat = useSelector(store => store.chat.data);
    return (
        <div className={`bg-white p-6 flex flex-col gap-8 ${clazz}`}>
            <Input placeholder={"Search  Name"} type="search" />
            <ul className={`flex flex-col chat-list chat-scroll pr-2 `}>
                {
                    dataChat.map(({name, messages,id}) => {
                        return (
                            <li key={id} className='chat-user'>
                                <Link to={`/message/${id}`} 
                                    className={`py-2.5 px-5 flex items-center gap-3 w-full ${id === param.id ? "" : "" }`}>
                                    <Static name={name} messages={messages}/>
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

const Static = ({name, messages}) => {
    return (
        <>
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
        </>
    )
}
export default ChatUsers