import { Title, Text, Box } from "@mantine/core";
import { UserBtn } from "../../components/UserBtn/user-btn";

export const Registration = () => {
  return (
    <Box className="flex-grow flex flex-col items-center justify-center text-center">
      <div className="cosmic-card p-12 rounded-[3rem] border border-white/5 bg-white/5 backdrop-blur-3xl shadow-2xl">
        <Title className="text-white text-4xl font-black mb-2 uppercase tracking-tighter">
          Join the Forge
        </Title>
        <Text className="text-gray-500 mb-10 text-[10px] font-bold uppercase tracking-[0.3em]">
          Create your developer identity
        </Text>

        <div className="flex flex-col gap-4">
          <UserBtn link="/login">I have an account</UserBtn>
          <UserBtn link="/">Back !</UserBtn>
        </div>
      </div>
    </Box>
  );
};
