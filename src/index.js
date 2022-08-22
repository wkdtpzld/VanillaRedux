import { configureStore } from '@reduxjs/toolkit';

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

// Setter
const addToDo = (text) => {
  return {
    type: ADD_TODO,
    text: text,
    id: Date.now()
  };
};

const deleteToDo = (id) => {
  return {
    type: "DELETE_TODO",
    id
  };
};

// reducer
const reducer = (state = [], action) => {
  switch(action.type){
    case ADD_TODO:
      return [{text: action.text, id: action.id }, ...state];
    case DELETE_TODO:
      return state.filter(toDo => toDo !== action.id);
    default:
      return state;
  }
};


// store
const store = configureStore({reducer: reducer});

// dispatch
const dispatchAddToDo = (text) => {
  store.dispatch(addToDo(text));
};

const dispatchDeleteToDo = (e) => {
  const id = parseInt(e.target.parentNode.id);
  store.dispatch(deleteToDo(id));
}

// subscribe
const paintToDos = () => {
  const toDos = store.getState();
  ul.innerHTML= "";
  toDos.forEach(toDo => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.innerText = "DELETE";
    btn.addEventListener("click", dispatchDeleteToDo);
    li.id = toDo.id;
    li.innerText = toDo.text;
    li.appendChild(btn);
    ul.appendChild(li); 
  })
}

store.subscribe(paintToDos);


// vanillaJS
const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const onSubmit = e => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  dispatchAddToDo(toDo);
}

form.addEventListener("submit", onSubmit);