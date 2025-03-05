
const AuctionBackground = () => {
  return (
    <>
      <div 
        className="fixed inset-0 pointer-events-none" 
        style={{
          background: `
            radial-gradient(circle at 75% 25%, rgba(20, 184, 166, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 25% 75%, rgba(20, 184, 166, 0.12) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(20, 184, 166, 0.10) 0%, transparent 55%),
            radial-gradient(circle at 15% 25%, rgba(20, 184, 166, 0.08) 0%, transparent 45%),
            radial-gradient(circle at 85% 85%, rgba(20, 184, 166, 0.15) 0%, transparent 50%)
          `
        }}
      />
    </>
  );
};

export default AuctionBackground;
