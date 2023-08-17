import '../styles/components/Collapse.css'

import { useState, useRef } from 'react';

import arrowDown from '../assets/arrowDown.svg';

export default function Collapse(props) {
  const title = props.title;
  const content = props.content;
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  const toggleContent = () => {
    if (!isOpen) {
      const contentHeight = contentRef.current.scrollHeight;
      contentRef.current.style.maxHeight = `${contentHeight}px`;
    } else {
      contentRef.current.style.maxHeight = '0px';
    }
    setIsOpen(!isOpen);
  };

  return (
    <div className='collapse'>
      <div className='collapse-header' onClick={toggleContent}>
        {title}
        <img className='collapse-arrow' src={arrowDown} alt='arrow' style={isOpen ? { transform: 'rotate(180deg)' } : {}} />
      </div>
      <div className='collapse-content' ref={contentRef}>
        <div className='content-inner'>
          {typeof content === 'string' && content}

          {Array.isArray(content) && content.map((item, index) => (
            <li key={index}>{item}</li>
          ))}

          {(!Array.isArray(content) && typeof content !== 'string') && content}
        </div>
      </div>
    </div>
  )
}