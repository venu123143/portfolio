import { Helmet } from 'react-helmet-async';

function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Helmet>
                <title>Venu Gopal Reddy V - Associate Software Engineer | Full Stack Developer</title>
                <meta
                    name="description"
                    content="Associate Software Engineer with 2+ years of experience in full-stack development. Specialized in React.js, Node.js, TypeScript, and cloud technologies. Best Beginner Award winner at Ahex Technologies."
                />
                <meta
                    name="keywords"
                    content="Venu Gopal Reddy, Associate Software Engineer, Full Stack Developer, React.js Developer, Node.js Developer, TypeScript Developer, Ahex Technologies, Best Beginner Award, CI/CD, DevOps, GraphQL, MongoDB, MySQL, PostgreSQL, AWS, Azure, Linux, Nginx, Socket.io, WebRTC"
                />
                <meta name="author" content="Venu Gopal Reddy V" />
                <link rel="canonical" href="https://nerchuko.in/" />
                {/* OpenGraph */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Venu Gopal Reddy V - Associate Software Engineer | Full Stack Developer" />
                <meta property="og:description" content="Full-stack developer specialized in React, Node, TypeScript." />
                <meta property="og:image" content="/og-image.jpg" />
                <meta property="og:url" content="https://nerchuko.in/" />
                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Venu Gopal Reddy V - Associate Software Engineer" />
                <meta name="twitter:description" content="Full Stack Developer with 2+ years of experience." />
                <meta name="twitter:image" content="/og-image.jpg" />
            </Helmet>
            {children}
        </>
    );
}

export default Layout