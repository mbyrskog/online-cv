export type Skills =
  | "TypeScript"
  | "Angular"
  | "React"
  | "C#/.NET"
  | "Azure DevOps"
  | "Scrum"
  | "PHP"
  | "WordPress"
  | "Umbraco";

type WorkData = {
  date: string;
  position?: string;
  company: string;
  description?: string;
  image?: string;
  link?: string;
  skills?: Skills[];
  assignment?: {
    title: string;
    description: string;
    skills?: Skills[];
  }[];
};

export const workData: WorkData[] = [
  {
    date: "2020-02 - 2025-10",
    position: "Consultant / System Developer",
    company: "Nexer Group",
    assignment: [
      {
        title: "Danir ◦ 2025-05 - 2025-10",
        description:
          "Development of an application that allows participants to log physical activities by distance and compete with others. All benefits were donated to charity, supporting the mission of Star for Life. Contributed as part of an in-house initiative.",
        skills: ["TypeScript", "React", "Azure DevOps"],
      },
      {
        title: "MKB Fastighets AB ◦ 2024-02 - 2025-04",
        description:
          "Development of an application for administrators to manage rental processes for parking spots around Malmö, queues for apartments, and more. Also worked with support for previous systems.",
        skills: ["TypeScript", "React", "C#/.NET", "Azure DevOps", "Scrum"],
      },
      {
        title: "HSB Affarsstöd ◦ 2020-01 - 2023-10",
        description:
          "Development of new microservices. Examples are a service for storing and sharing files, a service for managing motions, letters, subleases and creating protocols for board meetings. Also worked part time as a Scrum Master, facilitating Scrum events and handling requirements in collaboration with product owners. Support for these services was also part of the daily work",
        skills: ["TypeScript", "Angular", "C#/.NET", "Azure DevOps", "Scrum"],
      },
    ],
    image: "./assets/images/work/nexer.png",
    link: "https://www.nexergroup.com",
  },
  {
    date: "2018-02 - 2020-02",
    position: "System Developer",
    company: "Skånes Kommuner",
    description:
      "Development, maintenance, and support of web applications. Worked with the intranet for the organization and with a public service for handling healthcare procurements around Skånes municipalities.",
    image: "./assets/images/work/skaneskommuner.jpg",
    link: "https://skaneskommuner.se/",
    skills: ["Angular", "C#/.NET", "Umbraco", "PHP", "WordPress"],
  },
  {
    date: "2012-06 - 2012-12",
    position: "Electrician",
    company: "APQ EL",
    description: "Construction of office buildings in Lund.",
    image: "./assets/images/work/apqel.jpg",
    link: "https://www.apqel.se",
  },
  {
    date: "2012-01 - 2012-06",
    position: "Electrician",
    company: "Hamilton People",
    description: "Construction of office buildings in Oslo, Norway.",
  },
  {
    date: "2009-01 - 2011-12",
    company: "Stay Abroad",
    description:
      "Extra jobs and occasional courses for university eligibility.",
  },
  {
    date: "2004-12 - 2008-12",
    position: "Electrician",
    company: "Bravida Prenad",
    description:
      "Construction, rebuilding of offices, houses, hospitals, industries in Lund and Malmö.",
    image: "./assets/images/work/bravida.webp",
    link: "https://www.bravida.se",
  },
  {
    date: "2004-06 - 2004-12",
    position: "Electrician",
    company: "Veberöds Elektriska",
    description:
      "Construction and renovation of apartments and houses in Lund.",
  },
];
