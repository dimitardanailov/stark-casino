"use client";

import { FC } from "react";

import { Box, Grid } from "@mui/material";

export interface Props {
  error: string;
  testingId?: string;
}

const Error: FC<Props> = ({ error, testingId }) => {
  const dataTestingId = testingId ? testingId : "default-error";

  return (
    <Grid item xs={12}>
      <Box color="error.main" data-testing={dataTestingId}>
        {error}
      </Box>
    </Grid>
  );
};

export default Error;
