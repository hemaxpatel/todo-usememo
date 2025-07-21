"use client";

import React, { useState } from "react";

const Child = ({ style }) => {
  const [todos, setTodos] = useState(["Learn React", "Learn Next.js"]);
  const [newTodo, setNewTodo] = useState("");

  console.log("Child Rendered");

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, newTodo]);
      setNewTodo("");
    }
  };

  return (
    <div
      className="p-6 mt-6 border-2 rounded-lg transition-colors duration-300"
      style={{
        backgroundColor: style.backgroundColor,
        borderColor: style.borderColor,
      }}
    >
      <h2
        className="text-2xl font-bold transition-colors duration-300"
        style={{ color: style.textColor }}
      >
        Todo List (Child)
      </h2>
      <p className="text-sm text-gray-500 mb-4">
        This component only re-renders when you add a todo or toggle the theme.
      </p>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new todo"
          className="flex-grow p-2 border rounded-md text-gray-800 focus:ring-2 focus:ring-green-500 focus:outline-none"
        />
        <button
          onClick={handleAddTodo}
          className="px-4 py-2 font-semibold text-white bg-green-600 rounded-md hover:bg-green-700"
        >
          Add Todo
        </button>
      </div>
      <ul className="list-disc list-inside space-y-2">
        {todos.map((todo, index) => (
          <li
            key={index}
            style={{ color: style.textColor }}
            className="transition-colors duration-300"
          >
            {todo}
          </li>
        ))}
      </ul>
    </div>
  );
};

// Wrap the component with React.memo to prevent re-renders when props are the same.
export default React.memo(Child);
