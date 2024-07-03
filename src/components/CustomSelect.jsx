import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

const CustomSelect = () => {
    return (
        <Select>
            <SelectTrigger className="w-[80px] border-0 p-0 h-6">
                <SelectValue  placeholder="Theme" />
            </SelectTrigger>
            <SelectContent className="bg-white dark:bg-dark-200 cursor-pointer">
                <SelectItem className="cursor-pointer" value="light">Light</SelectItem>
                <SelectItem className="cursor-pointer" value="dark">Dark</SelectItem>
                <SelectItem className="cursor-pointer" value="system">System</SelectItem>
            </SelectContent>
        </Select>

    )
}

export default CustomSelect