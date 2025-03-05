
import { useState } from "react";
import { SearchSection } from "@/components/support/SearchSection";
import { FAQSection } from "@/components/support/FAQSection";
import { ContactCards } from "@/components/support/ContactCards";
import { ComplaintForm } from "@/components/support/ComplaintForm";
import { GradientBackground } from "@/components/support/GradientBackground";
import { SupportGuider } from "@/components/support/SupportGuider";
import { faqItems } from "@/data/faqItems";

const Support = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching:", searchQuery);
  };

  return (
    <div className="relative">
      <GradientBackground />
      <div className="container mx-auto p-6 max-w-4xl animate-fade-in">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white">Support & Hjälp</h1>
        </div>

        <SearchSection 
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          handleSearch={handleSearch}
        />
        
        <FAQSection faqItems={faqItems} />
        
        <ContactCards />
        
        <SupportGuider />
        
        <ComplaintForm />
      </div>
    </div>
  );
};

export default Support;
