"use client";

import { FC } from "react";

import Error from "./Error";

const UnexpectedError: FC = () => {
  const error = "An unexpected error occurred.";

  return <Error error={error} />;
};

export default UnexpectedError;
