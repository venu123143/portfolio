import {
    Server,
    Code,
    Database,
    Award,
    TrendingUp,
    Shield,
    Zap,
    Target,
    Linkedin,
    Briefcase,
    Mail,
    Phone,
    Globe,
} from "lucide-react"

export const experience = 2.9;

// Helper function to format experience
const formatExperience = (value: number, format: 'plus' | 'plain' | 'capitalized' = 'plus') => {
    if (format === 'plus') return `${value}+`;
    if (format === 'capitalized') return `${value}+ Years`;
    return `${value}`;
};

// Hero Data
export const heroData = {
    greeting: "👋 Hello, I'm",
    name: "Venu Gopal Reddy",
    title: "Full Stack Developer",
    description: `Software Engineer with ${formatExperience(experience)} years of experience building scalable web applications. Awarded with Bright Beginner and Star Performer at Ahex Technologies.`,
    resumeUrl: "https://www.canva.com/design/DAFj-JlZs_I/lYKRtoro-a54diJcflWvuA/view?utm_content=DAFj-JlZs_I&utm_campaign=designshare&utm_medium=link&utm_source=editor",
    githubUrl: "https://github.com/venu123143",
    socialLinks: [
        { icon: Linkedin, href: "https://www.linkedin.com/in/venureddy9493/", color: "hover:text-blue-600" },
        { icon: Briefcase, href: "https://www.fiverr.com/sellers/venu_9090/", color: "hover:text-green-600" },
        { icon: Mail, href: "mailto:venugopalreddy9493@gmail.com", color: "hover:text-red-600" },
        { icon: Phone, href: "tel:+918008952100", color: "hover:text-purple-600" },
    ],
}

// About Data
export const aboutData = {
    professionalJourney: {
        role: "Software Engineer",
        experience: `${experience} years of experience`,
        description: `I am working as an Software Engineer with more than ${experience} years of experience in the Fullstack field. I work closely with project teams to build innovative solutions for client business requirements.`,
    },
    awards: [
        {
            title: "Bright Beginner Award",
            description: "Ahex Technologies - First Year Achievement",
        },
        {
            title: "Star Performer Award.",
            description: "Ahex Technologies - Second Year Achievement",
        },
    ],
    stats: {
        companyProjects: "6+",
        personalProjects: "5+",
    },
    interests: ["Cricket", "Yoga", "RSS Events", "Continuous Learning", "Personal Projects"],
    achievements: [
        { icon: TrendingUp, title: "70% Faster Deployments", description: "CI/CD pipeline optimization" },
        { icon: Shield, title: "40% Security Improvement", description: "Reduced unauthorized access" },
        { icon: Zap, title: "35% Performance Boost", description: "Data-fetching speed enhancement" },
        { icon: Target, title: "30% Less Downtime", description: "Server reliability improvement" },
    ],
    corePhilosophy: "Always aiming to give the best output on time with 100% effort. Passionate about creating efficient, scalable solutions that make a real impact.",
}

// Experience Data
export const experienceData = [
    {
        role: "Software Engineer",
        company: "Ahex Technologies",
        duration: "SEP 2025 - Present",
        location: "On Site",
        totalExp: "Present",
        highlights: [
            {
                icon: Server,
                title: "DevOps & Infrastructure",
                color: "from-blue-500 to-cyan-500",
                items: [
                    "Orchestrated CI/CD using Github and Bitbucket pipelines",
                    "Containerized each microservice using Docker for consistency",
                    "Automated server updates on Linux VMs with Nginx",
                    "Achieved 70% faster deployment cycle",
                ],
            },
            {
                icon: Code,
                title: "Full Stack Development",
                color: "from-green-500 to-emerald-500",
                items: [
                    "Backend development with Node.js & Nest.js.",
                    "Frontend development with React.js.",
                    "Created REST APIs, GraphQL Queries and Grpc Proto Buffers.",
                    "Used libraries like Socket.io, WebRTC and Mediasoup.",
                ],
            },
            {
                icon: Database,
                title: "Database & Security",
                color: "from-purple-500 to-violet-500",
                items: [
                    "Used Sequelize ORM And Type ORM for implementation.",
                    "Written SQL queries with MySQL/PostgreSQL.",
                    "Used NoSql db like MongoDB.",
                    "Implemented the Authentication, Authorization and RBAC.",
                ],
            },
            {
                icon: Award,
                title: "Key Achievements",
                color: "from-yellow-500 to-orange-500",
                items: [
                    "Promoted to Software Engineer role.",
                    "6+ company projects completed.",
                    "5+ personal full-stack projects.",
                    "WhatsApp clone, Amazon clone, Video calling app.",
                ],
            },
        ],
    },
    {
        role: "Associate Software Engineer",
        company: "Ahex Technologies",
        duration: "JUL 2023 - SEP 2025",
        location: "On Site",
        totalExp: "2.5+ Years",
        highlights: [
            {
                icon: Server,
                title: "DevOps & Infrastructure",
                color: "from-blue-500 to-cyan-500",
                items: [
                    "Orchestrated CI/CD using Github and Bitbucket pipelines",
                    "Containerized each microservice using Docker for consistency",
                    "Automated server updates on Linux VMs with Nginx",
                    "Achieved 70% faster deployment cycle",
                ],
            },
            {
                icon: Code,
                title: "Full Stack Development",
                color: "from-green-500 to-emerald-500",
                items: [
                    "Backend development with Node.js & Nest.js.",
                    "Frontend development with React.js.",
                    "Created REST APIs, GraphQL Queries and Grpc Proto Buffers.",
                    "Used libraries like Socket.io, WebRTC and Mediasoup.",
                ],
            },
            {
                icon: Database,
                title: "Database & Security",
                color: "from-purple-500 to-violet-500",
                items: [
                    "Used Sequelize ORM And Type ORM for implementation.",
                    "Written SQL queries with MySQL/PostgreSQL.",
                    "Used NoSql db like MongoDB.",
                    "Implemented the Authentication, Authorization and RBAC.",
                ],
            },
            {
                icon: Award,
                title: "Key Achievements",
                color: "from-yellow-500 to-orange-500",
                items: [
                    "Bright Beginner & Star Performer Award recipient.",
                    "6+ company projects completed.",
                    "5+ personal full-stack projects.",
                    "WhatsApp clone, Amazon clone, Video calling app.",
                ],
            },
        ],
    },
]

// Experience Slider Settings
export const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    adaptiveHeight: true,
    className: "experience-slider",
}

// Projects Data
export const projectsData = [
    {
        title: "Bald Eagle Barns – Sales & Operations Platform (US)",
        description:
            "Built a microservice-based backend using Node.js, TypeScript, gRPC, MongoDB, and Redis, implementing authentication, sales quotes/orders, work orders, inventory, and task management for end-to-end business operations.",
        tech: ["Node.js", "TypeScript", "MongoDB", "Redis", "gRPC", "Linux/Nginx", "Authorize.net"],
        type: "Professional",
        url: "https://www.baldeaglebarns.com/",
        impact: "End-to-end business operations",
    },
    {
        title: "Thapala (Mailing Platform)",
        description:
            "Secure email platform with TypeScript, SQL/Sequelize ORM, automated deployments, and Azure Blob Storage integration.",
        tech: ["Node.js", "TypeScript", "SQL", "Sequelize", "Azure", "GitHub Actions"],
        type: "Professional",
        url: "https://thapala.com/home",
        impact: "Enhanced email security by 60%",
    },
    {
        title: "TalentPrise (Job Portal)",
        description:
            "Its a Nest js Microservice Application. With full typescript support with the Graphql and Grpc Proto buffers",
        tech: ["Nest.js", "TypeScript", "Microservice", "PostgreSQL", "TypeOrm", "Graphql", "Grpc"],
        type: "Professional",
        url: "https://www.talentprise.com/",
        impact: "Search Jobs with the Ai Recommendations.",
    },
    {
        title: "E Coupons - Libya Mobile Recharge Portal",
        description:
            "Coupon management system with bulk Excel uploads, dealer wallet system, Redis caching, and Bull queues.",
        tech: ["Node.js", "MySQL", "Redis", "Bull Queue", "Excel Processing"],
        type: "Professional",
        url: "https://vms.lahtha.ly/#/login",
        impact: "Processed 10K+ transactions daily",
    },
    {
        title: "WMS/OMS/TMS Management System",
        description:
            "Logistics management system with dynamic RBAC, rate limiting, and 35% improved data-fetching speed.",
        tech: ["Node.js", "TypeScript", "MySQL", "GraphQL", "Redis", "Linux/Nginx"],
        type: "Professional",
        url: "http://143.244.132.143:7200/#/",
        impact: "Reduced server downtime by 30%",
    },
    {
        title: "TASO (Trading Community App)",
        description: "Real-time chat and 1:1 video calls platform with Socket.IO and WebRTC for trading community.",
        tech: ["Socket.IO", "WebRTC", "PostgreSQL", "Sequelize", "Authentication"],
        type: "Professional",
        url: "https://play.google.com/store/apps/details?id=com.taso.main&hl=en",
        impact: "Supported 1000+ concurrent users",
    },
    {
        title: "Dosen (Its An mentoring platform )",
        description:
            "An intelligent platform that aligns employees personal goals with organizational objectives.",
        tech: [
            "React.js", "Node.js", "Azure Serverless", "Azure Functions", "MongoDB"
        ],
        type: "Professional",
        url: "https://beta.dosen.io/",
        impact: "Enhanced team productivity With Ai.",
    },
    {
        title: "Amazon Clone (E-commerce)",
        description: "Full-stack e-commerce app with Razorpay payments, product search/filters, and admin dashboard.",
        tech: ["React", "Tailwind", "Node.js", "MongoDB", "Razorpay", "Google Auth"],
        type: "Personal",
        url: "https://onlinestore.nerchuko.in/",
        impact: "Complete e-commerce solution",
    },
    {
        title: "MeetSpace (Video Conferencing)",
        description: "Privacy-focused video calling app supporting 10-12 participants with WebRTC/Mediasoup architecture.",
        tech: ["React-Vite", "Tailwind css", "Socket.io", "Node.js", "WebRTC", "Mediasoup"],
        type: "Personal",
        url: "https://meetspace.nerchuko.in/",
        impact: "Zero authentication barriers",
    },
    {
        title: "Achievers Library - Study Space Management Platform",
        description: `A complete admin dashboard and landing page for a study space business. 
          The system manages student subscriptions, payments, queries and provides detailed analytics.`,
        tech: [
            "React", "TypeScript", "ShadCN UI", "MySQL", "Sequelize",
            "API Caching", "Tailwind CSS", "Node.js"
        ],
        url: "https://achieverslibraryy.in/",
        type: "Personal",
        impact: "Comprehensive study space management",
    },
    {
        title: "WhatsApp Clone - Real Time Messaging App with Modern Features",
        description: `This WhatsApp Clone is a feature-rich messaging application designed with 
      a modern technology stack. It mirrors WhatsApp's core functionalities, offering secure user
      authentication, real-time chat, and media-sharing capabilities.`,
        tech: [
            "React", "Node.js", "Express", "MongoDB", "Socket.io", "WebRTC", "Tailwind CSS"
        ],
        type: "Personal",
        url: "https://vchat.nerchuko.in/",
        impact: "Feature-rich real-time messaging",
    },
    {
        title: "FileFlow - Cloud Storage & File Management Platform",
        description: "A comprehensive file management system similar to Google Drive, secure file sharing, and advanced storage management features.",
        tech: [
            "Bun", "React", "Hono", "PostgreSQL", "AWS S3", "Socket.io", "Redis", "BullMQ", "Shadn Cn UI", "TanStack Query", "Zustand"
        ],
        type: "Personal",
        url: "https://fileflow.nerchuko.in/",
        impact: "Complete cloud storage solution",
    },
]

// Skills Data
export const skillsData = {
    frontend: ["React.js", "TypeScript", "HTML", "CSS", "JavaScript", "Tailwind CSS"],
    backend: ["Node.js", "Nest.js", "Express.js", "GraphQL", "REST APIs", "Grpc"],
    database: ["MongoDB", "MySQL", "PostgreSQL", "Redis", "Sequelize ORM", "Type ORM"],
    devops: ["AWS", "S3", "EC2", "Docker", "CI/CD", "Linux", "Nginx", "Azure", "VPC"],
    payment: ["Authorize.net", "Stripe", "Webhooks"],
    other: ["Socket.io", "WebRTC", "Mediasoup", "Git", "jira", "GitHub", "Kafka"],
}

// Education Data
export const educationData = [
    {
        degree: "Bachelor of Engineering - Electronics and Communication",
        institution: "Saveetha School of Engineering, Chennai",
        year: "March 2022",
        percentage: "70%",
        color: "from-blue-500 to-purple-600",
    },
    {
        degree: "Class 12th - Intermediate",
        institution: "Sree Chaitanya Jr College, Kavali",
        year: "March 2017",
        percentage: "88.1%",
        color: "from-green-500 to-emerald-600",
    },
]

// Contact Data
export const contactData = {
    description: "I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.",
    contacts: [
        {
            icon: Mail,
            label: "Email",
            value: "venugopalreddy9493@gmail.com",
            href: "mailto:venugopalreddy9493@gmail.com",
            color: "blue",
        },
        {
            icon: Phone,
            label: "Phone",
            value: "+91 8008952100",
            href: "tel:+918008952100",
            color: "green",
        },
        {
            icon: Linkedin,
            label: "LinkedIn",
            value: "linkedin.com/in/venureddy9493",
            href: "https://www.linkedin.com/in/venureddy9493/",
            color: "purple",
        },
        {
            icon: Globe,
            label: "Fiverr",
            value: "fiverr.com/sellers/venu_9090",
            href: "https://www.fiverr.com/sellers/venu_9090/",
            color: "orange",
        },
    ],
    linkedinUrl: "https://www.linkedin.com/in/venureddy9493/",
    githubUrl: "https://github.com/venu123143/",
    availability: "Available for freelance projects and full-time opportunities",
}

// Navigation Data
export const navigationData = {
    name: "Venu Gopal Reddy",
    items: ["Home", "About", "Experience", "Projects", "Skills", "Education", "Contact"],
}

