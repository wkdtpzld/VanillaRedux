import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { deleteToDo } from "../store";

function ToDo({text, onButtonClick, id}) {
    return (
        <li>
            <Link to={`${id}`} >
                {text}
            </Link>
            <button onClick={onButtonClick}>DEL</button>
        </li>
    )
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        onButtonClick: () => dispatch(deleteToDo(ownProps.id))
    }
}

export default connect(null, mapDispatchToProps) (ToDo);