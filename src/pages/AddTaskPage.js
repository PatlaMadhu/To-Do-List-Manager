import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addTask } from '../redux/taskSlice';

const AddTaskPage = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddTask = () => {
    if (title && description) {
      const newTask = {
        id: Date.now(),
        title,
        description,
      };
      dispatch(addTask(newTask));
      setTitle('');
      setDescription('');
      navigate('/'); // Navigate to home page after adding task
    } else {
      alert('Please fill in all fields!');
    }
  };

  return (
    <div>
      <h1>Add Task</h1>
      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Task Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default AddTaskPage;
