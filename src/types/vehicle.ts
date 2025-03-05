export interface VehicleFormData {
    regNumber?: string;
    make?: string;
    model?: string;
    year?: string;
    engine?: string;
    bodyType?: string;
    fuelType?: string;
    transmission?: string;
    color?: string;
    equipment?: string[];
    keys?: string;
    rims?: string;
    tires?: string;
    hasExtraWheels?: boolean;
    extraRims?: string;
    extraTires?: string;
    mileage?: string;
  }
  
  export type VehicleDetailStep = 
    | 'make' 
    | 'model' 
    | 'year' 
    | 'engine' 
    | 'bodyType' 
    | 'fuelType' 
    | 'transmission' 
    | 'color' 
    | 'equipment'
    | 'keys'
    | 'rims'
    | 'tires'
    | 'extraWheels'
    | 'extraRims'
    | 'extraTires'
    | 'mileage';
  
  export const MOCK_MAKES = ["Volvo", "BMW", "Audi", "Mercedes", "Volkswagen", "Toyota"];
  export const MOCK_MODELS = {
    Volvo: ["XC60", "XC90", "V90", "V60"],
    BMW: ["X5", "3-Series", "5-Series", "7-Series"],
  };
  export const MOCK_YEARS = ["2024", "2023", "2022", "2021", "2020", "2019", "2018"];
  export const MOCK_ENGINES = ["2.0T 250hk", "1.5T 180hk", "2.0D 190hk", "3.0T 340hk"];
  export const MOCK_BODY_TYPES = ["SUV", "Sedan", "Kombi", "Halvkombi", "Coupé"];
  export const MOCK_FUEL_TYPES = ["Bensin", "Diesel", "El", "Hybrid", "Laddhybrid"];
  export const MOCK_TRANSMISSIONS = ["Automat", "Manuell", "Halvautomatisk"];
  export const MOCK_COLORS = ["Svart", "Vit", "Silver", "Blå", "Röd", "Grå", "Grön", "Brun"];
  export const MOCK_RIMS = ["Original Fälgar", "Eftermarknad Aluminium", "Plåtfälgar"];
  export const MOCK_TIRES = ["Sommardäck", "Vinterdäck (dubb)", "Vinterdäck (friktion)", "Helårsdäck"];
  