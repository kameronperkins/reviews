import React from 'react';

export interface PlayProps {
  title: string;
}

const Play: React.FC<PlayProps> = ({ title }) => {
  return (
    <div>
      {title}
    </div>
  );
}

export default Play;