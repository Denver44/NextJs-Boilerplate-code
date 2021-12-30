import React from 'react';
import variables from '../styles/Contact.module.scss';

function Contact() {
  return (
    <div>
      <button
        style={{
          color: variables.primaryColor,
          backgroundColor: variables.secondaryColor,
          fontSize: '24px',
        }}
      >
        Click on this
      </button>
    </div>
  );
}

export default Contact;
