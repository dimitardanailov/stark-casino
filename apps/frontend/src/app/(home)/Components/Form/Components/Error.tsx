"use client";

import { FC } from "react";

import { Box, Grid } from "@mui/material";

export interface Props {
  error: string;
}

const Error: FC<Props> = ({ error }) => {
  return (
    <Grid item xs={12}>
      <Box color="error.main">{error}</Box>
    </Grid>
  );
};

export default Error;
