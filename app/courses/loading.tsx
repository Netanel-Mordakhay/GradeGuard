import { Stack, Grid, GridCol, Skeleton } from "@mantine/core";
import React from "react";
import PageTitle from "../components/global/PageTitle";
import TwoColumnsSkeleton from "../components/layout/TwoColumnsSkeleton";

const loading = () => {
  return <TwoColumnsSkeleton />;
};

export default loading;
