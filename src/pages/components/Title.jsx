import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Position = styled(motion.p)`
    color: #f2fedc;
    font-size: 18px;
`;

const variants = {
  trigger: {
    opacity: 1,
    y: [-70, -43],
    transition: {
      ease: 'easeOut',
      duration: 1
    }
  },
  stop: {
     opacity: 0,
  }
};

export default function Title(props) {
  
  const [text, setText] = useState(0);

  useEffect(() => {
      const interval = setInterval(() => {
        let currentState = text + 1;
        setText(currentState);
      }, 1500);
      return () => clearInterval(interval);
    }, [text]);
  
  let listSelect = props.titleList[text % props.titleList.length];

  return (
    <Position 
      key={text}
      initial='stop'
      animate={'trigger'}
      variants={variants}
      >{listSelect}</Position>
  )
}