import React, { useState } from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { BsArrowUpLeft, BsArrowUpRight, BsArrowDownLeft, BsArrowDownRight } from 'react-icons/bs'

import me from '../assets/me.png';

const BottomBox = styled(motion.section)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 1000px;
  background-color: #e9f0dd60;
  border-radius: 10px;
  z-index: 2;
  h2 {
    align-self: flex-start;
    margin-top: 60px;
    font-size: 3em;
    z-index: 1;
  }
  div {
    position: absolute;
    display: flex;
    justify-content: center;
    width: 800px;
    height: 600px;
    background-color: #fff;
    border-radius: 30px;
    box-shadow: 0 10px 50px 0 #e7e7e7;
    overflow: hidden;
    cursor: grab;
    z-index: 1;
    h5 {
      position: absolute;
      bottom: -20%;
      font-size: 1.2em;
      color: #888787;
    }
    h3 {
      align-self: center;
      padding: 100px;
      border: solid 1px #000000;
    }
    p {

    }
  }
`;

const UpLeftArrow = styled(BsArrowUpLeft)`
    position: absolute;
    left: -10%;
    top: -10%;
    font-size: 2em;
    color: #888787;
`;

const UpRightArrow = styled(BsArrowUpRight)`
    position: absolute;
    right: -10%;
    top: -10%;
    font-size: 2em;
    color: #888787;
`;

const DownLeftArrow = styled(BsArrowDownLeft)`
    position: absolute;
    left: -10%;
    bottom: -10%;
    font-size: 2em;
    color: #888787;
`;

const DownRightArrow = styled(BsArrowDownRight)`
    position: absolute;
    right: -10%;
    bottom: -10%;
    font-size: 2em;
    color: #888787;
`;

export default function Bottom() {
  const [isVisible, setIsVisible] = useState(true);

  const handleClick = () => {setIsVisible(false)};

  return (
    <BottomBox>
        <h2>Dig deeper into who I am</h2>
        <AnimatePresence>
          {isVisible && 
            <motion.div 
            style={{ backgroundColor: "#ffffff00", overflow: "visible" }}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{ durration: 2 }}
            >
              <UpLeftArrow />
              <UpRightArrow/>
              <DownLeftArrow />
              <DownRightArrow />
              <h5>Drag Me</h5>
            </motion.div>
          }
        </AnimatePresence>
        <motion.div 
            drag
            dragConstraints={{ top: -400, right: 1100, bottom: 355, left: -1100 }}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
            dragElastic={0.5}
            whileTap={{ cursor: "grabbing", scale: .9 }}
          >
          
        </motion.div>
        <motion.div 
            drag
            dragConstraints={{ top: -400, right: 1100, bottom: 355, left: -1100 }}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
            dragElastic={0.5}
            whileTap={{ cursor: "grabbing", scale: .9 }}
          >
          <p>
            I'm a creative developer with years of experience in building products and 
            appealing web experiences. I've collaborated with individuals and teams to 
            build experiences for SMEs and large enterprises including Wise, Google, 
            Interswitch and Intelia.
          </p>
        </motion.div> 
        <motion.div 
            drag
            dragConstraints={{ top: -400, right: 1100, bottom: 355, left: -1100 }}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
            dragElastic={0.5}
            whileTap={{ cursor: "grabbing", scale: .9 }}
            onTap={handleClick}
          >
          <h3>Drag Me</h3>
        </motion.div>  
    </BottomBox>
  );
}
