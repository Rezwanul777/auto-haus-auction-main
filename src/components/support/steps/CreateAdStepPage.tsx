// import { ArrowLeft } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Link } from "react-router-dom";
// //import { useVehicleDetailForm } from "@/hooks/useVehicleDetailForm";
// import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
// // import { TabContent } from "@/components/vehicle/TabContent";
// // import { TabHeader } from "@/components/vehicle/TabHeader";
// import { useState } from "react";
// import { useVehicleDetailForm } from "@/hooks/useVehicleDetailForm";
// import { TabHeader } from "@/vehicle/TabHeader";
// import { TabContent } from "@/vehicle/TabContent";

// const CreateAdStepPage = () => {
//   const {
//     currentStep,
//     currentDetailStep,
//     formData,
//     handleRegNumberSubmit,
//     handleOptionSelect,
//     handleEditSection
//   } = useVehicleDetailForm();

//   const [activeTab, setActiveTab] = useState("vehicle-info");

//   return (
//     <div className="container max-w-[840px] mx-auto py-3 px-3">
//       <div className="bg-white rounded-md shadow-md p-6 border border-black min-h-[120%]">
//         <Link to="/create-ad">
//           <Button variant="ghost" size="sm" className="mb-4">
//             <ArrowLeft className="h-4 w-4 mr-2" />
//             Tillbaka
//           </Button>
//         </Link>
        
//         <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full mb-6">
//           <TabsList className="w-full">
//             <TabsTrigger value="reg" className="flex-1">Reg nr</TabsTrigger>
//             <TabsTrigger value="vehicle-info" className="flex-1">Fordonsinfo</TabsTrigger>
//             <TabsTrigger value="test" className="flex-1">Test</TabsTrigger>
//             <TabsTrigger value="images" className="flex-1">Bilder</TabsTrigger>
//             <TabsTrigger value="price" className="flex-1">Pris</TabsTrigger>
//           </TabsList>
//         </Tabs>
        
//         <TabHeader activeTab={activeTab} />
        
//         <TabContent
//           activeTab={activeTab}
//           currentStep={currentStep}
//           currentDetailStep={currentDetailStep}
//           formData={formData}
//           onRegNumberSubmit={handleRegNumberSubmit}
//           onOptionSelect={handleOptionSelect}
//           onEditSection={handleEditSection}
//         />
//       </div>
//     </div>
//   );
// };

// export default CreateAdStepPage;
