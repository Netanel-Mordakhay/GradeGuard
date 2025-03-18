import { Box, Title } from "@mantine/core";
import React from "react";

const LogoSmall = () => {
  return (
    <Box className="logo-container-small">
      <Title size={28}>
        <span>Grade</span>
        <span className="logo-title-blue">Guard</span>
      </Title>
      <img src="/images/hat.webp" className="logo-hat-small" />
    </Box>
  );
};

export default LogoSmall;
