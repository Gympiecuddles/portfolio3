import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Word = styled(motion.span)`
  display: inline-block;
  margin-right: 0.16em;
  margin-left: 0.16em;
  white-space: nowrap;
`;

const Character = styled(motion.span)`
  display: inline-block;
  margin-right: -0.04em;
`;

export default function AnimatedTitle(prop) {
  const text = prop.text;  
  
  const wordAnimation = {
    hidden: {},
    visible: {},
  };
  
  const characterAnimation = {
    hidden: {
      opacity: 0,
      y: `0.30em`,
    },
    visible: {
      opacity: 1,
      y: `0em`,
      transition: {
        duration: 1.2,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };
  
  return (
    <>
      {text.split(" ").map((word, index) => {
        return (
          <Word
            aria-hidden="true"
            key={index}
            initial="hidden"
            whileInView="visible"
            variants={wordAnimation}
            transition={{
              delayChildren: index * 0.55,
              staggerChildren: 0.08,
            }}
          >
            {word.split("").map((character, index) => {
              return (
                <Character
                  aria-hidden="true"
                  key={index}
                  variants={characterAnimation}
                >
                  {character}
                </Character>
              );
            })}
          </Word>
        );
      })}
    </>
  );
}