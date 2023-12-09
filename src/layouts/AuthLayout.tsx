import { TailwindIndicator } from "@/components/tailwind-indicator";
import LoginBackground from "@/assets/bg-login.jpg";
import { Toaster } from "@/components/ui/toaster";

interface Props {
  children: React.ReactNode;
}

function AuthLayout({ children }: Props) {
  return (
    <div className="relative w-screen h-scree bg-primary-foreground ">
      {children}
      <TailwindIndicator />
      <div
        className="w-screen h-screen mix-blend-multiply"
      >
      </div>
      <Toaster />
    </div>
  );
}

export default AuthLayout;
