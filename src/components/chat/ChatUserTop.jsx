import photo from "@/assets/photo-mentor.png"
import call from "/public/img/call.svg";
import video from "/public/img/video.svg";

const ChatUserTop = () => {
    return (
        <div className="w-full px-12 py-7 flex items-center justify-between gap-8 bg-white">
            <div className="flex items-center gap-3">
                <img src={photo} alt="User name" />
                <div className="flex flex-col gap-2">
                    <p className="text-sm ">Angelie Crison</p>
                    <div className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                            <circle cx="9" cy="9" r="4" fill="#25C78B"/>
                        </svg>
                        Online
                    </div>
                </div>
            </div>
            <div className="flex items-center gap-6">
                <button className="rounded-full w-11 h-11 md:w-[52px] md:h-[52px] border border-solid border-main flex justify-center items-center">
                    <img src={video} alt="Video" />
                </button>
                <button className="rounded-full w-11 h-11 md:w-[52px] md:h-[52px] border border-solid border-main flex justify-center items-center">
                    <img src={call} alt="Call" />
                </button>
            </div>
        </div>
    )
}

export default ChatUserTop