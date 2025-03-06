import type { Job } from "../models/job";

export default {
  getJobs: (): Job[] => {
    return [
      {
        type: "Full-Time",
        title: "Senior Vue Developer",
        description:
          "We are seeking a talented Front-End Developer to join our team in Makatu, manila. The ideal candidate will have strong skills in HTML, CSS, and JavaScript...",
        salary: "Php 100 - Php 120k",
        location: "Makati, Manila",
      },

      {
        type: "Part-Time",
        title: "Software Engineer Intern",
        description:
          "We are seeking an aspiring Software Engineer to join our team in Calamba, Laguna. The ideal candidate will have strong desier to learn new things...",
        salary: "Php 10 - Php 20k",
        location: "Calamba, Laguna",
      },

      {
        type: "Full-Time",
        title: "Full-Stack Developer",
        description:
          "We are seeking a talented Full-Stack Developer to join our team in Ortigas, Pasig. The ideal candidate will have strong skills in Fron-end Development, and Back-end Development...",
        salary: "Php 60 - Php 80k",
        location: "Ortigas, Pasig",
      },
    ];
  },
};
