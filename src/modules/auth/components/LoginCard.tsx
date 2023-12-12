import { Card, CardContent } from "@/components/ui/card";
import { LoginForm } from "./forms/login-form";
import LoginBackground from "@/assets/svg/undraw_mobile_encryption_re_yw3o.svg";
import LoginIcon from "@/assets/svg/undraw_special_event_-4-aj8.svg";

export function LoginCard() {
  return (
    <div className="flex items-center justify-center h-screen overflow-hidden">
      <div className="flex">
        <Card className="w-full md:w-[33rem] xs mr-20 p-[3.1rem] bg-background/20 border-2  dark:bg-white/5  flex flex-col md:flex-row items-center justify-center overflow-hidden">
          <CardContent className="w-full flex flex-col items-center p-0">
            <h1 className="text-2xl pt-4 font-bold dark:text-white">
              Hola, Bienvenido de vuelta
            </h1>
            <p className="text-sm pt-1 pb-4 text-gray-400">
              Compra aquí tu ticket para el comedor.
            </p>
            <div
              className="w-full h-96 p-5 mb-5 mt-10 flex items-center justify-center"
              style={{
                backgroundImage: `url(${LoginBackground})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
          </CardContent>
        </Card>
        <Card className="w-full md:w-[30rem] ml-35 mb-10 p-[1.5rem]  bg-background/20  backdrop-blur-xl dark:backdrop-blur-none border-background/30 dark:border-none flex flex-col md:flex-row items-center justify-center overflow-hidden">
          <CardContent className="w-full flex  flex-col items-center p-0">
            <div
              className="w-full h-56 p-5 mb-2 mt-5 flex items-center justify-center"
              style={{
                backgroundImage: `url(${LoginIcon})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <h1 className="text-2xl mb-5 pt-4 font-bold dark:text-white">
              Iniciar Sesión
            </h1>
            <LoginForm />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
