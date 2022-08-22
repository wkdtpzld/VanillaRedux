import React from "react";
import { connect } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { actionCreators } from "../store";

function Details({toDos, onBtnClick}) {

    const navigate = useNavigate();
    const id = useParams().id;
    const toDo = toDos.find((toDo) => toDo.id === parseInt(id));

    const handelDel = () => {
        onBtnClick(id);
        navigate("/");
    }

    return (
        <div>
            <h1>{toDo?.text}</h1>
            <h5>createdAt: {toDo?.id}</h5>
            <button onClick={handelDel}>Del</button>
        </div>
    );
}

function mapStateToProps(state, ownProps) {
    return { toDos: state };
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        onBtnClick: (id) => dispatch(actionCreators.deleteToDo(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Details);

