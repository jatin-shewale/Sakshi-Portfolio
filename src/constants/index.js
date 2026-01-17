// Personal Information
export const personalInfo = {
    name: "Sakshi Bagul",
    role: "Frontend Developer | React Enthusiast | Problem Solver",
    intro: "I am a passionate Information Technology student who loves building interactive, user-friendly web applications using React and modern frontend technologies.",
    email: "sakshi.bagul@example.com", // Update with actual email
    phone: "+91 XXXXX XXXXX", // Update with actual phone
    location: "Pune, Maharashtra, India",
    education: {
        degree: "B.Tech in Information Technology",
        college: "Dhole Patil College of Engineering",
        location: "Pune",
        year: "2023 - 2027" // Update as needed
    }
};

// Social Links
export const socialLinks = {
    linkedin: "https://www.linkedin.com/in/sakshi-bagul-8463b1277/",
    github: "https://github.com/Sakshibagul7",
    leetcode: "https://leetcode.com/u/Sakshibagul/",
};

// Skills
export const skills = [
    {
        category: "Programming Languages",
        items: [
            { name: "Java", icon: "SiJava", level: 85 },
            { name: "JavaScript", icon: "SiJavascript", level: 90 },
            { name: "SQL", icon: "SiMysql", level: 75 },
        ]
    },
    {
        category: "Frontend Technologies",
        items: [
            { name: "React", icon: "SiReact", level: 90 },
            { name: "Tailwind CSS", icon: "SiTailwindcss", level: 85 },
            { name: "Bootstrap", icon: "SiBootstrap", level: 80 },
        ]
    },
    {
        category: "Tools & IDEs",
        items: [
            { name: "Git", icon: "SiGit", level: 85 },
            { name: "VS Code", icon: "SiVisualstudiocode", level: 90 },
            { name: "IntelliJ IDEA", icon: "SiIntellijidea", level: 75 },
            { name: "Eclipse", icon: "SiEclipseide", level: 70 },
        ]
    }
];

// Projects
export const projects = [
    {
        id: 1,
        name: "EaseMath — Math Made Easy",
        description: "A web-based math platform supporting matrix operations, equation solvers, and graph plotting.",
        techStack: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "Math.js", "Chart.js"],
        liveDemo: "#", // Update with actual URL
        github: "#", // Update with actual URL
        image: "/projects/easemath.jpg", // Placeholder
        featured: true
    },
    {
        id: 2,
        name: "Portfolio Website",
        description: "Personal portfolio built using React, Tailwind CSS, and Framer Motion with smooth animations and modern design.",
        techStack: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
        liveDemo: "#", // Update with actual URL
        github: "#", // Update with actual URL
        image: "/projects/portfolio.jpg", // Placeholder
        featured: true
    },
    {
        id: 3,
        name: "DSA Practice Dashboard",
        description: "A dashboard to track solved DSA problems and LeetCode progress with analytics and insights.",
        techStack: ["React", "JavaScript", "Chart.js"],
        liveDemo: "#", // Update with actual URL
        github: "#", // Update with actual URL
        image: "/projects/dsa-dashboard.jpg", // Placeholder
        featured: false
    }
];

// Experience
export const experience = [
    {
        id: 1,
        role: "Open Source Contributor",
        organization: "GirlScript Summer of Code Extended",
        duration: "Oct 2024 – Nov 2024",
        location: "Remote",
        description: [
            "Fixed frontend bugs and improved UI components",
            "Collaborated on GitHub and participated in code reviews",
            "Learned real-world development workflows"
        ],
        technologies: ["React", "JavaScript", "Git", "GitHub"]
    }
];

// Achievements
export const achievements = [
    {
        id: 1,
        title: "DSA Problems Solved",
        count: 100,
        suffix: "+",
        icon: "FaCode",
        color: "from-purple-500 to-pink-500"
    },
    {
        id: 2,
        title: "LeetCode Rating",
        count: 1435,
        suffix: "",
        icon: "FaTrophy",
        color: "from-blue-500 to-cyan-500"
    },
    {
        id: 3,
        title: "Projects Completed",
        count: 10,
        suffix: "+",
        icon: "FaProjectDiagram",
        color: "from-pink-500 to-purple-500"
    }
];

// Navigation Links
export const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Achievements", href: "#achievements" },
    { name: "Contact", href: "#contact" }
];
