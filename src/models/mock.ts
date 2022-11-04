import { TVProgram } from "./types";

export const programs: TVProgram[] = [
  {
    id: "1",
    title: "The Pianist",
    imageLandscape: "https://new.static.tv.nu/18663885",
    genres: ["Krig", "Drama"],
    imdb: {
      rating: "8.5",
    },
    playProviders: [
      {
        name: "Viaplay",
      },
      {
        name: "SF Anytime",
      },
    ],
  },
  {
    id: "2",
    title: "Le général du roi",
    imageLandscape: "https://new.static.tv.nu/17686218",
    genres: ["Romantik", "Drama"],
    imdb: {
      rating: "7.2",
    },
    playProviders: [],
  },
];
