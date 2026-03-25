import { Title, Box, Input } from "@mantine/core";
import { UserBtn } from "../../components/UserBtn/user-btn";
import { useState } from "react";
import { useLoginMutation } from "../../services/authapi";
import { notifications } from "@mantine/notifications";
import { ButtonForm } from "../../components/";
export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, { isLoading, isError }] = useLoginMutation();

  const onLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await login({ email, password }).unwrap();
      notifications.show({
        title: "Success!",
        message: "Welcome back, Lead Architect",
        color: "green",
        autoClose: 3000,
      });
    } catch (err) {
      console.error("Login failed:", err);
      notifications.show({
        title: "Auth Error",
        message: "Invalid email or password. Please try again.",
        color: "red",
        icon: "❌",
      });
    }
  };

  return (
    <Box className="flex-grow flex flex-col items-center justify-center text-center">
      <div className="cosmic-card p-12 rounded-[3rem] border border-white/5 bg-white/5 backdrop-blur-3xl shadow-2xl">
        <Title className="text-white text-4xl font-black mb-2 uppercase tracking-tighter">
          Login
        </Title>
        <form onSubmit={onLogin} className="flex flex-col gap-4">
          <Input
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <ButtonForm type="submit" loading={isLoading}>
            Login
          </ButtonForm>
          {isError && (
            <div className="text-red-500">
              Login failed. Check your credentials.
            </div>
          )}
        </form>
        <div className="flex flex-col gap-4 mt-4">
          <UserBtn link="/registration">I not have account</UserBtn>
        </div>
      </div>
    </Box>
  );
};
