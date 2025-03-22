"use client";
import { Blockquote, Card, Paper } from "@mantine/core";
import { IconQuote } from "@tabler/icons-react";
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
  const icon = <IconQuote />;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={tipIndex}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.5 }}
      >
        <Paper>
          <Blockquote color="blue" cite={`– ${tip.author}`} icon={icon} m="md">
            "{tip.text}"
          </Blockquote>
        </Paper>
      </motion.div>
    </AnimatePresence>
  );
};

export default TipsBox;
