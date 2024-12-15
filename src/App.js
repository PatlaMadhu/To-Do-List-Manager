import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { addTask } from './redux/taskSlice';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AddTaskPage from './pages/AddTaskPage';
import EditTaskPage from './pages/EditTaskPage';

const App = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks); // Get tasks from Redux store

  useEffect(() => {
    // Check if there are no tasks before adding default tasks
    if (tasks.length === 0) {
      // Add default tasks if the tasks list is empty
      dispatch(addTask({
        id: 1,
        title: 'Learn React',
        description: 'Study the React documentation and create small projects.'
      }));
      dispatch(addTask({
        id: 2,
        title: 'Build Todo App',
        description: 'Create a Todo List app using React and Redux.'
      }));
      dispatch(addTask({
        id: 3,
        title: 'Prepare for Exam',
        description: 'Review all the chapters for the upcoming exam.'
      }));
    }
  }, [dispatch, tasks.length]);  // Only re-run if the tasks length changes

  return (
    <Router>
      <Navbar /> {/* Render Navbar */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add" element={<AddTaskPage />} />
        <Route path="/edit/:id" element={<EditTaskPage />} />
      </Routes>
    </Router>
  );
};

export default App;
