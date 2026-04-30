import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import paint from '../../assets/paint.webm';
import DMSVid from '../../assets/DominionDms.mp4';
import HRISVid from '../../assets/HrisTeam.mp4';
import ONWVid from '../../assets/OneNightWindow.mp4';

let ballSize;
if (window.innerWidth > (window.innerHeight * 1.4)) {
    ballSize = "100vh";
} else {
    ballSize = "54vw";
}

const CircleVid = styled(motion.video)`
    width: ${ballSize};
    height: ${ballSize};
    border-radius: 50%;
    object-fit: fill;
    filter: brightness(90%);
    z-index: 0;
`;

const Video0 = () => {
    return ( 
        <CircleVid 
            initial={{opacity: 0}} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 2}} 
            autoPlay 
            loop 
            mute>
            <source src={paint} type="video/webm" />
        </CircleVid>
    )
}

const Video1 = () => {
    return ( 
        <CircleVid 
            initial={{opacity: 0}} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 2}} 
            autoPlay 
            loop 
            mute>
            <source src={DMSVid} type="video/mp4" />
        </CircleVid>
    )
}

const Video2 = () => {
    return ( 
        <CircleVid 
        initial={{opacity: 0}} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 2}} 
        autoPlay 
        loop 
        mute>
            <source src={HRISVid} type="video/mp4" />
        </CircleVid>
    )
}

const Video3 = () => {
    return ( 
        <CircleVid 
        initial={{opacity: 0}} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 2}} 
        autoPlay 
        loop 
        mute>
            <source src={ONWVid} type="video/mp4" />
        </CircleVid>
    )
}

export default function ProjectVids({project}) {
    
    if (project === 0) {
        return <Video0 />
    } else if (project === 1) {
        return <Video1 />
    } else if (project === 2) {
        return <Video2 />
    } else if (project === 3) {
        return <Video3 />
    }
}
