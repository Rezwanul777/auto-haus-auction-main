
// Återställer originalfilen
import React from 'react';
import { Map } from '@/components/Map';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin } from "lucide-react";

export const LocationInfo = () => {
  return (
    <Card className="glass-card mb-12 overflow-hidden border-white/20">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-white">
          <MapPin className="h-5 w-5 text-accent" />
          Hitta till oss
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="h-[400px] w-full">
          <Map />
        </div>
      </CardContent>
    </Card>
  );
};
