"use client";

import { FC, useState } from "react";

import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import { createUser } from "@/services/userService";

import { testingIdentifiers } from "../../db";

import ErrorType from "@/types/ErrorType";
import User from "@/types/User";

import {
  BadRequest,
  ConflictError,
  NetworkError,
  ServerError,
  UnexpectedError,
  UserInfo,
} from "./Components";

import schema from "./schema";

const Form: FC = () => {
  const [errorType, setErrorType] = useState<ErrorType | null>(null);
  const [createdUser, setCreatedUser] = useState<User | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: joiResolver(schema),
  });

  const onSubmit = async (data: any) => {
    setCreatedUser(null);

    try {
      const response = await createUser(data);
      const user: User = response.user as User;

      // Set the created user to state
      setCreatedUser(user);

      // Clear any previous errors
      setErrorType(null);
    } catch (error) {
      if (error instanceof Response) {
        switch (error.status) {
          case 400:
            setErrorType("BadRequest");
            break;
          case 409:
            setErrorType("Conflict");
            break;
          case 500:
            setErrorType("ServerError");
            break;
          default:
            setErrorType("UnexpectedError");
        }
      } else {
        setErrorType("NetworkError");
      }
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="mt-4"
      data-testid={testingIdentifiers.formComponent}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="First Name"
            {...register("firstName")}
            error={!!errors.firstName}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Last Name"
            {...register("lastName")}
            error={!!errors.lastName}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Email"
            type="email"
            {...register("email")}
            error={!!errors.email}
          />
        </Grid>
        {errorType === "Conflict" && <ConflictError />}
        {errorType === "BadRequest" && <BadRequest />}
        {errorType === "ServerError" && <ServerError />}
        {errorType === "NetworkError" && <NetworkError />}
        {errorType === "UnexpectedError" && <UnexpectedError />}
        <Grid item xs={12}>
          <Button fullWidth variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </Grid>
      </Grid>

      {/* Success Message and User Details */}
      {createdUser && <UserInfo user={createdUser}></UserInfo>}
    </Box>
  );
};

export default Form;
