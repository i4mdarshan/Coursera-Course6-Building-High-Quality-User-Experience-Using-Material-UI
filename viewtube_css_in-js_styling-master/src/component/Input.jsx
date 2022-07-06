import React from 'react';
import styled from 'styled-components';

// Need to write component code for StyledInput using styled component by replacing `null` value
export const StyledInput = styled.input`
    color: white
    border: 1px solid black;
`;
  

const Input = ({ type, placeholder, onSubmit, children }) => {
    return (
        <StyledInput onSubmit={onSubmit} placeholder={placeholder} type={type} />
    );
}

export default Input;