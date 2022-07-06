import React from 'react';

// Need to write component code for ChipWrapper using styled component by replacing `null` value
export const ChipWrapper = null

const Chip = ({ onClick, isSelected, children }) => {
    return (
        <ChipWrapper onClick={onClick}>{children}</ChipWrapper>
    );
}

export default Chip;