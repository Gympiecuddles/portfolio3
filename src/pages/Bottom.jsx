import styled from "styled-components";
import { motion, useMotionValue, useTransform } from "framer-motion";

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
  div{
    position: relative;
    display: flex;
    width: 1000px;
    height: 600px;
    border-radius: 30px;
    overflow: hidden;
    cursor: grab;
    article {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 1000px;
      height: 600px;
      color: white;
      border-radius: 30px;
      background-color: black; 
      z-index: 3;
    }
  }
`;

const items = [1, 2, 3];
const height = 600;

export default function Bottom() {
  const scrollX = useMotionValue(0);

  console.log(items);
  return (
    <BottomBox>
        <motion.div 
          whileTap={{ cursor: "grabbing" }}
          style={{ x: scrollX }} 
          drag="x"
          dragConstraints={{ left: "-1000px", right: 0 }}
          >
            {items.map((items) => { 
              return (
                <motion.article 
                  key={items.toString()}>Hi</motion.article>
              ); 
          })} 
        </motion.div>  
    </BottomBox>
  );
}
