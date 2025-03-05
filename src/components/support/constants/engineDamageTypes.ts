
export const engineComponents = [
  "Motor",
  "Turbo",
  "Transmission",
  "Koppling",
  "Kylsystem",
  "Bromsvätskenivå",
  "Vattenpump",
  "Oljepump",
  "Bränslesystem",
  "Batteri",
  "Startmotor",
  "Generator",
  "Luftkonditionering",
  "Servostyrning",
  "Avgassystem",
  "Tändstift",
  "Kamrem",
  "Drivrem"
];

export const componentDamageTypes: Record<string, string[]> = {
  "Motor": [
    "För högt ljud",
    "Onormalt motorljud",
    "För låg oljenivå",
    "Vibrationer och skakningar vid belastningsändringar",
    "För låg effekt",
    "Ovanligt motorljud",
    "Oljeläckage",
    "Roterar inte"
  ],
  "Turbo": [
    "Defekt",
    "Ingen effekt",
    "Saknade delar",
    "Läcker"
  ],
  "Transmission": [
    "För högt ljud",
    "Onormalt motorljud",
    "För låg oljenivå",
    "Vibrationer och skakningar vid belastningsändringar",
    "För låg effekt",
    "Ovanligt motorljud",
    "Oljeläckage",
    "Roterar inte"
  ],
  "Koppling": [
    "Kopplingen slirar",
    "Defekt",
    "För tung pedal"
  ],
  "Kylsystem": [
    "Defekt",
    "Ingen effekt",
    "Saknade delar",
    "Läcker"
  ],
  "Bromsvätskenivå": [
    "Byte behövs",
    "För hög vätskenivå",
    "För låg vätskenivå"
  ],
  "Vattenpump": [
    "Defekt",
    "Ingen effekt",
    "Saknade delar",
    "Läcker"
  ],
  "Oljepump": [
    "För lågt oljetryck",
    "Onormalt ljud",
    "Oljeläckage",
    "Totalt haveri"
  ],
  "Bränslesystem": [
    "Bränsleläckage",
    "Dålig prestanda",
    "Startproblem",
    "Oregelbunden tomgång"
  ],
  "Batteri": [
    "Laddar inte",
    "Dött batteri",
    "Låg spänning",
    "Korroderade poler"
  ],
  "Startmotor": [
    "Inget svar",
    "Malande ljud",
    "Långsam start",
    "Oregelbunden funktion"
  ],
  "Generator": [
    "Laddar inte",
    "Varningslampa lyser",
    "Oregelbunden spänning",
    "Onormalt ljud"
  ],
  "Luftkonditionering": [
    "Ingen kylning",
    "Svagt luftflöde",
    "Konstiga lukter",
    "Ovanliga ljud"
  ],
  "Servostyrning": [
    "Tung styrning",
    "Onormalt ljud",
    "Vätskeläckage",
    "Effektförlust"
  ],
  "Avgassystem": [
    "Högt ljud",
    "Avgasläckage",
    "Reducerad prestanda",
    "Vibrationer"
  ],
  "Tändstift": [
    "Misständning",
    "Dålig prestanda",
    "Svårstartad",
    "Hög bränsleförbrukning"
  ],
  "Kamrem": [
    "Onormalt ljud",
    "Remskada",
    "Saknade kuggar",
    "För lös rem"
  ],
  "Drivrem": [
    "Gnisslande ljud",
    "Remskada",
    "För lös rem",
    "Rem saknas"
  ]
};
