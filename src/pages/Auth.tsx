
import { Separator } from "@/components/ui/separator";
import NewsSection from "@/components/auth/NewsSection";
import AuthCard from "@/components/auth/AuthCard";
import RainBackground from "@/components/auth/RainBackground";

const Auth = () => {
  return (
    <div className="min-h-screen flex items-center relative overflow-hidden">
      <RainBackground />
      <NewsSection />
      <Separator orientation="vertical" className="h-[400px] bg-white/10" />
      <div className="w-1/2 flex items-center justify-center p-4 bg-black/50">
        <AuthCard />
      </div>
    </div>
  );
};

export default Auth;
