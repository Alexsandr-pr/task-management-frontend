
import { useState } from "react"
import CustomCheckbox from "@/components/CustomCheckbox"
import SettingsSelect from "@/components/SettingsSelect"
const data = [
    {
        text: "24 Hours",
        param: 24
    },
    {
        text: "12 Hours",
        param:12
    }
]

const GeneralSettings = () => {
    const [state, setState] = useState(24)
    return (
        <>
            <SettingsSelect label={"Language"}/>
            <SettingsSelect label={"Timezone"}/>
            <div className="grid grid-cols-2 gap-8 w-full sm:w-[400px] ">
                {
                    data.map((item, i) => {
                        return (
                            <CustomCheckbox cb={() => setState(item.param)} text={item.text} key={i} active={item.param === state}/>
                        )
                    })
                }
            </div>
        </>
    )
}

export default GeneralSettings