import {
  experienceData,
  OrganizationExperience,
  Experience,
} from "../data/experienceData";
import { useState } from "react";

export default function ExperienceSection() {
  const [expandedOrg, setExpandedOrg] = useState<number | null>(null);

  // Fungsi untuk mengekstrak tahun dari string tanggal
  const extractYear = (dateString: string): number => {
    if (dateString.toLowerCase() === "present") return new Date().getFullYear();
    const year = dateString.split(" ").pop();
    return year ? parseInt(year) : new Date().getFullYear();
  };

  // Fungsi untuk mengekstrak bulan dari string tanggal (format "Jan 2023")
  const extractMonth = (dateString: string): number => {
    if (dateString.toLowerCase() === "present")
      return new Date().getMonth() + 1;
    const monthName = dateString.split(" ")[0];
    const monthMap: { [key: string]: number } = {
      Jan: 1,
      Feb: 2,
      Mar: 3,
      Apr: 4,
      May: 5,
      Jun: 6,
      Jul: 7,
      Aug: 8,
      Sep: 9,
      Oct: 10,
      Nov: 11,
      Dec: 12,
    };
    return monthMap[monthName] || 1; // Default ke Januari jika tidak valid
  };

  // Mendapatkan durasi pengalaman dalam format yang lebih akurat
  const getDuration = (startDate: string, endDate: string): string => {
    const startYear = extractYear(startDate);
    const startMonth = extractMonth(startDate);
    const endYear = extractYear(endDate);
    const endMonth = extractMonth(endDate);

    let totalMonths = (endYear - startYear) * 12 + (endMonth - startMonth);
    let years = Math.floor(totalMonths / 12);
    let months = totalMonths % 12;

    if (years > 0 && months > 0) {
      return `${years} tahun ${months} bulan`;
    } else if (years > 0) {
      return `${years} tahun`;
    } else if (months > 0) {
      return `${months} bulan`;
    } else {
      return "Kurang dari 1 bulan";
    }
  };

  // Mengkonversi jenis pengalaman ke badge warna
  const getTypeColor = (type: string): string => {
    const typeColors: { [key: string]: string } = {
      "Full-time": "bg-blue-500",
      "Part-time": "bg-green-500",
      Internship: "bg-purple-500",
      Freelance: "bg-yellow-500",
      Contract: "bg-orange-500",
    };
    return typeColors[type] || "bg-gray-500";
  };

  return (
    <section
      id="experience"
      className="min-h-screen py-12 md:py-20 bg-white dark:bg-gray-900 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-gray-900 dark:text-white text-center relative">
          Experience
          <span className="block w-24 h-1 bg-blue-500 dark:bg-blue-400 mx-auto mt-2 rounded-full"></span>
        </h2>

        <div className="space-y-10">
          {experienceData.map((org, orgIndex) => (
            <div
              key={orgIndex}
              className="border-b border-gray-200 dark:border-gray-700 pb-10 last:border-b-0 last:pb-0"
            >
              {/* Organization header */}
              <div
                className="flex items-center mb-6 cursor-pointer"
                onClick={() =>
                  setExpandedOrg(expandedOrg === orgIndex ? null : orgIndex)
                }
              >
                <div className="mr-4">
                  <img
                    src={org.logo}
                    alt={org.organization}
                    className="h-14 w-14 rounded object-cover shadow-sm border border-gray-200 dark:border-gray-700"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {org.organization}
                  </h3>
                </div>
              </div>

              {/* Experience entries */}
              <div className="pl-6 ml-6 space-y-8 border-l-2 border-gray-200 dark:border-gray-700">
                {org.experiences.map((exp, expIndex) => (
                  <div key={expIndex} className="relative">
                    {/* Timeline node aligned with title */}
                    <div className="absolute w-4 h-4 rounded-full bg-white dark:bg-gray-800 border-2 border-blue-500 dark:border-blue-400 -left-[20px] top-1.5"></div>

                    <div className="pb-2">
                      <div className="mb-1">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {exp.title}
                        </h4>
                      </div>

                      <div className="flex flex-wrap items-center gap-2 mb-2 text-sm text-gray-600 dark:text-gray-400">
                        <span
                          className={`px-2 py-0.5 text-xs text-white rounded-full ${getTypeColor(
                            exp.type
                          )}`}
                        >
                          {exp.type}
                        </span>
                        <span>
                          {exp.startDate} - {exp.endDate}
                        </span>
                        <span className="flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 mr-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                          {exp.location}
                        </span>
                        <span className="text-xs text-gray-500 dark:text-gray-500 italic">
                          {getDuration(exp.startDate, exp.endDate)}
                        </span>
                      </div>

                      <p className="text-gray-700 dark:text-gray-300 mb-3 text-justify">
                        {exp.description}
                      </p>

                      {/* Skills */}
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-2.5 py-1 text-xs rounded-full border border-gray-200 dark:border-gray-700"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
