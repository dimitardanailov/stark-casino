"use client";

import { FC } from "react";

import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import API, { Route } from "@/config/api/routes";

import schema from "./schema";

const Form: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: joiResolver(schema),
  });

  const onSubmit = async (data: any) => {
    try {
      const route: Route = API.users.createUser;

      const input = `${route.DOMAIN}${route.URI}`;
      const body = JSON.stringify(data);

      const response = await fetch(input, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body,
      });

      // Check if the response status is not OK
      if (!response.ok) {
        // You can handle different status codes here
        switch (response.status) {
          case 400:
            console.log("response code: 400");
            break;
          case 409:
            console.log("response code: 409");
            break;
          case 500:
            console.log("response code: 409");
            break;
          default:
            throw new Error(`Unexpected error: ${response.status}`);
        }
      }

      const result = await response.json();

      console.log("Success:", result);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
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
        <Grid item xs={12}>
          <Button fullWidth variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Form;
