import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ActiveLink from '../ActiveLink/ActiveLink';
import { Nav } from 'react-bootstrap';
import LeftNavBelowItems from './LeftNavBelowItems';

const LeftNav = () =>{
    const [categories,setCategories] = useState([]);
    
    useEffect(()=>{
        fetch('http://localhost:5000/categories')
            .then(res=>res.json())
            .then(data=>setCategories(data))
            .catch(error=>console.error(error));
    },[])
    return (
      <div>
        <h4>All Category</h4>
        <div className="ps-4 mt-4">
          {categories.map((category) => (
            <p key={category.id}>
              <Nav.Link>
                <ActiveLink
                  to={`/category/${category.id}`}
                >
                  {category.name}
                </ActiveLink>
              </Nav.Link>
            </p>
          ))}
        </div>
        <LeftNavBelowItems/>
      </div>
    );
};

export default LeftNav;