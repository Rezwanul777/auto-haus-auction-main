
export const underbodyComponents = [
  "Underrede vänster",
  "Underrede höger",
  "Hjullager fram vänster",
  "Hjullager bak vänster",
  "Hjullager fram höger", 
  "Hjullager bak höger",
  "Drivaxel fram vänster",
  "Drivaxel fram höger",
  "Drivaxel bak vänster",
  "Drivaxel bak höger",
  "Bromsledningar fram",
  "Bromsledningar bak",
  "Stötdämpare fram",
  "Stötdämpare bak",
  "Avgasrör",
  "Katalysator",
  "Lambdasond",
  "Ljuddämpare fram",
  "Ljuddämpare bak",
  "Styrning och spindelleder",
  "Startmotor",
  "Kardanaxel",
  "Tank"
] as const;

export type UnderbodyComponent = typeof underbodyComponents[number];

interface DamageTypeMap {
  [key: string]: string[];
}

export const underbodyDamageTypes: DamageTypeMap = {
  "Underrede vänster": ["Rost", "Skada"],
  "Underrede höger": ["Rost", "Skada"],
  "Hjullager fram vänster": ["Missljud", "Slitage", "Defekt"],
  "Hjullager bak vänster": ["Missljud", "Slitage", "Defekt"],
  "Hjullager fram höger": ["Missljud", "Slitage", "Defekt"],
  "Hjullager bak höger": ["Missljud", "Slitage", "Defekt"],
  "Drivaxel fram vänster": ["Missljud", "Slitage", "Defekt"],
  "Drivaxel fram höger": ["Missljud", "Slitage", "Defekt"],
  "Drivaxel bak vänster": ["Missljud", "Slitage", "Defekt"],
  "Drivaxel bak höger": ["Missljud", "Slitage", "Defekt"],
  "Bromsledningar fram": ["Rost", "Läckage", "Skada"],
  "Bromsledningar bak": ["Rost", "Läckage", "Skada"],
  "Stötdämpare fram": ["Läckage", "Slitage", "Defekt"],
  "Stötdämpare bak": ["Läckage", "Slitage", "Defekt"],
  "Avgasrör": ["Rost", "Läckage", "Skada"],
  "Katalysator": ["Defekt", "Skada"],
  "Lambdasond": ["Defekt"],
  "Ljuddämpare fram": ["Rost", "Läckage", "Missljud"],
  "Ljuddämpare bak": ["Rost", "Läckage", "Missljud"],
  "Styrning och spindelleder": ["Slitage", "Missljud", "Defekt"],
  "Startmotor": ["Defekt"],
  "Kardanaxel": ["Missljud", "Slitage", "Defekt"],
  "Tank": ["Rost", "Läckage", "Skada"]
};

