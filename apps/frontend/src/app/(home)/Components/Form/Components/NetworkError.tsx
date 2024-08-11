"use client";

import { FC } from "react";

import Error from "./Error";

const NetworkError: FC = () => {
  const error = "Network error. Please check your connection.";

  return <Error error={error} />;
};

export default NetworkError;
