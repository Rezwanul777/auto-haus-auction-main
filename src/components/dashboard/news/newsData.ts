
export interface NewsItem {
  id: number;
  title: string;
  date: string;
  description: string;
  category: string;
}

export const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "Nya regler för bilauktioner",
    date: "2024-03-15",
    description: "Viktiga förändringar i regelverket för online bilauktioner",
    category: "Regler & Policy"
  },
  {
    id: 2,
    title: "Rekordförsäljning i februari",
    date: "2024-03-10",
    description: "Månaden såg en ökning med 25% i antalet sålda fordon",
    category: "Statistik"
  },
  {
    id: 3,
    title: "Elbilstrenden fortsätter",
    date: "2024-03-05",
    description: "Allt fler väljer att sälja och köpa elbilar på plattformen",
    category: "Trender"
  },
  {
    id: 4,
    title: "Ny värderingsfunktion",
    date: "2024-03-01",
    description: "Vi har uppdaterat vår AI-drivna värderingsmodell",
    category: "Funktioner"
  }
];
