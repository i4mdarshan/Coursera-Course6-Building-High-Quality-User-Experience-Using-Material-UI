import React from "react";
import styled from "styled-components";

// Need to write component code for StyledIcon using styled component by replacing `null` value
export const StyledIcon = styled.i`
    color: black;
`;

const Icon = ({onClick, children, className}) => {
    return <StyledIcon className={className} onClick={onClick} />
}

export default Icon;