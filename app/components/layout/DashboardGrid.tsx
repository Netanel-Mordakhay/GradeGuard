import { Grid, GridCol, SimpleGrid, Skeleton, Stack } from "@mantine/core";
import React, { ReactNode } from "react";

const child = <Skeleton height={220} radius="md" animate={false} />;
const getChild = (height: number) => (
  <Skeleton height={height} radius="md" animate={false} />
);
const BASE_HEIGHT = 360;
const getSubHeight = (children: number, spacing: number) =>
  BASE_HEIGHT / children - spacing * ((children - 1) / children);

interface Props {
  children: ReactNode;
}

const DashboardGrid = ({ children }: Props) => {
  const [child1, child2, child3, child4] = React.Children.toArray(children);
  return (
    <Grid>
      <GridCol span={{ base: 12, md: 6, xl: 3 }}>
        <Stack>
          {child1}
          {child2}
        </Stack>
      </GridCol>
      <GridCol span={{ base: 12, md: 6, xl: 5 }}>
        <Stack>
          {child2}
          {child}
        </Stack>
      </GridCol>
      <GridCol span={{ base: 12, md: 6, xl: 4 }}>
        <Stack>
          {child3}
          {child4}
        </Stack>
      </GridCol>
    </Grid>
  );
};

export default DashboardGrid;
