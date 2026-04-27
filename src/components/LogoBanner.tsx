import React, { memo } from 'react';

const LogoBanner: React.FC = memo(() => {
  return (
    <div className="flex items-center justify-center h-16 bg-gray-200">
      <h1 className="text-xl font-bold text-gray-800">MyTutorsNest</h1>
    </div>
  );
});

export default LogoBanner;
