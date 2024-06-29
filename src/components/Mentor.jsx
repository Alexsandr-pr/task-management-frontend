import photo from "@/assets/photo-mentor.png"
import Skeleton from "./Skeleton"
import { useSelector } from "react-redux"
import note2 from "/public/img/note-2.svg"
import star from "/public/img/star.svg"

const Mentor = ({itemclasses, text}) => {

    const {loading} = useSelector(store => store.mentor);

    return (
        <article className='flex flex-col gap-5 p-4 xl:p-6 bg-white rounded-[10px]'>
            <div className="flex items-center justify-between gap-4 flex-wrap">
                <div className="flex items-center gap-2" >
                        <Skeleton loading={loading} cls="bg-skelet-300 rounded-full w-12 h-12">
                            <img width={48} height={48} className="rounded-full" src={photo} alt="mentor" />
                        </Skeleton>
                    <div className="flex flex-col gap-1">
                        <Skeleton loading={loading} cls="bg-skelet-300 w-20 h-4">
                            <h3 className="">Curious George</h3>
                        </Skeleton>
                        <Skeleton loading={loading} cls="bg-skelet-100 w-20 h-4">
                            <p className="text-xs text-second-400 font-medium">UI UX Design</p>
                        </Skeleton>
                    </div>
                </div>
                <Skeleton loading={loading} cls="bg-skelet-300 w-20 h-5">
                    <button className='text-primary-500 text-sm font-medium hover:text-second-400 whitespace-nowrap'>
                        + Follow 
                    </button>
                </Skeleton> 
            </div>
                {    
                        text &&  <Skeleton loading={loading} cls="bg-skelet-300 w-52 h-10">
                        <p className="text-sm text-second-300 font-medium">{text}</p>
                    </Skeleton>
                }
            <div className="flex justify-between items-center gap-2 flex-wrap">
                <div className="flex items-center gap-2">
                    <Skeleton loading={loading} cls="bg-skelet-300 w-5 h-5">
                        <img src={note2} alt="note-2" />
                    </Skeleton>
                    <Skeleton loading={loading} cls="bg-skelet-200 w-20 h-5">
                        <span className='inline-flex font-medium text-sm whitespace-nowrap'>40 Task</span>
                    </Skeleton>   
                </div>
                <div className="flex items-center gap-2 whitespace-nowrap">
                <Skeleton loading={loading} cls="bg-skelet-300 w-5 h-5">
                <img src={star} alt="star" />
                </Skeleton>
                    <Skeleton loading={loading} cls="bg-skelet-200 w-20 h-5">
                        <span className="inline-flex font-medium text-sm">4,7  (750 Reviews)</span>
                    </Skeleton>
                </div>
            </div>
        </article>
    )
}

export default Mentor