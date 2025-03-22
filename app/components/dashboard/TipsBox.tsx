"use client";
import { Blockquote } from "@mantine/core";
import { IconInfoCircle } from "@tabler/icons-react";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { tips } from "../../constants";

const TipsBox = () => {
  const [tipIndex, setTipIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTipIndex(Math.floor(Math.random() * tips.length));
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const tip = tips[tipIndex];
  const icon = <IconInfoCircle />;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={tipIndex}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.5 }}
      >
        <Blockquote color="blue" cite={`– ${tip.author}`} icon={icon} m="md">
          {tip.text}
        </Blockquote>
      </motion.div>
    </AnimatePresence>
  );
};

export default TipsBox;
