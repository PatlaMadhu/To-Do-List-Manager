import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/taskSlice';  // Import addTask from taskSlice
import TaskList from '../components/TaskList';

const HomePage = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Task List</h1>
      <TaskList />
    </div>
  );
};

export default HomePage;
