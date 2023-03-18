import { Checkbox } from "@mui/material"
import { useDispatch } from "react-redux"
import { deleteWord } from "redux/wordsSlice";

export const WordsListItem = ({engWord, ukrWord, checked, number, id}) => {
const dispatch = useDispatch();
const handleDelete = () => {
dispatch(deleteWord(id));
}
    return (
        <li>
            <Checkbox color="secondary" checked={checked} />
                <span>{number}</span>
                <span>{ukrWord}</span>
                <span>{engWord}</span>
                <button type="button">Edit</button>
                <button type="button" onClick={handleDelete}>Delete</button>
                
        </li>
    )
}