"use client";

import { FC } from "react";

import Error from "./Error";

const BadRequest: FC = () => {
  const error = "Invalid input. Please check your data.";

  return <Error error={error} />;
};

export default BadRequest;
