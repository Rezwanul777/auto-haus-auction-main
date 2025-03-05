
const BackgroundEffects = () => {
  return (
    <>
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `radial-gradient(circle at center, rgba(255, 255, 255, 0.3) 0.5px, transparent 0.5px)`,
            backgroundSize: '24px 24px',
            opacity: 0.4
          }}
        />
      </div>
    </>
  );
};

export default BackgroundEffects;
