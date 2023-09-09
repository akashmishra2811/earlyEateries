
import { useState } from "react";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";
export default function AuthenticationPage() {
  const [isSignUp , setIsSignUp] = useState(true)
  return (
    <>
      {isSignUp === true ? (
        <SignInForm setLogic={setIsSignUp} />
      ) : (
        <SignUpForm setLogic={setIsSignUp} />
      )}
    </>
  );

}