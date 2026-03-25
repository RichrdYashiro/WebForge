import { Title, Box } from "@mantine/core";
import { UserBtn } from "../../components/UserBtn/user-btn";

export const Login = () => {
  return (
    <Box className="flex-grow flex flex-col items-center justify-center text-center">
      <div className="cosmic-card p-12 rounded-[3rem] border border-white/5 bg-white/5 backdrop-blur-3xl shadow-2xl">
        <Title className="text-white text-4xl font-black mb-2 uppercase tracking-tighter">
          Login
        </Title>

        <div className="flex flex-col gap-4">
          <UserBtn link="/registration">I not have account</UserBtn>
        </div>
      </div>
    </Box>
  );
};
