
import CustomInput from '../block/CustomInput'

const SettingsProfile = () => {
    return (
        <div className="w-full sm:w-[400px] flex flex-col gap-5 md:gap-8">
            <CustomInput 
                label={'Change Email'}
                type={"email"}
                placeholder={"Enter your email"}
            />
            <CustomInput 
                label={'Change First Name'}
                type={"text"}
                placeholder={"Enter your first name"}
            />
            <CustomInput 
                label={'Change Last Name'}
                type={"text"}
                placeholder={"Enter your last name"}
            />
            <CustomInput 
                label={'Change password'}
                type={"email"}
                placeholder={"Enter your old password"}
            />
            <CustomInput 
                label={'Change password'}
                type={"email"}
                placeholder={"Enter your new password"}
            />
        </div>
    ) 
}

export default SettingsProfile