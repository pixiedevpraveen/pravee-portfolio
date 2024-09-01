export type HomePageData = {
    data: HomeData;
    content: string
    title: string
    description: string
}

export type HomeData = {
    work: Work[]
    education: Education[];
    skills: Skill[];
    projects: Project[];
    internships: Internship[];
    achievements: Achievement[];
}

export type Work = {
    title: string;
    details: string;
}

export type Education = {
    course: string;
    cgpa: string;
    institute: string;
    year: string;
};

export type Project = {
    title: string;
    url: string;
    images: string[];
    details: string;
    source?: undefined;
};

export type Skill = { name: string, value: { icon: string, name: string }[] }

export type Internship = {
    role: string;
    designation: string;
    company: string;
    location: string;
    time: string;
    skills: string[];
    details: string;
};

export type Achievement = {
    title: string;
    time: string;
    details: string;
};
