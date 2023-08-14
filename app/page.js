"use client";
import React from 'react';
import { useQuery } from 'react-query';

const fetchTodo = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const data = await response.json();
  return data;
};

const TodoPage = () => {
  const { data, isLoading, error } = useQuery('todo', fetchTodo);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Todo Details</h1>
      <p>ID: {data.id}</p>
      <p>Title: {data.title}</p>
      {/* <p>Completed: {data.completed ? 'Yes' : 'No'}</p> */}
    </div>
  );
};

export default TodoPage;