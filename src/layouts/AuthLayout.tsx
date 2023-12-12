import { TailwindIndicator } from "@/components/tailwind-indicator";
import LoginBackground from "@/assets/bg-login.jpg";
import { Toaster } from "@/components/ui/toaster";

interface Props {
  children: React.ReactNode;
}

function AuthLayout({ children }: Props) {
  return (
    <div className="relative w-screen h-scree bg-background ">
      {children}
      <TailwindIndicator />
      <Toaster />
    </div>
  );
}

export default AuthLayout;
