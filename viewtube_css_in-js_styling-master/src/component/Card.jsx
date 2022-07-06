import React from 'react';

// Need to write component code for StyledCard using styled component by replacing `null` value
export const StyledCard = null

// Need to write component code for VideoImage using styled component by replacing `null` value
export const VideoImage = null

// Need to write component code for CardSubtitle using styled component by replacing `null` value
export const CardSubtitle = null

// Need to write component code for CardTitle using styled component by replacing `null` value
export const CardTitle = null

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