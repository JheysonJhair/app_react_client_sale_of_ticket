import { Card, CardContent } from "@/components/ui/card";
import { LoginForm } from "./forms/login-form";
import LoginBackground from "@/assets/svg/undraw_special_event_-4-aj8.svg";
export function LoginCard() {
  return (
    <Card
      className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30
      w-full md:w-[30rem] h-full md:h-auto p-[4rem] lg:mx-0
      bg-background/20 dark:bg-slate-100 backdrop-blur-xl dark:backdrop-blur-none border-background/30 dark:border-none
      flex flex-col md:flex-row items-center justify-center overflow-hidden"
    >
      <CardContent className="w-full flex flex-col items-center p-0">
      <div
      className="w-full h-40 flex items-center justify-center"
      style={{
        backgroundImage: `url(${LoginBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >

    </div>
    <h1 className="text-2xl pt-4 pb-4 font-bold text-black">COMEDOR UNIVERSITARIO</h1>
        <LoginForm />
      </CardContent>
    </Card>
  );
}
