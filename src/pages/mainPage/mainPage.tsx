import { Title, Text, Group, Box } from "@mantine/core";
import type { RootState } from "../../store/store";
import { UserBtn } from "../../components/UserBtn/user-btn";
import { useSelector } from "react-redux";

export function MainPage() {
  const user = useSelector((state: RootState) => state.auth.user);
  const isAuth = useSelector((state: RootState) => state.auth.isAuth);
  return (
    <Box className="min-h-screen flex flex-col relative selection:bg-purple-500/30 bg-[#020203] overflow-x-hidden">
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="neon-glow bg-purple-600/10 w-[60vw] h-[60vw] -top-[10%] -left-[10%] animate-pulse-slow" />
        <div
          className="neon-glow bg-blue-600/10 w-[50vw] h-[50vw] bottom-[-10%] right-[-10%] animate-pulse-slow"
          style={{ animationDelay: "2s" }}
        />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] border border-white/5 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full" />

        <div
          className="absolute top-1/2 left-1/2 w-2 h-2 bg-purple-500 rounded-full blur-[2px]"
          style={{ animation: "orbit 25s linear infinite" }}
        />
      </div>
      {isAuth && <>{user?.name}</>}
      <main className="flex-grow relative z-10 flex flex-col justify-center">
        <div className="custom-container py-32 md:py-48">
          <section className="flex flex-col items-center text-center">
            <div className="px-6 py-2 mb-12 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl text-[10px] font-black tracking-[0.5em] text-purple-400 uppercase">
              Richard Yashiro / Lead Architect
            </div>

            <Title className="text-6xl md:text-[150px] font-[1000] tracking-[-0.08em] mb-10 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/20 leading-[0.8] drop-shadow-2xl">
              FORGE <br /> ETERNITY
            </Title>

            <Text className="max-w-2xl text-gray-500 text-lg md:text-2xl mb-14 font-medium leading-relaxed">
              Next-gen visual engineering for high-performance interfaces.{" "}
              <br />
              Where clean BEM architecture meets cosmic aesthetics.
            </Text>

            <Group gap="xl">
              <UserBtn link="/login">Start Building</UserBtn>
            </Group>
          </section>
        </div>
      </main>
    </Box>
  );
}
