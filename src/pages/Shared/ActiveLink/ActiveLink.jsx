import React from 'react';
import { NavLink } from 'react-router-dom';

const ActiveLink = ({to,children}) => {
    return (
      <div>
        <NavLink
          to={to}
          className={({ isActive }) =>
            isActive
              ? "bg-secondary-subtle py-2 px-4 fw-bold rounded text-decoration-none"
              : " text-decoration-none text-secondary"
          }
        >
          {children}
        </NavLink>
      </div>
    );
};

export default ActiveLink;