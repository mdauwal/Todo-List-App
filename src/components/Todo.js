import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo (prop) {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    function handleDelete () {
        setModalIsOpen(true)        
    }
    function closeModalHandler () {
        setModalIsOpen(false)
    }
    return (
        <div>
            <div className="card">
                <h2>{prop.title}</h2>
                <div className="actions">
                    <button className="btn" onClick={handleDelete}>Delect</button>
                </div>
            </div>
            {modalIsOpen && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />}
            {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
        </div>
    )
};

export default Todo;