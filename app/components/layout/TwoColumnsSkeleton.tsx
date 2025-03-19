import { Stack, Grid, GridCol, Skeleton } from "@mantine/core";
import React from "react";
import PageTitle from "../global/PageTitle";

const TwoColumnsSkeleton = () => {
  return (
    <Stack>
      <Skeleton height={70} />
      <Grid>
        <GridCol span={{ base: 12, md: 8 }}>
          <Skeleton height={600} />
        </GridCol>
        <GridCol span={{ base: 12, md: 4 }}>
          <Skeleton height={300} />
        </GridCol>
      </Grid>
    </Stack>
  );
};

export default TwoColumnsSkeleton;
