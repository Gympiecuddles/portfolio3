import "@fontsource/titillium-web";
import styled from "styled-components";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import { BsArrowUp, BsArrowDown } from "react-icons/bs"

import paint from "./assets/paint.webm";
import Bottom from "./pages/Bottom";
import Top from "./pages/Top";
import Contact from "./pages/components/Contact";

const HomeBox = styled.div`
  position: relative;
  width: 100%;
  height: 255vh;
  box-sizing: border-box;
  overflow: hidden;
`;

const Video = styled.video`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 255vh;
    object-fit: cover;
    z-index: 0;
`;

const Name = styled(motion.p)`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  height: 100%;
  width: 100%;
  font-family: "Titillium", sans-serif;
  font-weight: 800;
  font-size: clamp(60px, 8vw, 400px);
  text-align: center;
  text-transform: uppercase;
  background-color: #ffffff;
  mix-blend-mode: screen;
  z-index: 1;
`;

const ContentBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 255vh;
  z-index: 2;
  background-color: #ffffff00;
`;

const StyledArrowBox = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  top: 1080px;
  left: 0;
  width: 200px;
  height: 100px;
  z-index: 1;
  p {
    margin: 10px;
    font-size: 22px;
  }
`;
const ArrowBox = motion(StyledArrowBox);

const UpArrow = styled(BsArrowUp)`
  font-size: 60px;
`;

const DownArrow = styled(BsArrowDown)`
  font-size: 60px;
`;

export default function App() {
  const { scrollYProgress } = useViewportScroll();
  //for Name 
  const scaleY = useTransform(scrollYProgress, [0, 0.5, 1], [8, 1, 6.5]);
  //for Arrows
  const opacity = useTransform(scrollYProgress, [0.4, 0.5, 0.6], [0, 1, 0]);
  
  //website opens at proper place
  window.onload = () => {
    window.scrollTo( 0, 1060 );
  };

  return (
    <HomeBox>
      <Video autoPlay loop muted>
        <source src={paint} type="video/mp4" />
      </Video>
      <Name style={{ scaleY }}>Richard Schembri</Name>
      <Name
        style={{
          scaleY,
          color: "#fff",
          backgroundColor: "#f2fedc",
          mixBlendMode: "multiply"
        }}
      >
        Richard Schembri
      </Name>
      <ContentBox>
        <Top />
        <Bottom />
      </ContentBox>
      <Contact />
      <ArrowBox style={{ opacity }}>
        <UpArrow />
        <p>Projects</p>
      </ArrowBox>
      <ArrowBox style={{opacity, top: "2300px"}}>
        <DownArrow />
        <p>About</p>
      </ArrowBox>
    </HomeBox>
  );
}

