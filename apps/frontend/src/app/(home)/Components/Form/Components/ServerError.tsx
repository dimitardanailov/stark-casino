"use client";

import { FC } from "react";

import Error from "./Error";

const ServerError: FC = () => {
  const error = "Server error. Please try again later.";

  return <Error error={error} />;
};

export default ServerError;
