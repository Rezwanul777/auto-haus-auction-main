export const GradientBackground = () => {
  return (
    <div 
      className="fixed inset-0 pointer-events-none" 
      style={{
        background: `
          radial-gradient(circle at 75% 25%, rgba(249, 115, 22, 0.15) 0%, transparent 35%),
          radial-gradient(circle at 25% 75%, rgba(254, 198, 161, 0.12) 0%, transparent 35%),
          radial-gradient(circle at 50% 50%, rgba(249, 115, 22, 0.10) 0%, transparent 40%),
          radial-gradient(circle at 15% 25%, rgba(254, 198, 161, 0.08) 0%, transparent 30%),
          radial-gradient(circle at 85% 85%, rgba(249, 115, 22, 0.12) 0%, transparent 35%)
        `
      }}
    />
  );
};