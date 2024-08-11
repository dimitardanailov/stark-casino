"use client";

import { FC } from "react";

import Error from "./Error";

const ConflictError: FC = () => {
  const error = "User with this email already exists.";

  return <Error error={error} />;
};

export default ConflictError;
