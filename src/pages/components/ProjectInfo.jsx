import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const InfoLeft = styled(motion.article)`
    order: 1;
    width: 400px;
    h2{
        font-size: 3em;
    }
    p{
        font-size: 2em;
    }
`;

const InfoRight = styled(motion.article)`
    order: 3;
    width: 400px;
    font-size: 3em;
    a {
        display: block;
    }
`;
const Text1 = () => {
    return (
        <>
            <InfoLeft initial={{opacity: 0}} animate={{ opacity: 1 }} transition={{ duration: 2}}>
                <h2>Nick's Garage</h2>
                <p>Auto repair garage based in West Palm Beach.</p>
            </InfoLeft>
            <InfoRight initial={{opacity: 0}} animate={{ opacity: 1 }} transition={{ duration: 2}}>
                <a>Live Site</a>
                <a>Github</a>
            </InfoRight>
        </>
    )
}

const Text2 = () => {
    return (
        <>
            <InfoLeft initial={{opacity: 0}} animate={{ opacity: 1 }} transition={{ duration: 2}}>
                <h2>Twisted Thread</h2>
                <p>Decorative macramé based in Miami.</p>
            </InfoLeft>
            <InfoRight initial={{opacity: 0}} animate={{ opacity: 1 }} transition={{ duration: 2}}>
                <a>Live Site</a>
                <a>Github</a>
            </InfoRight>
        </>
    )
}

const Text3 = () => {
    return (
        <>
            <InfoLeft initial={{opacity: 0}} animate={{ opacity: 1 }} transition={{ duration: 2}}>
                <h2>HRIS Team</h2>
                <p>HR consultant based in Delray.</p>
            </InfoLeft>
            <InfoRight initial={{opacity: 0}} animate={{ opacity: 1 }} transition={{ duration: 2}}>
                <a>Live Site</a>
                <a>Github</a>
            </InfoRight>
        </>
    )
}
export default function ProjectInfo({project}) {
   console.log(project);
    if (project === 1) {
        return <Text1 />
    } else if (project === 2) {
        return <Text2 />
    } else if (project === 3) {
        return <Text3 />
    }
}
