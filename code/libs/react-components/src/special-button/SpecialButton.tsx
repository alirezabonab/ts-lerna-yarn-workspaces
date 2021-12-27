import React from 'react';

export interface SpecialButtonProps {
  name: string;
}

const SpecialButton: React.FC<SpecialButtonProps> = ({ name }) => (
  <button
    style={{
      borderColor: 'green',
      borderWidth: 'thick',
      padding: '10px',
      borderRadius: 8,
    }}
  >
    {name}!
  </button>
);

export default SpecialButton;
