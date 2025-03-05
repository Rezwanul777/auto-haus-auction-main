
export interface ComplaintFormValues {
  registrationNumber: string;
  description: string;
  damageLocation?: string;
  damageType?: string;
  engineComponent?: string;
  interiorSection?: string;
  wheelType?: string;
  images: FileList | null;
}

export type Step = 'registration' | 'type' | 'details';
