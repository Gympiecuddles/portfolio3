import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";

import useFindAngle from '../hooks/useFindAngle';
import ProjectVids from './components/ProjectVids';
import ProjectInfo from './components/ProjectInfo'

//styles
const TopBox = styled(motion.section)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 1100px;
  z-index: 2;
  span {
    order: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1100px;
    height: 1100px;
    background: rgba( 255, 255, 255, 0.2 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 13px );
    -webkit-backdrop-filter: blur( 13px );
    border-radius: 50%;
  }
`;

const Projects = styled(motion.div)`
  position: absolute;
  width: 1000px;
  height: 150px;
  background-color: #ffffff00;
  transform: rotate(0deg);
  z-index: 1;
  p {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background-color: #f1f7e6;
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    i {
      display: flex;
      justify-content: center;
      align-items: center;
      width:100%;
      height:100%;
      border-radius: 50%;
      font-style: normal;
      background-color: #f1f7e6;
    }
    i:hover {
      box-shadow: 0 0 10px 0 rgb(255, 255, 255);
    }
  }
`;

export default function Top() {
  //Tracking current rotation value
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const [angle1, setAngle1] = useState(120);
  const [angle2, setAngle2] = useState(240);
  const [angle3, setAngle3] = useState(0);

  //Tracking project info to show
  const [projectTracker, setProjectTracker] = useState(null);

  //FM varients based on state
  const BoxRotate1 = {
    animate: { rotate: [angle1 + "deg",(angle1 + 360) + "deg"], 
    transition: { repeat: Infinity, ease: "linear", duration: 20}}
  }
  
  const BoxRotate2 = {
    animate: { rotate: [angle2 + "deg",(angle2 + 360) + "deg"], 
    transition: { repeat: Infinity, ease: "linear", duration: 20}}
  }
  
  const BoxRotate3 = {
    animate: { rotate: [angle3 + "deg",(angle3 + 360) + "deg"], 
    transition: { repeat: Infinity, ease: "linear", duration: 20}}
  }

  const TextRotate1 = {
    animate: { rotate: [-angle1 + "deg",-(angle1 + 360) + "deg"],
    transition: { repeat: Infinity, ease: "linear", duration: 20}}
  }
  
  const TextRotate2 = {
    animate: { rotate: [-angle2 + "deg",-(angle2 + 360) + "deg"], 
    transition: { repeat: Infinity, ease: "linear", duration: 20}}
  }
  
  const TextRotate3 = {
    animate: { rotate: [-angle3 + "deg",-(angle3 + 360) + "deg"], 
    transition: { repeat: Infinity, ease: "linear", duration: 20}}
  }

  //Setting animation controls
  const rotateControls = useAnimation();

  useEffect(() => {
    rotateControls.start("animate");
  }, [rotateControls]) 

  const kill = () => {
    rotateControls.stop("animate");

    setAngle1(useFindAngle(ref1.current));
    setAngle2(useFindAngle(ref2.current));
    setAngle3(useFindAngle(ref3.current));
  }

  const revive = () => {
    rotateControls.start("animate");
  }
  
  const click1 = () => setProjectTracker(1);
  const click2 = () => setProjectTracker(2);
  const click3 = () => setProjectTracker(3);
  
  return (
    <TopBox>
      <span>
        <Projects 
          variants={BoxRotate1}  
          animate={rotateControls} 
          ref={ref1}
          ><motion.p
              variants={TextRotate1} 
              animate={rotateControls} 
              onHoverStart={kill}
              onHoverEnd={revive}>
                <motion.i 
                  whileHover={{color: "#ffffff", backgroundColor: "#070a00", scale: 1.1}}
                  whileTap={click1}
                  >Nick's Garage
                </motion.i>
          </motion.p>
        </Projects>
        <Projects 
          variants={BoxRotate2}  
          animate={rotateControls} 
          ref={ref2}
          ><motion.p
              variants={TextRotate2}
              animate={rotateControls}
              onHoverStart={kill}
              onHoverEnd={revive}>
                <motion.i 
                  whileHover={{color: "#ffffff", backgroundColor: "#070a00", scale: 1.1}}
                  whileTap={click2}
                  >Twisted Thread
                </motion.i>
            </motion.p>
        </Projects>
        <Projects 
          variants={BoxRotate3}  
          animate={rotateControls} 
          ref={ref3}
          ><motion.p
              variants={TextRotate3}
              animate={rotateControls}
              onHoverStart={kill}
              onHoverEnd={revive}>
                <motion.i 
                  whileHover={{color: "#ffffff", backgroundColor: "#070a00", scale: 1.1}}
                  whileTap={click3}
                  >HRIS Team
                </motion.i>
            </motion.p>
        </Projects>
        <ProjectVids project={projectTracker} />
      </span>
      <ProjectInfo project={projectTracker} />
    </TopBox>
  );
}
