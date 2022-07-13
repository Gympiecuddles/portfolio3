import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import paint from '../../assets/paint.webm';
import noise from '../../assets/noise.mp4';

const CircleVid = styled(motion.video)`
    width: 1100px;
    height: 1100px;
    border-radius: 50%;
    object-fit: cover;
    filter: brightness(50%);
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
            <source src={paint} type="video/webm" />
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
            <source src={noise} type="video/webm" />
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
            <source src={paint} type="video/webm" />
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
