import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface ServiceInformationProps {
  serviceInfo: {
    lastServiceDate: string;
    lastServiceMileage: string;
    timingBeltChanged: string;
    timingBeltDate?: string;
  };
  onServiceInfoChange: (info: any) => void;
}

const ServiceInformation = ({
  serviceInfo,
  onServiceInfoChange,
}: ServiceInformationProps) => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Servicehistorik</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <Label htmlFor="last-service-date">Senaste service (datum)</Label>
            <Input
              id="last-service-date"
              type="date"
              value={serviceInfo.lastServiceDate}
              onChange={(e) =>
                onServiceInfoChange({
                  ...serviceInfo,
                  lastServiceDate: e.target.value,
                })
              }
            />
          </div>

          <div className="space-y-3">
            <Label htmlFor="last-service-mileage">
              Mätarställning vid senaste service
            </Label>
            <Input
              id="last-service-mileage"
              type="number"
              value={serviceInfo.lastServiceMileage}
              onChange={(e) =>
                onServiceInfoChange({
                  ...serviceInfo,
                  lastServiceMileage: e.target.value,
                })
              }
              placeholder="10000"
            />
          </div>
        </div>

        <div className="space-y-3">
          <Label>Är kamremmen bytt?</Label>
          <RadioGroup
            value={serviceInfo.timingBeltChanged}
            onValueChange={(value) =>
              onServiceInfoChange({ ...serviceInfo, timingBeltChanged: value })
            }
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="yes" id="timing-yes" />
              <Label htmlFor="timing-yes">Ja</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="no" id="timing-no" />
              <Label htmlFor="timing-no">Nej</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="unknown" id="timing-unknown" />
              <Label htmlFor="timing-unknown">Vet ej</Label>
            </div>
          </RadioGroup>
        </div>

        {serviceInfo.timingBeltChanged === "yes" && (
          <div className="space-y-3">
            <Label htmlFor="timing-belt-date">När byttes kamremmen?</Label>
            <Input
              id="timing-belt-date"
              type="date"
              value={serviceInfo.timingBeltDate}
              onChange={(e) =>
                onServiceInfoChange({
                  ...serviceInfo,
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

export default ServiceInformation;