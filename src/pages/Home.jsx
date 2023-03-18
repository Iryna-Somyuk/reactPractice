import { Form } from "components/Form/Form"
import { Modal } from "components/Modal/Modal"
import { WordsList } from "components/WordsList/WordsList"

export const Home = () => {
    return (
        <div>
        <h1>Home</h1>
        <Modal>
            <Form/>
        </Modal>
        <WordsList/>
        </div>
    )
}