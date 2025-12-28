import { useState } from "react";
import AuthLayout from "../Components/auth/AuthLayout";
import LoginForm from "../Components/auth/LoginForm";
import SignupForm from "../Components/auth/SignUpForm";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";



const Auth = () => {
  const [mode, setMode] = useState("signup");

  return (
    <>
    <Navbar/>
    <AuthLayout>
      {mode === "signup" ? (
        <SignupForm onSwitch={() => setMode("login")} />
      ) : (
        <LoginForm onSwitch={() => setMode("signup")} />
      )}
    </AuthLayout>
    <Footer/>
    </>
  );
};

export default Auth;
