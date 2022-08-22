import { configureStore } from "@reduxjs/toolkit";

const ADD = "ADD";
const DELETE = "DELETE";

const reducer = (state = localStorage.toDos
                        ? JSON.parse(localStorage.toDos)
                        : [], action) => {
    switch(action.type) {
        case ADD:
            localStorage.setItem("toDos", JSON.stringify([{text: action.text, id:Date.now()}, ...state]));
            return JSON.parse(localStorage.toDos);  
        case DELETE:
            const output = JSON.parse(localStorage.toDos);
            localStorage.setItem("toDos", JSON.stringify(output.filter(toDo => toDo.id !== action.id)));
            return JSON.parse(localStorage.toDos);
        default:
            return state;
    }
}

const addToDo = text => {
    return {
        type : ADD,
        text
    }
}

const deleteToDo = id => {
    return {
        type: DELETE,
        id: parseInt(id)
    }
}

const store = configureStore({reducer: reducer});

export const actionCreators =  {
    addToDo,
    deleteToDo
}

export default store;