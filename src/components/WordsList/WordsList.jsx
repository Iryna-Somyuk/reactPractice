
import { WordsListItem } from "components/WordsListItem/WordsListItem";
import { useSelector } from "react-redux";

export const WordsList = () => {
   const words = useSelector(state => state.words);
    return (
        <div>
        <ul>{words.map((word, index) => <WordsListItem {...word} key={word.id} number={index + 1}/>)}
            
        </ul>
        </div>
    )
};