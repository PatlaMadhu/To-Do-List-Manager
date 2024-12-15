import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import { removeTask } from '../redux/taskSlice';
import './TaskList.css'; // Import the CSS file for styling

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize useNavigate for routing

  const handleDelete = (id) => {
    dispatch(removeTask(id));  // Dispatch remove task action
  };

  const handleEdit = (id) => {
    navigate(`/edit/${id}`);  // Navigate to the edit page with the task id
  };

  return (
    <div>
      {tasks.length === 0 ? (
        <p>No tasks available!</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <div>{task.title}</div>
              <div>{task.description}</div>
              <div className="button-container">
                <button onClick={() => handleDelete(task.id)} className="delete-button">Delete</button>
                <button onClick={() => handleEdit(task.id)} className="edit-button">Edit</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;
