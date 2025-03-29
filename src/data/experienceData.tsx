export interface Experience {
  title: string;
  type: string;
  startDate: string;
  endDate: string;
  location: string;
  description: string;
  skills: string[];
}

export interface OrganizationExperience {
  organization: string;
  logo: string;
  experiences: Experience[];
}

export const experienceData: OrganizationExperience[] = [
  {
    organization: "Banyubramanta ITS Robotic Team",
    logo: "../img/banyu.png",
    experiences: [
      {
        title: "Creative Branding",
        type: "Contract",
        startDate: "Sep 2024",
        endDate: "Present",
        location: "Hybrid",
        description:
          "Banyubramanta is the official underwater robotics team of ITS, specializing in ROVs and AUVs for ocean exploration. As part of the Creative Branding division, I develop strategies and visual content to elevate our presence in national and international competitions, showcasing our innovations and engaging the public.",
        skills: [
          "Figma",
          "Adobe Premiere Pro",
          "Creative Design",
          "Videography",
        ],
      },
    ],
  },
  {
    organization: "ARA ITS",
    logo: "../img/ara.png",
    experiences: [
      {
        title: "Expert Staff of UI/UX Designer - Web Development",
        type: "Seasonal",
        startDate: "Nov 2024",
        endDate: "Present",
        location: "Surabaya, Jawa Timur, Indonesia",
        description:
          "An event held by my major, Information Technology ITS. As a UI/UX designer, my task is to create a web design that provides a good interface and a memorable user experience for people who access it.",
        skills: ["UI/UX", "Web Development", "Design Thinking"],
      },
      {
        title: "Marketing Staff",
        type: "Seasonal",
        startDate: "Oct 2023",
        endDate: "Nov 2024",
        location: "Surabaya, Jawa Timur, Indonesia",
        description:
          "An event for information technology majors at the Sepuluh Nopember Institute of Technology, served as a marketing staff member, creating content related to the committee and marketing content for the product and event.",
        skills: [
          "Marketing Strategy",
          "Social Media Marketing",
          "Content Creation",
        ],
      },
    ],
  },
  {
    organization: "Himpunan Mahasiswa Teknologi Informasi ITS (HMIT ITS)",
    logo: "../img/logo-hmit.png",
    experiences: [
      {
        title: "Department Secretary of Media Information",
        type: "Contract",
        startDate: "Mar 2025",
        endDate: "Present",
        location: "Surabaya, Jawa Timur, Indonesia",
        description:
          "By joining the information media department, I was given the task of being a department secretary who took care of all kinds of correspondence in the department as well as assisting in design projects.",
        skills: ["Graphic Design", "Videography", "Content Management"],
      },
      {
        title: "Media Information Intern",
        type: "Internship",
        startDate: "Nov 2024",
        endDate: "Feb 2025",
        location: "Surabaya, Jawa Timur, Indonesia",
        description:
          "I am registered as an intern in the information media department, in charge of managing the association's social media and all kinds of information in the media.",
        skills: ["Content Management", "Video Editing"],
      },
      {
        title: "Media and Internal Communications Coordinator – GARPIT Event",
        type: "Seasonal",
        startDate: "Nov 2024",
        endDate: "Dec 2024",
        location: "Surabaya, Jawa Timur, Indonesia",
        description:
          "Served as the primary liaison between the Media and Internal Affairs departments for the GARPIT event, a flagship program organized by the student association. Facilitated seamless communication between teams and ensured effective media coverage.",
        skills: ["Graphic Design", "Communication"],
      },
    ],
  },
  {
    organization: "AMPP Institut Teknologi Sepuluh Nopember Student Chapter",
    logo: "../img/ampp.png",
    experiences: [
      {
        title: "Staff of Web Development - Media and Branding",
        type: "Seasonal",
        startDate: "Mar 2025",
        endDate: "Present",
        location: "Surabaya, Jawa Timur, Indonesia",
        description:
          "AMPP ITS is a student branch of the AMPP international association that focuses on material protection and performance. AMPP ITS SC was established to provide a platform for students to develop knowledge and skills in the field of material protection, one of which is in the field of web development.",
        skills: ["Web Development", "Media Branding", "Material Protection"],
      },
    ],
  },
  {
    organization: "Future Energy Summit - Event by SRE ITS",
    logo: "../img/logo-futurest.png",
    experiences: [
      {
        title: "UI/UX Designer - Web Development",
        type: "Seasonal",
        startDate: "Nov 2024",
        endDate: "Present",
        location: "Surabaya, Jawa Timur, Indonesia",
        description:
          "Futurest is an event organized by SRE ITS that hosts various competitions to support the transition to renewable energy. I am registered as a UI/UX Designer staff, responsible for designing user interface elements for the Futurest website.",
        skills: ["UI/UX Design", "Web Development", "Web Design"],
      },
    ],
  },
];
