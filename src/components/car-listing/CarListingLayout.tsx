import { type ReactNode } from "react";
import CarHeader from "./CarHeader";

interface CarListingLayoutProps {
  type: string | undefined;
  children: ReactNode;
}

const CarListingLayout = ({ type, children }: CarListingLayoutProps) => {
  return (
    <div className="min-h-screen bg-black">
      <div className="container max-w-6xl py-8 px-4 animate-fade-in">
        <CarHeader type={type} />
        {children}
      </div>
    </div>
  );
};

export default CarListingLayout;