export type ExperienceData = {
  from: string;
  to?: string;
  company: string;
  location: {
    city: string;
    country: string;
    isRemote?: boolean;
  };
  title: string;
  achievements?: string[];
};

export type ResumeData = {
  summary: string;
  highestEducation: {
    degree: string;
    subject: string;
    school: string;
  };
  workExperiences: ExperienceData[];
  skills: string[];
};
