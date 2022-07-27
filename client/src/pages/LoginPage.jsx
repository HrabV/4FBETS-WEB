import { MainLayout } from "../layouts";
import { Login } from "../components/login";
import { useState } from "react";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5133/auth/login", {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    localStorage.setItem(
      "user",
      JSON.stringify({
        nickname: data.nickname,
        email: data.email,
        role: data.role,
      })
    );

    localStorage.setItem("accessToken", data.accessToken);
  };
  return (
    <MainLayout>
      <Login />
    </MainLayout>
  );
};
