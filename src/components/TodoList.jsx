import React, { useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState(["Hey, I am a Zebra..."]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo.trim() != "") {
      setTodos([...todos, newTodo.trim()]);
    }
    setNewTodo("");
  };

  const removeTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i != index);
    setTodos(updatedTodos);
  };

  return (
    <div className='max-w-md mx-auto mt-10'>
      <h1 className='text-2xl font-bold text-center mb-5'>Todo List</h1>
      <div className='flex mb-5'>
        <input
          type='text'
          className='w-full p-2 border rounded-1-md focus:outline-none'
          value={newTodo}
          onChange={(e) => {
            setNewTodo(e.target.value);
          }}
          placeholder='Add a new task...'
        />
        <button
          className='p-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600'
          onClick={addTodo}
        >
          Add
        </button>
      </div>
      <ul className='list-disc pl-5'>
        {todos.map((todo, index) => (
          <li key={index} className='flex justify-between items-center mb-2'>
            <span>{todo}</span>
            <button
              className='text-red-500 hover:text-red-600'
              onClick={() => removeTodo(index)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
