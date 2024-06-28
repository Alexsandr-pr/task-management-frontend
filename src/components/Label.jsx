

const Label = ({
    text,
    children
}) => {
    return (
        <div className='flex gap-2 items-center'>
            {children}
            <p className='text-sm text-second-500 font-medium'>{text}</p>
        </div>
    )
}

export default Label