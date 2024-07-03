
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
const SettingsSelect = ({label}) => {
    return (
        <div >
            <p className="text-sm font-semibold mb-4">{label}</p>
            <Select>
                <SelectTrigger className="w-full sm:w-[400px] h-[50px] rounded border border-solid border-main text-sm">
                    <SelectValue placeholder="English ( Default)" />
                </SelectTrigger>
                <SelectContent className="bg-white dark:bg-dark-200">
                    <SelectGroup>
                        <SelectItem className="cursor-pointer" value="en">English ( Default)</SelectItem>
                        <SelectItem className="cursor-pointer" value="ua">Ukranian </SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    )
}

export default SettingsSelect