"use client";
import React, { useActionState } from "react";
import { SignUp } from "../actions/auth";

const page = () => {
  const [state, action, pending] = useActionState(SignUp, undefined);
  return (
    <div>
      <form action={action} className="flex flex-col">
        <input type="text" name="name" placeholder="Name" />
        {state?.errors?.name && <p>{state.errors.name}</p>}
        <input type="text" name="email" placeholder="Email" />
        {state?.errors?.email && <p>{state.errors.email}</p>}
        <input type="text" name="password" placeholder="Password" />
        {state?.errors?.password && <p>{state.errors.password}</p>}
        <button type="submit">sign up</button>
      </form>
    </div>
  );
};

export default page;
