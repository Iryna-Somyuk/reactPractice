import { Checkbox } from "@mui/material"

export const WordsListItem = () => {
    return (
        <li>
            <Checkbox color="secondary" checked={false} />
                <span>1</span>
                <span>Ukr word</span>
                <span>Eng word</span>
                <button type="button">Edit</button>
                <button type="button">Delete</button>
                
        </li>
    )
}