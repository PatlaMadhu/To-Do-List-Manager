import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/add">Add Task</Link>
        </li>
        <li>
          <Link to="/edit/1">Edit Task</Link> {/* Example Edit link with a task ID */}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
