export interface Project {
    title: string;
    date: string;
    description: string;
    image: string;
    imageAlt: string;
    link: string;
}

const projects: Project[] = [
    {
        title: "Personal Website",
        date: "June 2025",
        description: "A personal website built using Next.js",
        image: "/images/Screenshot 2025-10-02 120523.png",
        imageAlt: "Screenshot of my personal website",
        link: "/"
    },
];

export default projects;
