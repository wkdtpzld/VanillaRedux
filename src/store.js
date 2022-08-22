import { configureStore, createReducer } from "@reduxjs/toolkit";
import { createAction } from "@reduxjs/toolkit";


const addToDo = createAction("ADD");
const deleteToDo = createAction("DELETE");

const reducer = createReducer(localStorage.toDos ? JSON.parse(localStorage.toDos): [], {

    /**
     *  @param {action.payload === toDos.text}} state
     *  @param {addToDo} action
     *  state를 Mutate시에는 반드시 Return값을 넣어서는 안됨. 
     *  Immer 라는 패키지 내에서 변경이 일어났을 경우에 아무것도 Return하지 않음.
     *  */
    [addToDo]: (state, action) => {
        state.push({ text: action.payload, id: Date.now() });
        localStorage.setItem("toDos", JSON.stringify(state));
    },

    /**
     * filter를 사용한 Array 재구성을 하였지만 이 보다 더 좋은 방법을 알 수가없음. 어케하냐진짜?
     * @param {action.paylaod === toDos.id} state 
     * @param {deleteToDo} action 
     */
    [deleteToDo]: (state, action) => {
        localStorage.setItem
            ("toDos", JSON.stringify(
                state.filter(toDo => toDo.id !== action.payload))
            );
        return JSON.parse(localStorage.toDos);
    }
});

const store = configureStore({reducer});

export const actionCreators =  {
    addToDo,
    deleteToDo
}

export default store;