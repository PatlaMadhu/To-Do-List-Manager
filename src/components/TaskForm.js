import React, { useState, useEffect } from 'react';

const TaskForm = ({ isEdit, task, onSubmit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  // Pre-fill the form with the task data if in edit mode
  useEffect(() => {
    if (isEdit && task) {
      setTitle(task.title);
      setDescription(task.description);
    }
  }, [isEdit, task]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEdit && task) {
      const updatedTask = { ...task, title, description };  // Create updated task object
      onSubmit(updatedTask);  // Call the onSubmit function passed from EditTaskPage
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Task Title"
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Task Description"
      />
      <button type="submit">{isEdit ? 'Update Task' : 'Add Task'}</button>
    </form>
  );
};

export default TaskForm;
