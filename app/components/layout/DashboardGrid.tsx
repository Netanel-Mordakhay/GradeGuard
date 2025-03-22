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
      <GridCol span={{ base: 12, md: 6, xl: 3 }}>{child1}</GridCol>
      <GridCol span={{ base: 12, md: 6, xl: 4 }}>{child}</GridCol>
      <GridCol span={{ base: 12, md: 6, xl: 5 }}>{child}</GridCol>
      <GridCol span={{ base: 12, md: 6, xl: 4 }}>{child}</GridCol>
      <GridCol span={{ base: 12, md: 6, xl: 3 }}>{child}</GridCol>
      <GridCol span={{ base: 12, md: 6, xl: 3 }}>{child}</GridCol>
      <GridCol span={{ base: 12, md: 6, xl: 6 }}>{child}</GridCol>
    </Grid>
  );
};

export default DashboardGrid;
