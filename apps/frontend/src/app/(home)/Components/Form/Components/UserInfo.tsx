"use client";

import { FC } from "react";

import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

import User from "@/types/User";

import { testingIdentifiers } from "../../../db";

export interface Props {
  user: User;
}

const UserInfo: FC<Props> = ({ user }) => {
  return (
    <>
      <Alert
        severity="success"
        className="mt-4"
        data-testid={testingIdentifiers.formAlertBox}
      >
        User successfully created!
      </Alert>

      <Card sx={{ minWidth: 275, mt: 2 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            {user.firstName} {user.lastName}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Email: {user.email}
          </Typography>
          <Typography variant="body2">
            Registered At: {new Date(user.registeredAt).toLocaleString()}
          </Typography>
        </CardContent>
      </Card>

      <Stack spacing={2} direction="row" mt={2}>
        <Button variant="contained">Create Another User</Button>
        <Button variant="outlined">View All Users</Button>
        <Button variant="contained">Edit User</Button>
      </Stack>
    </>
  );
};

export default UserInfo;
