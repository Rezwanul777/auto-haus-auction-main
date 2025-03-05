
export const brakePositions = [
  "Alla",
  "Fram vänster",
  "Fram höger",
  "Bak vänster",
  "Bak höger"
] as const;

export type BrakePosition = typeof brakePositions[number];

export const brakeDamageTypes = [
  "Slitna bromsbelägg",
  "Skeva bromsskivor",
  "Rostiga bromsskivor",
  "Läckande bromsledning",
  "Trasig bromsslang",
  "Dålig bromskraft",
  "Missljud vid inbromsning"
] as const;

export const brakeDamageTypesByPosition: Record<BrakePosition, string[]> = {
  "Alla": [...brakeDamageTypes],
  "Fram vänster": [...brakeDamageTypes],
  "Fram höger": [...brakeDamageTypes],
  "Bak vänster": [...brakeDamageTypes],
  "Bak höger": [...brakeDamageTypes]
};
