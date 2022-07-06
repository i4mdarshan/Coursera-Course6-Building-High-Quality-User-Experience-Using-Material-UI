import React from 'react';
import styled from 'styled-components';

// Need to write component code for ChipWrapper using styled component by replacing `null` value
export const ChipWrapper = styled.button`
    background-color: black;
    color: white;
    border-radius: 25px;
`;

const Chip = ({ onClick, isSelected, children }) => {
    return (
        <ChipWrapper onClick={onClick}>{children}</ChipWrapper>
    );
}

export default Chip;