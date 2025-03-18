import { Grid, GridCol, Stack } from "@mantine/core";
import React, { ReactNode } from "react";
import PageTitle from "../global/PageTitle";

interface Props {
  children: ReactNode;
}

const TwoColumns = ({ children }: Props) => {
  return (
    <Stack>
      <PageTitle />
      <Grid>
        <GridCol span={{ base: 12, md: 8 }}>1</GridCol>
        <GridCol span={{ base: 12, md: 4 }}>{children}</GridCol>
      </Grid>
    </Stack>
  );
};

export default TwoColumns;
