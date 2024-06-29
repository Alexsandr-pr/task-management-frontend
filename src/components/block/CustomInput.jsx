
import { Input } from '../ui/input'

const CustomInput = ({label, type, placeholder}) => {
    return (
        <label className='w-full'>
            <span className='flex mb-2 text-sm text-second-400 '>{label}</span>
            <Input placeholder={placeholder} type={type}/>
        </label>
    )
}

export default CustomInput