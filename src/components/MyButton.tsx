import React from 'react'
import './MyButton.css';

interface ButtonProps {
  title: string,
  onClick: () => void;
}

const MyButton: React.FC<ButtonProps> = ({
  title,
  onClick
}) => {
  return (
    <button className='button' onClick={onClick}>
      <span className='title'>{title}</span>
    </button>
  )
}

export default MyButton;

