import React from 'react';

// Need to write component code for StyledInput using styled component by replacing `null` value
export const StyledInput = null
  

const Input = ({ type, placeholder, onSubmit, children }) => {
    return (
        <StyledInput onSubmit={onSubmit} placeholder={placeholder} type={type} />
    );
}

export default Input;