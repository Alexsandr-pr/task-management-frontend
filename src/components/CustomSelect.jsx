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
            <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
            </SelectContent>
        </Select>

    )
}

export default CustomSelect