import { Box, Title } from "@mantine/core";
import Image from "next/image";
import hatIcon from "../../public/images/hat.webp";
import React from "react";

const LogoSmall = () => {
  return (
    <Box className="logoContainerSmall">
      <Title>
        <span className="logoTitleSmall">Grade</span>
        <span className="logoTitleSmall logoTitleBlue">Guard</span>
      </Title>
      <Image src={hatIcon} className="logoHatSmall" />
    </Box>
  );
};

export default LogoSmall;
