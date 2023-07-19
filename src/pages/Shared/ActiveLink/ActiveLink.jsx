import React from 'react';
import { NavLink } from 'react-router-dom';

const ActiveLink = ({to,children}) => {
    return (

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
    
    );
};

export default ActiveLink;