

const CustomCheckbox = ({text, active, cb}) => {
    return (
        <button onClick={() => cb()} className={`h-[50px] border text-xs md:text-base rounded border-solid flex items-center gap-4 justify-between  px-2 md:px-5 ${active ? " border-primary-500" : " border-main bg-white dark:bg-transparent"}`}>
            {
                text
            }
            <span className={`w-5 h-5 flex rounded-full border-solid ${active ? " border-2 border-primary-500" : "border border-main "}`}>

            </span>
        </button>
    )
}

export default CustomCheckbox