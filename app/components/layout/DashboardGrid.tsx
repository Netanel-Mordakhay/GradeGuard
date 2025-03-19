import { Box, Grid, GridCol, Skeleton } from "@mantine/core";
import React from "react";

const child = <Skeleton height={220} radius="md" animate={false} />;

const DashboardGrid = () => {
  return (
    <Grid>
      <GridCol span={{ base: 12, sm: 3 }}>{child}</GridCol>
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
