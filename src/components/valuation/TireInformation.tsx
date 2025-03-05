import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

interface TireInformationProps {
  tireInfo: {
    currentTireDepth: string;
    hasExtraTires: boolean;
    extraTireDepth?: string;
  };
  onTireInfoChange: (info: any) => void;
}

const TireInformation = ({
  tireInfo,
  onTireInfoChange,
}: TireInformationProps) => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Däckinformation</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-3">
          <Label htmlFor="current-tire-depth">
            Mönsterdjup på nuvarande däck (mm)
          </Label>
          <Input
            id="current-tire-depth"
            type="number"
            min="0"
            max="20"
            step="0.1"
            value={tireInfo.currentTireDepth}
            onChange={(e) =>
              onTireInfoChange({ ...tireInfo, currentTireDepth: e.target.value })
            }
          />
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox
            id="extra-tires"
            checked={tireInfo.hasExtraTires}
            onCheckedChange={(checked) =>
              onTireInfoChange({ ...tireInfo, hasExtraTires: checked })
            }
          />
          <Label htmlFor="extra-tires">Extra däckuppsättning finns</Label>
        </div>

        {tireInfo.hasExtraTires && (
          <div className="space-y-3">
            <Label htmlFor="extra-tire-depth">
              Mönsterdjup på extra däck (mm)
            </Label>
            <Input
              id="extra-tire-depth"
              type="number"
              min="0"
              max="20"
              step="0.1"
              value={tireInfo.extraTireDepth}
              onChange={(e) =>
                onTireInfoChange({ ...tireInfo, extraTireDepth: e.target.value })
              }
            />
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default TireInformation;