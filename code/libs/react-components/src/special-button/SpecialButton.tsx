import React from 'react';

export interface SpecialButtonProps {
  name: string;
}

const SpecialButton: React.FC<SpecialButtonProps> = ({ name }) => (
  <button style={{ borderColor: 'orange', padding: '10px' }}>{name}!</button>
);

export default SpecialButton;
