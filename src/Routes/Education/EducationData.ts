type EducationData = {
  date: string;
  institution: string;
  description: string;
  image?: string;
  link?: string;
};

export const educationData: EducationData[] = [
  {
    date: "2022-10",
    institution: "Nexer Academy",
    description: "Leading Safe 5.1. Internal course at Nexer Group.",
    image: "./assets/images/education/nexer.png",
    link: "https://www.nexergroup.com",
  },
  {
    date: "2022-07",
    institution: "Scrum.org",
    description: "PSM1 (Professional Scrum Master I) certification.",
    image: "./assets/images/education/psm1.png",
    link: "https://www.scrum.org/user/1074033",
  },
  {
    date: "2022-06",
    institution: "Nexer Academy",
    description: "Basic Scrum And Agile. Internal course at Nexer Group.",
    image: "./assets/images/education/nexer.png",
    link: "https://www.nexergroup.com",
  },
  {
    date: "2014-09 - 2017-06",
    institution: "Mid Sweden University",
    description: "Bachelor of Science with a Major in Informatics.",
    image: "./assets/images/education/miun.png",
    link: "https://www.miun.se",
  },
  {
    date: "2014-03 - 2014-06",
    institution: "Mid Sweden University",
    description:
      "A-level courses in informatics. User-centered System development, Search and evaluate information on the Web, Web Informatics.",
    image: "./assets/images/education/miun.png",
    link: "https://www.miun.se",
  },
  {
    date: "2013-04 - 2013-06",
    institution: "NTI School",
    description: "English 6.",
    image: "./assets/images/education/lundskommun.webp",
    link: "https://ntigymnasiet.se/lund/",
  },
  {
    date: "2009-03 - 2009-05",
    institution: "NTI School",
    description: "Mathematics B.",
    image: "./assets/images/education/lundskommun.webp",
    link: "https://ntigymnasiet.se/lund/",
  },
  {
    date: "2000-08 - 2003-06",
    institution: "Vipeholmsskolan",
    description:
      "Upper secondary education. Electrical program with specialization installation.",
    image: "./assets/images/education/lundskommun.webp",
    link: "https://lund.se/gymnasiewebbar/vipan",
  },
];
