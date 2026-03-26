import { Title, Text, Box } from "@mantine/core";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRegisterMutation } from "../../services/authapi";
import { registerSchema } from "../../schemas/register";
import { CustomInput } from "../../components/CustomInput/CustomInput";
import { ButtonForm, UserBtn } from "../../components";
import { notifications } from "@mantine/notifications";
import type { FetchBaseQueryError } from "@reduxjs/toolkit/query";

export const Registration = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: zodResolver(registerSchema),
    mode: "onBlur",
    reValidateMode: "onChange",
  });

  const [registerUser, { isLoading }] = useRegisterMutation();

  const onRegistation = async (data: any) => {
    try {
      await registerUser(data).unwrap();
      notifications.show({
        title: "Success!",
        message: "Welcome, Architect",
        color: "green",
      });
    } catch (err) {
      const fetchError = err as FetchBaseQueryError;
      notifications.show({
        title: "Error!",

        message:
          fetchError.status === "FETCH_ERROR"
            ? "Server is offline"
            : "Registration failed",
        color: "red",
      });
    }
  };

  return (
    <Box className="flex-grow flex flex-col items-center justify-center text-center">
      <div className="cosmic-card p-12 rounded-[3rem] border border-white/5 bg-white/5 backdrop-blur-3xl shadow-2xl">
        <Title className="text-white text-4xl font-black mb-2 uppercase tracking-tighter">
          Registration
        </Title>
        <Text className="text-gray-500 mb-10 text-[10px] font-bold uppercase tracking-[0.3em]">
          Create your developer identity
        </Text>

        <form
          onSubmit={handleSubmit(onRegistation)}
          className="flex flex-col gap-4"
        >
          <CustomInput
            placeholder="Name"
            {...register("name")}
            error={errors.name?.message}
          />

          <CustomInput
            placeholder="Surname"
            {...register("surname")}
            error={errors.surname?.message}
          />

          <CustomInput
            placeholder="Email"
            {...register("email")}
            error={errors.email?.message}
          />

          <CustomInput
            placeholder="Password"
            type="password"
            {...register("password")}
            error={errors.password?.message}
          />

          <CustomInput
            placeholder="Repeat Password"
            type="password"
            {...register("confirmPassword")}
            error={errors.confirmPassword?.message}
          />

          <ButtonForm
            type="submit"
            className="w-full"
            loading={isLoading}
            disabled={!isValid || isLoading}
          >
            Register
          </ButtonForm>
        </form>

        <div className="flex flex-col gap-4 mt-6">
          <UserBtn link="/login">I have an account</UserBtn>
          <UserBtn link="/">Back</UserBtn>
        </div>
      </div>
    </Box>
  );
};
