import { Helmet } from 'react-helmet-async';
import MyImage from '@/assets/MyImage.jpeg';
import { experience } from '@/data/data';

function Layout({ children }: { children: React.ReactNode }) {
    // Construct absolute URL for og:image (needs full URL for social media)
    // MyImage is already a processed path from Vite (e.g., /assets/MyImage-abc123.jpeg)
    const baseUrl = 'https://nerchuko.in';
    const ogImageUrl = MyImage.startsWith('http') ? MyImage : `${baseUrl}${MyImage}`;

    // Format experience for display
    const experienceText = `${experience}+ years`;

    return (
        <>
            <Helmet>
                <title>Venu Gopal Reddy V -  Software Engineer | Full Stack Developer</title>
                <meta
                    name="description"
                    content={` Software Engineer with ${experienceText} of experience in full-stack development. Specialized in React.js, Node.js, TypeScript, and cloud technologies. Best Beginner Award and Star Performer Award winner at Ahex Technologies.`}
                />
                <meta
                    name="keywords"
                    content="Venu Gopal Reddy,  Software Engineer, Full Stack Developer, Mern Stack Developer, React.js Developer, Node.js Developer, TypeScript Developer, Ahex Technologies, Best Beginner Award, CI/CD, DevOps, GraphQL, MongoDB, MySQL, PostgreSQL, AWS, Azure, Linux, Nginx, Socket.io, WebRTC, Mediasoup, WebSockets, REST APIs, Agile, Scrum, Software Development"
                />
                <meta name="author" content="Venu Gopal Reddy V" />
                <link rel="canonical" href="https://nerchuko.in/" />
                {/* OpenGraph */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Venu Gopal Reddy V -  Software Engineer | Full Stack Developer" />
                <meta property="og:description" content={`Full-stack developer specialized in React, Node, TypeScript with ${experienceText} of experience.`} />
                <meta property="og:image" content={ogImageUrl} />
                <meta property="og:url" content="https://nerchuko.in/" />
                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Venu Gopal Reddy V -  Software Engineer" />
                <meta name="twitter:description" content={`Full Stack Developer with ${experienceText} of experience.`} />
                <meta name="twitter:image" content={ogImageUrl} />
            </Helmet>
            {children}
        </>
    );
}

export default Layout