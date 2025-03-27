import { Stack, Text } from "@mantine/core";
import React from "react";

interface Props {
  grade: string;
}

const ResultGrade = ({ grade }: Props) => {
  return (
    <Stack justify="center" align="center" mih={200}>
      <Text>ResultGrade: {grade}</Text>
    </Stack>
  );
};

export default ResultGrade;
