
import React from 'react';
import { Mail, Globe, Twitter, Linkedin, MapPin, Phone } from 'lucide-react';

interface ContactOption {
    icon: React.ReactNode;
    title: string;
    subtitle: string;
    link?: string;
    linkText?: string;
}

interface ContactInfo {
    email: string;
    website: string;
    twitter: string;
    linkedin: string;
    address: string;
    phone: string;
}

const ContactSection: React.FC = () => {
    const contactInfo: ContactInfo = {
        email: "venugopalreddy9493@gmail.com",
        website: "www.nerchuko.in",
        twitter: "@venu_reddy_9493",
        linkedin: "linkedin.com/in/venu-reddy-a226881b6/",
        address: "Kavali, Andhra Pradesh, India",
        phone: "+91 80089 52100"
    };

    const contactOptions: ContactOption[] = [
        {
            icon: <Mail className="w-8 h-8" />,
            title: "Email",
            subtitle: "Send us an email",
            linkText: contactInfo.email,
            link: `mailto:${contactInfo.email}`
        },
        {
            icon: <Globe className="w-8 h-8" />,
            title: "Website",
            subtitle: "Visit our website",
            linkText: contactInfo.website,
            link: `https://${contactInfo.website}`
        },
        {
            icon: <Twitter className="w-8 h-8" />,
            title: "Twitter",
            subtitle: "Follow us on Twitter",
            linkText: contactInfo.twitter,
            link: `https://twitter.com/${contactInfo.twitter.replace('@', '')}`
        },
        {
            icon: <Linkedin className="w-8 h-8" />,
            title: "LinkedIn",
            subtitle: "Connect with us on LinkedIn",
            linkText: contactInfo.linkedin,
            link: `https://${contactInfo.linkedin}`
        },
        {
            icon: <MapPin className="w-8 h-8" />,
            title: "Address",
            subtitle: contactInfo.address
        },
        {
            icon: <Phone className="w-8 h-8" />,
            title: "Phone",
            subtitle: "Give us a call",
            linkText: contactInfo.phone,
            link: `tel:${contactInfo.phone}`
        }
    ];

    return (
        <div id='contactme' className="bg-[#F8F7F3] p-8 w-full">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-semibold mb-4">Contact Information</h1>
                    <p className="text-gray-600">Here's how you can reach us.</p>
                </div>

                <div className="relative">
                    <div className="flex overflow-x-auto pb-6 gap-6 snap-x snap-mandatory no-scrollbar">
                        {contactOptions.map((option, index) => (
                            <div
                                key={index}
                                className="flex-none w-80 snap-center"
                            >
                                <div className="bg-white border border-gray-200 rounded-xl p-6 h-full hover:border-gray-300 transition-all duration-300">
                                    <div className="p-3 bg-gray-50 rounded-full w-fit mb-6">
                                        {option.icon}
                                    </div>

                                    <h3 className="text-lg font-semibold mb-2">
                                        {option.title}
                                    </h3>

                                    <p className="text-gray-600 mb-4">
                                        {option.subtitle}
                                    </p>

                                    {option.link && (
                                        <a
                                            href={option.link}
                                            target={option.link.startsWith('http') ? '_blank' : undefined}
                                            rel={option.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                                            className="text-gray-900 font-medium hover:text-blue-600 transition-colors duration-300"
                                        >
                                            {option.linkText}
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactSection;
