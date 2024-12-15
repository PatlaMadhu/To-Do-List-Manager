import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';  // useNavigate for redirection after update
import { useSelector, useDispatch } from 'react-redux';
import TaskForm from '../components/TaskForm';
import { updateTask } from '../redux/taskSlice';  // Make sure to import updateTask

const EditTaskPage = () => {
  const { id } = useParams();  // Get task ID from URL
  const tasks = useSelector(state => state.tasks.tasks); // Get tasks from Redux store
  const dispatch = useDispatch();
  const navigate = useNavigate();  // Used for redirecting after update

  const [taskToEdit, setTaskToEdit] = useState(null);

  // Find the task by ID when the component mounts
  useEffect(() => {
    const task = tasks.find(task => task.id === parseInt(id));  // Match task by ID
    if (task) {
      setTaskToEdit(task);  // Set the task to be edited
    }
  }, [tasks, id]);  // Re-run if tasks or id changes

  // If no task is found, return an error message or loading state
  if (!taskToEdit) {
    return <div>Task not found!</div>;
  }

  // Function to handle updating the task
  const handleUpdate = (updatedTask) => {
    dispatch(updateTask(updatedTask));  // Dispatch the updateTask action with the updated task data
    navigate('/');  // Redirect to the home page after successful update
  };

  return (
    <div>
      <h1>Edit Task</h1>
      <TaskForm
        isEdit={true}
        task={taskToEdit}  // Pass the task to the form for editing
        onSubmit={handleUpdate}  // Handle the submit action
      />
    </div>
  );
};

export default EditTaskPage;
