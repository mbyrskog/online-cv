type FileData = {
  title: string;
  url: string;
};

type LinkData = {
  title: string;
  description: string;
  webUrl?: string;
  gitHubUrl?: string;
};

export const fileData: FileData[] = [
  {
    title: "Professional Scrum Master I Certification (PSM1)",
    url: "../assets/psm1.pdf",
  },
  {
    title: "Best candidate's thesis award 2017",
    url: "../assets/thesis_award.pdf",
  },
];

export const linkData: LinkData[] = [
  {
    title: "TV Show Advisor",
    description:
      "An app for searching and listing recommendations for TV shows. Using React, TypeScript and themoviedb.org's API.",
    webUrl: "https://tv-show-advisor-gamma.vercel.app/",
    gitHubUrl: "https://github.com/mbyrskog/tv-show-advisor",
  },
  {
    title: "Car Store",
    description:
      "Console application in C#, simulating a car store with different options for listing the cars.",
    gitHubUrl: "https://github.com/mbyrskog/car-store",
  },
  {
    title: "MB Hotels",
    description:
      "An app simulating a form for booking a room. Using Angular and TypeScript.",
    webUrl: "https://hotel-app-eight-plum.vercel.app/",
    gitHubUrl: "https://github.com/mbyrskog/hotel-app",
  },
  {
    title: "Online CV",
    description:
      "This app, using React, TypeScript and Material UI for responsiveness and theme colors.",
    webUrl: "https://onlinecv-sigma-flame-72.vercel.app/",
    gitHubUrl: "https://github.com/mbyrskog/online-cv",
  },
  {
    title: "Weather App - UNDER DEVELOPMENT",
    description:
      "An app for searching weather forecasts in different cities. Using Next.js, TypeScript and OpenWeather API.",
    webUrl: "https://weather-app-ztdh.vercel.app/",
  },
];
