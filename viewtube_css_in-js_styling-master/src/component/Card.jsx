import React from 'react';
import styled from "styled-components";

// Need to write component code for StyledCard using styled component by replacing `null` value
export const StyledCard = styled.div`
    width: 100%;
    background-color: #282c34;
    color: #d3d3d3
`;

// Need to write component code for VideoImage using styled component by replacing `null` value
export const VideoImage = styled.img`
    width: 100%;
    height: 200px;
`;

// Need to write component code for CardSubtitle using styled component by replacing `null` value
export const CardSubtitle = styled.h4`
    color: #d3d3d3;
`;

// Need to write component code for CardTitle using styled component by replacing `null` value
export const CardTitle = styled.h2`
    color: #000;
`;

const Card = ({ onClick, isSelected, src, alt, title, subtitle, children }) => {
    return (
        <StyledCard onClick={onClick}>
            <VideoImage src={src} alt={alt} />
            <CardTitle>{title}</CardTitle>
            <CardSubtitle>{subtitle}</CardSubtitle>
            {children}
        </StyledCard>
    );
}

export default Card;