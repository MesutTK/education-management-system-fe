import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside>
      <nav>
        <ul>
          <li>
            <Link to="/departments">Departments and Employees</Link>
          </li>
          <li>
            <Link to="/courses">Courses and Students</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
