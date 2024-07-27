import React from "react";
import AuthForm from "@/components/AuthForm";
import { getLoggedInUser } from "@/lib/actions/user.actions";

const SignUp = async () => {
  const loggedInUser = await getLoggedInUser; // Replace with actual logic to check if user is logged in
  console.log(loggedInUser);
  return (
    <section className="flex-center size-full max-sm:p-6">
      <AuthForm type="sign-up" />
    </section>
  );
};

export default SignUp;
