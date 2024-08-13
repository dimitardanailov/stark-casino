"use client";

import { FC } from "react";

import Error from "./Error";

import { testingIdentifiers } from "../../../db";

const ConflictError: FC = () => {
  const error = "User with this email already exists.";

  return <Error error={error} testingId={testingIdentifiers.errorUserExists} />;
};

export default ConflictError;
