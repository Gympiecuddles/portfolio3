import React, { useState } from "react";
import styled from "styled-components";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { BsArrowUpLeft, BsArrowUpRight, BsArrowDownLeft, BsArrowDownRight } from 'react-icons/bs'
import { GiDiamonds } from 'react-icons/gi';
import '@fontsource/titillium-web/700.css';

import me from '../assets/me.png';

import Tech from './components/Tech'
import Title from './components/Title'

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
    font-family: "Titillium Web", sans-serif;
    z-index: 0;
  }
`;

const Card1 = styled(motion.div)`
    position: absolute;
    display: flex;
    justify-content: center;
    width: 800px;
    height: 600px;
    background-color: #fff;
    outline: 5px #006e5f solid;
    outline-offset: -20px;
    border-radius: 30px;
    box-shadow: 0 10px 50px 0 #e7e7e7;
    overflow: hidden;
    cursor: grab;
    z-index: 0;
    img {
      position: absolute;
      bottom: 0;
      width: 450px;
      height: 680px;
      object-fit: cover;
      object-position: -37px 10px;
    }
    span {
      position: absolute;
      bottom: 0px;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 300px;
      height: 100px;
      outline: 2px #3d3c00 solid;
      outline-offset: -14px;
      border-radius: 5px;
      background-color: #006e5f;
      z-index: 3;
      h4 {
        margin-top: 15px;
        font-size: 23px;
        color: #f2fedc;
      }
    }
`;

const Card2 = styled(motion.div)`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 800px;
    height: 600px;
    background-color: #000000;
    outline: 5px #fafdf3 solid;
    outline-offset: -20px;
    border-radius: 30px;
    box-shadow: 0 10px 50px 0 #e7e7e7;
    overflow: hidden;
    cursor: grab;
    z-index: 0;
    span {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 200px;
      height: 50px;
      outline: 2px #fafdf3 solid;
      outline-offset: -7px;
      border-radius: 5px;
      background-color: #000000;
      z-index: 3;
      h4 {
        margin-top: 9px;
        margin-bottom: 5px;
        font-size: 20px;
        color: #fafdf3;
      }
    }
    p {
      margin: 40px;
      margin-left: 50px;
      font-size: 17px;
      color: #fafdf3;
    }
`;

const Card3 = styled(motion.div)`
    position: absolute;
    width: 800px;
    height: 600px;
    background-color: #fff;
    border-radius: 30px;
    box-shadow: 0 10px 50px 0 #e7e7e7;
    overflow: hidden;
    cursor: grab;
    z-index: 0;
    `;

const ArrowBox = styled(motion.div)`
    position: absolute;
    display: flex;
    justify-content: center;
    width: 800px;
    height: 600px;
    background-color: #fff;
    border-radius: 30px;
    box-shadow: 0 10px 50px 0 #e7e7e7;
    overflow: hidden;
    z-index: 0;
    h5 {
      position: absolute;
      bottom: -20%;
      font-size: 1.2em;
      color: #888787;
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

const ButtonBox = styled.div`
  position: absolute;
  bottom: 50px;
  z-index: 4;
  button {
    margin: 20px;
    width: 70px;
    height: 30px;
    font-weight: 600;
    border: none;
    outline: none;
    border-radius: 5px;
    background-color: #000000;
    color: #ffffff;
    cursor: pointer;
  }
`

const Diamond = styled(GiDiamonds)`
  font-size: 14px;
`;

export default function Bottom() {
  const [isVisible, setIsVisible] = useState(true);
  const [ZIndex1, setZIndex1] = useState(false);
  const [ZIndex2, setZIndex2] = useState(false);
  const [ZIndex3, setZIndex3] = useState(false);

  const handleVisible = () => {setIsVisible(false)};
  const handleZIndex1 = () => {setZIndex1(true); setZIndex2(false); setZIndex3(false);};
  const handleZIndex2 = () => {setZIndex1(false); setZIndex2(true); setZIndex3(false);};
  const handleZIndex3 = () => {setZIndex1(false); setZIndex2(false); setZIndex3(true);};

  const cardControls1 = useAnimation();
  const cardControls2 = useAnimation();
  const cardControls3 = useAnimation();

  const handleClickReset = () => {
    cardControls1.start({ x: 0, y: 0 });
    cardControls2.start({ x: 0, y: 0 });
    cardControls3.start({ x: 0, y: 0 });
    setZIndex1(false);
    setZIndex2(false);
    setZIndex3(false);
  }

  const handleClickDisplay = () => {
    cardControls1.start({ x: -810, y: 0 });
    cardControls2.start({ x: 0, y: 0 });
    cardControls3.start({ x: 810, y: 0 });
  }

  return (
    <BottomBox>
        <h2>Dig deeper</h2>
        <AnimatePresence>
          {isVisible && 
            <ArrowBox 
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
            </ArrowBox>
          }
          {!isVisible &&
            <ButtonBox>  
            <motion.button onClick={handleClickReset} whileHover={{boxShadow: "0 0 10px #fff24e", color: "#fff24e"}}>Reset</motion.button>
            <motion.button onClick={handleClickDisplay} whileHover={{boxShadow: "0 0 10px #fff24e", color: "#fff24e"}}>Display</motion.button>
            </ButtonBox>
          }
        </AnimatePresence>
        <Card3 
            drag
            dragConstraints={{ top: -400, right: 1100, bottom: 355, left: -1100 }}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
            dragElastic={0.5}
            whileTap={{ cursor: "grabbing", scale: .9}}
            onTapStart={handleZIndex1}
            style={{ zIndex: ZIndex1 ? 1 : 0 }}
            animate={cardControls3}
          >
          <Tech />
        </Card3>          
        <Card2 
            drag
            dragConstraints={{ top: -400, right: 1100, bottom: 355, left: -1100 }}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
            dragElastic={0.5}
            whileTap={{ cursor: "grabbing", scale: .9 }}
            onTapStart={handleZIndex2}
            style={{ zIndex: ZIndex2 ? 1 : 0 }}
            animate={cardControls2}
          >
          <span>
            <h4><Diamond /> Who am I? <Diamond /></h4>
          </span>          
          <p>
            South Florida based web developer, coding my way to Valhalla. 
            South Florida based web developer, coding my way to Valhalla. 
            South Florida based web developer, coding my way to Valhalla. 
            South Florida based web developer, coding my way to Valhalla. 
            South Florida based web developer, coding my way to Valhalla.  
          </p>
          <p>
            South Florida based web developer, coding my way to Valhalla. 
            South Florida based web developer, coding my way to Valhalla. 
            South Florida based web developer, coding my way to Valhalla. 
            South Florida based web developer, coding my way to Valhalla. 
            South Florida based web developer, coding my way to Valhalla.  
          </p>
          <p>
            South Florida based web developer, coding my way to Valhalla. 
            South Florida based web developer, coding my way to Valhalla. 
            South Florida based web developer, coding my way to Valhalla. 
            South Florida based web developer, coding my way to Valhalla. 
            South Florida based web developer, coding my way to Valhalla.  
          </p>
        </Card2> 
        <Card1 
            drag
            dragConstraints={{ top: -400, right: 1100, bottom: 355, left: -1100 }}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
            dragElastic={0.5}
            whileTap={{ cursor: "grabbing", scale: .9 }}
            onTap={handleVisible}
            onTapStart={handleZIndex3}
            style={{ zIndex: ZIndex3 ? 1 : 0 }}
            animate={cardControls1}
          >
          <img src={me} alt="" draggable={false} />
          <span>
            <h4><Diamond /> Richard Schembri <Diamond /></h4>
            <Title titleList={["Web Developer", "Software Engineer", "Programmer", "Coder"]} />
          </span>
        </Card1>
    </BottomBox>
  );
}
