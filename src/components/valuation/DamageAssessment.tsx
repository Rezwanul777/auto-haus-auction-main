import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

interface DamageAssessmentProps {
  damageInfo: {
    hasDamage: string;
    damageDescription?: string;
    windshieldDamage: string;
    suspectedAccident: string;
  };
  onDamageInfoChange: (info: any) => void;
}

const DamageAssessment = ({
  damageInfo,
  onDamageInfoChange,
}: DamageAssessmentProps) => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Skador och Skick</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-3">
          <Label>Finns det några skador på bilen?</Label>
          <RadioGroup
            value={damageInfo.hasDamage}
            onValueChange={(value) =>
              onDamageInfoChange({ ...damageInfo, hasDamage: value })
            }
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="yes" id="damage-yes" />
              <Label htmlFor="damage-yes">Ja</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="no" id="damage-no" />
              <Label htmlFor="damage-no">Nej</Label>
            </div>
          </RadioGroup>
        </div>

        {damageInfo.hasDamage === "yes" && (
          <div className="space-y-3">
            <Label htmlFor="damage-description">Beskriv skadorna</Label>
            <Textarea
              id="damage-description"
              value={damageInfo.damageDescription}
              onChange={(e) =>
                onDamageInfoChange({
                  ...damageInfo,
                  damageDescription: e.target.value,
                })
              }
              placeholder="Beskriv skadorna här..."
            />
          </div>
        )}

        <div className="space-y-3">
          <Label>Finns det skador på vindrutan?</Label>
          <RadioGroup
            value={damageInfo.windshieldDamage}
            onValueChange={(value) =>
              onDamageInfoChange({ ...damageInfo, windshieldDamage: value })
            }
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="yes" id="windshield-yes" />
              <Label htmlFor="windshield-yes">Ja</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="no" id="windshield-no" />
              <Label htmlFor="windshield-no">Nej</Label>
            </div>
          </RadioGroup>
        </div>

        <div className="space-y-3">
          <Label>Misstänker du att bilen varit med i en olycka?</Label>
          <RadioGroup
            value={damageInfo.suspectedAccident}
            onValueChange={(value) =>
              onDamageInfoChange({ ...damageInfo, suspectedAccident: value })
            }
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="yes" id="accident-yes" />
              <Label htmlFor="accident-yes">Ja</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="no" id="accident-no" />
              <Label htmlFor="accident-no">Nej</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="unknown" id="accident-unknown" />
              <Label htmlFor="accident-unknown">Vet ej</Label>
            </div>
          </RadioGroup>
        </div>
      </CardContent>
    </Card>
  );
};

export default DamageAssessment;