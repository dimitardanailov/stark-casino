"use client";

import { FC } from "react";

import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";

import schema from "./schema";

import API, { Route } from "@/config/api/routes";

const Form: FC = () => {
  const route = API.users.createUser;

  const { register, handleSubmit } = useForm({
    resolver: joiResolver(schema),
  });

  return (
    <>
      <form onSubmit={handleSubmit((d) => console.log(d))}>
        <input {...register("firstName")} />
        <input {...register("lastName")} />
        <input type="email" {...register("email")} />
        <input type="submit" />
      </form>
    </>
  );
};

export default Form;
