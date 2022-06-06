import "@fontsource/titillium-web";
import styled from "styled-components";
import { motion, useTransform, useViewportScroll } from "framer-motion";

import paint from "./assets/paint.webm";
import Bottom from "./pages/Bottom";
import Top from "./pages/Top";

const HomeBox = styled.div`
  position: relative;
  width: 100%;
  height: 255vh;
  box-sizing: border-box;
  overflow: hidden;
  .topBox {
    grid-area: 1/1/2/3;
    width: 100%;
    height: 100%;
    background-color: #f2fedc;
    z-index: 1;
  }
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

export default function App() {
  const { scrollYProgress } = useViewportScroll();
  const scaleY = useTransform(scrollYProgress, [0, 0.5, 1], [8, 1, 6.5]);
  return (
    <HomeBox>
      <Video autoPlay loop muted>
        <source src={paint} type="video/mp4" />
      </Video>
      <div className="topBox">dddddd</div>
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
    </HomeBox>
  );
}

