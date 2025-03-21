import { Box, Grid, GridCol, Skeleton } from "@mantine/core";
import React, { ReactNode } from "react";

const child = <Skeleton height={220} radius="md" animate={false} />;

interface Props {
  children: ReactNode;
}

const DashboardGrid = ({ children }: Props) => {
  const [child1] = React.Children.toArray(children);
  return (
    <Grid>
      <GridCol span={{ base: 12, sm: 3 }}>{child1}</GridCol>
      <GridCol span={{ base: 12, sm: 4 }}>{child}</GridCol>
      <GridCol span={{ base: 12, sm: 5 }}>{child}</GridCol>
      <GridCol span={{ base: 12, sm: 4 }}>{child}</GridCol>
      <GridCol span={{ base: 12, sm: 3 }}>{child}</GridCol>
      <GridCol span={{ base: 12, sm: 3 }}>{child}</GridCol>
      <GridCol span={{ base: 12, sm: 6 }}>{child}</GridCol>
    </Grid>
  );
};

export default DashboardGrid;
