const TestBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 bg-black">
      <div 
        className="absolute inset-0" 
        style={{
          background: `radial-gradient(circle at center, rgba(253, 184, 19, 0.15) 0%, rgba(255, 205, 75, 0.07) 100%)`,
        }}
      />
      <div 
        className="absolute inset-0" 
        style={{
          backgroundImage: `
            radial-gradient(circle at center, rgba(255, 255, 255, 0.1) 2px, transparent 2px)
          `,
          backgroundSize: '30px 30px',
          filter: 'blur(1px)',
        }} 
      />
    </div>
  );
};

export default TestBackground;