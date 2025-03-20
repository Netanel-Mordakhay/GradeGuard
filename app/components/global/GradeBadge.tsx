import { Badge } from "@mantine/core";
import React from "react";

interface Props {
  grade: number;
}

const GradeBage = ({ grade }: Props) => {
  const color = grade > 85 ? "green" : grade > 60 ? "yellow" : "red";
  return <Badge color={color}>{grade}</Badge>;
};

export default GradeBage;
