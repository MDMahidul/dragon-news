import React from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div>
            <img src={logo}  alt=""/>
            <p><small className="text-secondary">Journalism Without Fear or Favour</small></p>
            <p>{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Header;