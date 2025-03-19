import { Grid, GridCol, Stack } from "@mantine/core";
import React, { ReactNode } from "react";
import PageTitle from "../global/PageTitle";

interface Props {
  children: ReactNode;
}

const TwoColumns = ({ children }: Props) => {
  const [left, right] = React.Children.toArray(children);

  return (
    <Stack>
      <PageTitle />
      <Grid>
        <GridCol span={{ base: 12, md: 8 }}>{left}</GridCol>
        <GridCol span={{ base: 12, md: 4 }}>{right}</GridCol>
      </Grid>
    </Stack>
  );
};

export default TwoColumns;
