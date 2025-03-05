
export const tirePositions = [
  "Fram vänster",
  "Fram höger", 
  "Bak vänster",
  "Bak höger",
  "Alla hjul"
] as const;

export type TirePosition = typeof tirePositions[number];

const tireDamageTypes = [
  "Slitage på en sida",
  "Kantskador",
  "Ej tillåten dimension",
  "Saknade delar",
  "Ålderssprickor"
];

const rimDamageTypes = [
  "Saknad del",
  "Stenskott",
  "Spricka",
  "Buckla",
  "Ej original utrustning",
  "Rost",
  "Repa",
  "Omlackering"
];

export const tireAndRimDamageTypes: Record<TirePosition, string[]> = {
  "Fram vänster": [...tireDamageTypes, ...rimDamageTypes],
  "Fram höger": [...tireDamageTypes, ...rimDamageTypes],
  "Bak vänster": [...tireDamageTypes, ...rimDamageTypes],
  "Bak höger": [...tireDamageTypes, ...rimDamageTypes],
  "Alla hjul": [...tireDamageTypes, ...rimDamageTypes]
};
