import photo from "@/assets/photo-mentor.png"

import arrowLeft from "/public/img/arrow-left.svg";
import { Link } from "react-router-dom";
import IconId from "@/utils/icon-consts";

import { Button } from "../ui/button";
import Icon from "../block/Icon";

const ChatUserTop = () => {
    return (
        <div className="w-full px-6 md:px-12 py-7 flex items-center justify-between gap-8 dark:bg-dark-100 bg-white">
            <div className="flex items-center gap-3">
            <Link to={'/message'}>
                <img src={arrowLeft} alt="User name" />
            </Link>
                <img src={photo} alt="User name" />
                <div className="flex flex-col gap-2">
                    <p className="text-sm ">Angelie Crison</p>
                    <div className="flex text-xs items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                            <circle cx="9" cy="9" r="4" fill="#25C78B"/>
                        </svg>
                        Online
                    </div>
                </div>
            </div>
            <div className="flex items-center gap-6">
                <Button size="rounded" variant="rounded">
                    <Icon  className="text-second-300" id={IconId.video}/>
                </Button>
                <Button size="rounded" variant="rounded">
                    <Icon  className="text-second-300" id={IconId.voiceCall}/>
                </Button>
            </div>
        </div>
    )
}

export default ChatUserTop