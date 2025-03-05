
import { Card } from "@/components/ui/card";
import LoginForm from "./LoginForm";

const AuthCard = () => {
  return (
    <Card className="w-full max-w-md p-8 space-y-6 bg-black/50 backdrop-blur-sm border border-white/10">
      <div className="space-y-2 text-center">
        <h2 className="text-3xl font-bold">Logga in</h2>
        <p className="text-gray-400">Ange dina uppgifter nedan för att fortsätta</p>
      </div>
      <LoginForm />
    </Card>
  );
};

export default AuthCard;
