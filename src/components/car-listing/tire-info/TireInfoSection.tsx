import React from 'react';
import TireInfoBox from './TireInfoBox';

interface TireInfo {
  front?: {
    tireDepth?: string;
    brakeCondition?: string;
  };
  back?: {
    tireDepth?: string;
    brakeCondition?: string;
  };
}

interface TireInfoSectionProps {
  title: string;
  tireInfo: TireInfo;
  showBrakeCondition?: boolean;
}

const TireInfoSection = ({ title, tireInfo, showBrakeCondition = true }: TireInfoSectionProps) => {
  return (
    <div className="space-y-4">
      {title && <h3 className="font-medium text-white text-lg">{title}</h3>}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tireInfo.front && (
          <TireInfoBox
            title="Fram"
            tireDepth={tireInfo.front.tireDepth}
            brakeCondition={showBrakeCondition ? tireInfo.front.brakeCondition : undefined}
          />
        )}
        {tireInfo.back && (
          <TireInfoBox
            title="Bak"
            tireDepth={tireInfo.back.tireDepth}
            brakeCondition={showBrakeCondition ? tireInfo.back.brakeCondition : undefined}
          />
        )}
      </div>
    </div>
  );
};

export default TireInfoSection;