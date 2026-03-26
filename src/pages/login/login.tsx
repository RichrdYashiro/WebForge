import { Title, Box } from "@mantine/core";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserBtn } from "../../components/UserBtn/user-btn";
import { useLoginMutation } from "../../services/authapi";
import { notifications } from "@mantine/notifications";
import { ButtonForm } from "../../components/";
import { authSchema } from "../../schemas/auth";
import { CustomInput } from "../../components/CustomInput/CustomInput";
import type { FetchBaseQueryError } from "@reduxjs/toolkit/query";

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: zodResolver(authSchema),
    mode: "onBlur",
    reValidateMode: "onChange",
  });

  const [loginUser, { isLoading }] = useLoginMutation();

  const onLogin = async (data: any) => {
    try {
      await loginUser(data).unwrap();
      notifications.show({
        title: "Success!",
        message: "Welcome back, Lead Architect",
        color: "green",
        autoClose: 3000,
      });
    } catch (err) {
      const fetchError = err as FetchBaseQueryError;
      notifications.show({
        title: "Error!",

        message:
          fetchError.status === "FETCH_ERROR"
            ? "Server is offline"
            : "Invalid email or password",
        color: "red",
      });
    }
  };

  return (
    <Box className="flex-grow flex flex-col items-center justify-center text-center">
      <div className="cosmic-card p-12 rounded-[3rem] border border-white/5 bg-white/5 backdrop-blur-3xl shadow-2xl">
        <Title className="text-white text-4xl font-black mb-2 uppercase tracking-tighter">
          Authorize your identity
        </Title>
        <form onSubmit={handleSubmit(onLogin)} className="flex flex-col gap-4">
          <CustomInput
            placeholder="email"
            type="email"
            {...register("login")}
            error={errors.login?.message}
            required
          />
          <CustomInput
            placeholder="Password"
            type="password"
            {...register("password")}
            error={errors.password?.message}
            required
          />
          <ButtonForm
            type="submit"
            loading={isLoading}
            disabled={!isValid || isLoading}
          >
            Login
          </ButtonForm>
        </form>
        <div className="flex flex-col gap-4 mt-4">
          <UserBtn link="/registration">I not have account</UserBtn>
        </div>
      </div>
    </Box>
  );
};
