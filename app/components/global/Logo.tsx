import { Box, Title } from "@mantine/core";
import React from "react";

interface Props {
  large?: boolean;
}

const Logo = ({ large }: Props) => {
  const classSize = large ? "big" : "small";
  // 28
  return (
    <Box className={`logo-container-${classSize}`}>
      <Title size={large ? 48 : 28}>
        <span>Grade</span>
        <span className="blue-filled">Guard</span>
      </Title>
      <img src="/images/hat.webp" className={`logo-hat-${classSize}`} />
    </Box>
  );
};

export default Logo;
