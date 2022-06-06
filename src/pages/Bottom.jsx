import styled from "styled-components";
import { motion } from "framer-motion";

import me from '../assets/me.png';

const BottomBox = styled(motion.div)`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 1000px;
  background-color: #e9f0dd60;
  border-radius: 10px;
  z-index: 2;
  img {
    margin: 5px;
    padding: 0;
    width: auto;
    height: 100%;
    border-radius: 10px;
    box-shadow: 0px 8px 30px #a4b485;
    transform: translateX(25%);
  }
  p { 
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5px;
    padding: 0;
    width: 50%;
    height: 60%;
    font-size: 100px;
    border-radius: 10px;
    box-shadow: 10px 10px 30px #a4b485;
  }
`;
export default function Bottom() {
  return (
    <BottomBox>
      <img src={me} alt=""></img>
      <p>Creative web developer currently residing in West Palm Beach.</p>
    </BottomBox>
  );
}
