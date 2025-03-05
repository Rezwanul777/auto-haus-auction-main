import React from 'react';

interface TireInfoBoxProps {
  title: string;
  tireDepth?: string;
  brakeCondition?: string;
}

const TireInfoBox = ({ title, tireDepth, brakeCondition }: TireInfoBoxProps) => {
  return (
    <div className="bg-black/20 p-4 rounded-lg border border-white/10">
      <h4 className="font-medium text-white mb-3">{title}</h4>
      <div className="space-y-2">
        <p className="text-gray-300">Däckmönsterdjup: {tireDepth || "N/A"}</p>
        {brakeCondition && (
          <p className="text-gray-300">Bromsskick: {brakeCondition}</p>
        )}
      </div>
    </div>
  );
};

export default TireInfoBox;