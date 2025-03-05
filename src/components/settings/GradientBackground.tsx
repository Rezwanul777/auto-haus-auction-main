
export const GradientBackground = () => {
  return (
    <div 
      className="fixed inset-0 pointer-events-none" 
      style={{
        background: `
          radial-gradient(circle at 75% 25%, rgba(155, 135, 245, 0.15) 0%, transparent 35%),
          radial-gradient(circle at 25% 75%, rgba(214, 188, 250, 0.12) 0%, transparent 35%),
          radial-gradient(circle at 50% 50%, rgba(155, 135, 245, 0.10) 0%, transparent 40%),
          radial-gradient(circle at 15% 25%, rgba(214, 188, 250, 0.08) 0%, transparent 30%),
          radial-gradient(circle at 85% 85%, rgba(155, 135, 245, 0.12) 0%, transparent 35%)
        `
      }}
    />
  );
};
