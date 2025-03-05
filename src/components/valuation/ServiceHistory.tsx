import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

interface ServiceHistoryProps {
  serviceHistory: {
    isComplete: string;
    timingBeltChanged: string;
    timingBeltDate?: string;
  };
  onServiceHistoryChange: (history: any) => void;
}

const ServiceHistory = ({
  serviceHistory,
  onServiceHistoryChange,
}: ServiceHistoryProps) => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Servicehistorik</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-3">
          <Label>Är serviceboken komplett?</Label>
          <RadioGroup
            value={serviceHistory.isComplete}
            onValueChange={(value) =>
              onServiceHistoryChange({ ...serviceHistory, isComplete: value })
            }
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="yes" id="service-yes" />
              <Label htmlFor="service-yes">Ja</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="no" id="service-no" />
              <Label htmlFor="service-no">Nej</Label>
            </div>
          </RadioGroup>
        </div>

        <div className="space-y-3">
          <Label>Är kamremmen bytt?</Label>
          <RadioGroup
            value={serviceHistory.timingBeltChanged}
            onValueChange={(value) =>
              onServiceHistoryChange({ ...serviceHistory, timingBeltChanged: value })
            }
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="yes" id="belt-yes" />
              <Label htmlFor="belt-yes">Ja</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="no" id="belt-no" />
              <Label htmlFor="belt-no">Nej</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="unknown" id="belt-unknown" />
              <Label htmlFor="belt-unknown">Vet ej</Label>
            </div>
          </RadioGroup>
        </div>

        {serviceHistory.timingBeltChanged === "yes" && (
          <div className="space-y-3">
            <Label htmlFor="belt-date">När byttes kamremmen?</Label>
            <Input
              id="belt-date"
              type="date"
              value={serviceHistory.timingBeltDate}
              onChange={(e) =>
                onServiceHistoryChange({
                  ...serviceHistory,
                  timingBeltDate: e.target.value,
                })
              }
            />
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ServiceHistory;