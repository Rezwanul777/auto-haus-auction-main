

// interface DashboardLayoutProps {
//   children: React.ReactNode;
// }

// const DashboardLayout = ({ children }: DashboardLayoutProps) => {
//   return (
//     <div className="container mx-auto p-4 space-y-6 relative min-h-screen bg-black">
//       <div 
//         className="fixed inset-0 pointer-events-none -z-10" 
//         style={{
//           backgroundImage: `radial-gradient(circle at center, rgba(255, 255, 255, 1) 1.5px, transparent 1.5px)`,
//           backgroundSize: '40px 40px',
//           backgroundPosition: '0 0',
//         }}
//       />
//       {children}
//     </div>
//   );
// };



// export default DashboardLayout;

// modified code
interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="container mx-auto p-4 space-y-6 relative min-h-screen bg-black">
      <div 
        className="fixed inset-0 pointer-events-none -z-50" 
        style={{
          backgroundImage: `radial-gradient(circle at center, rgba(255, 255, 255, 1) 1.5px, transparent 1.5px)`,
          backgroundSize: '40px 40px',
          backgroundPosition: '0 0',
        }}
      />
      
        {children}
   
    </div>
  );
};

export default DashboardLayout;
