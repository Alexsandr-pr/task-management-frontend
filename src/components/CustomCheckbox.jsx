

const CustomCheckbox = ({text, active, cb}) => {
    return (
        <button onClick={() => cb()} className={`h-[50px] border  rounded border-solid flex items-center gap-4 justify-between bg-whitepy-4 px-5 ${active ? " border-primary-500" : " border-main"}`}>
            {
                text
            }
            <span className={`w-5 h-5 flex rounded-full border-solid ${active ? " border-2 border-primary-500" : " border-main"}`}>

            </span>
        </button>
    )
}

export default CustomCheckbox