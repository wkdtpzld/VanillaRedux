import { configureStore } from "@reduxjs/toolkit";
import { createAction } from "@reduxjs/toolkit";


const addToDo = createAction("ADD");
const deleteToDo = createAction("DELETE");

const reducer = (state = localStorage.toDos
                        ? JSON.parse(localStorage.toDos)
                        : [], action) => {
    switch(action.type) {
        case addToDo.type:
            localStorage.setItem
                ("toDos", JSON.stringify(
                    [{
                        text: action.payload,
                        id:Date.now()
                    }, ...state]));
            return JSON.parse(localStorage.toDos);  

        case deleteToDo.type:
            const output = JSON.parse(localStorage.toDos);
            localStorage.setItem
                ("toDos", JSON.stringify(
                    output.filter(toDo => toDo.id !== action.payload))
                );
            return JSON.parse(localStorage.toDos);
        default:
            return state;
    }
}

const store = configureStore({reducer: reducer});

export const actionCreators =  {
    addToDo,
    deleteToDo
}

export default store;