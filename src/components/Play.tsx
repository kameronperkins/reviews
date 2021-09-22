import styled from '@emotion/styled';
import React from 'react';

export interface PlayProps {
  title: string;
}

const Play: React.FC<PlayProps> = ({ title }) => {
  const Play = styled.div`
    padding: 1rem;
    border: 1px solid rgba(0,0,0,0.6);
    border-radius: 4px;
  `;
  return (
    <Play>
      {title}
    </Play>
  );
}

export default Play;