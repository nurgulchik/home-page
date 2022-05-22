import React from 'react';

import "./footer.scss";

const Footer = () => {
    const date = new Date();
  return (
    <div className='footer'>
        <div className="container">
            <p>Copyright. &copy; {date.getFullYear()} </p>
        </div>
    </div>
  )
}

export default Footer