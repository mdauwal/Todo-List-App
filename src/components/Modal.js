
function Modal (prop) {
    

    return (
        <div className="modal">
            <p>Are you sure?</p>
            <button className="btn btn--alt" onClick={prop.onCancel} >Cancel</button>
            <button className="btn" onClick={prop.onConfirm}>Comfirm</button> 
        </div>
    )
}

export default Modal;