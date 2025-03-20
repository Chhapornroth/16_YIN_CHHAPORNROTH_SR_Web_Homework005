import * as React from "react";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export const DropdownComponent = ({children, onValueChange}) => {
    return (
        <Select onValueChange={onValueChange}>
            <SelectTrigger className="w-[280px]">
                <SelectValue placeholder="Select a Categroy" />
            </SelectTrigger>
            <SelectContent className="h-72">
                <SelectGroup>
                    <SelectLabel className="font-medium">Filter by Category</SelectLabel>
                        {children}
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}
