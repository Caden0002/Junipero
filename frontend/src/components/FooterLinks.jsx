import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaTelegram } from 'react-icons/fa';

const backgroundStyle = {
    backgroundImage: `url('/FooterBackground.jpeg')`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
};
const FooterLinkContent = [
    {
        title: 'EXPLORE',
        links: ['Facts', 'Evidence', 'Causes', 'Effects', 'Scientific Consensus', 'What Is Climate Change', 'Vital Signs', 'Extreme Weather', 'Questions (FAQ)']
    },
    {
        title: 'NEWS',
        links: ['News and Features', 'Subscribe', 'Climate Newsletter Archive']
    },
    {
        title: 'SOLUTIONS',
        links: ['Earth Science in Action', 'Mitigation and Adaptation', 'Sustainability and Government Resources']
    },
    {
        title: 'EXPLORE',
        links: ['Images of Change', 'Earth Minute Videos', 'Interactives', 'Beautiful Earth Gallery', 'Ask Junipero Climate']
    },
    {
        title: 'JUNIPERO SCIENCE',
        links: ['Science Mission Directorate', 'Junipero Data Resources', 'Earth System Science', 'Earth Science Missions', 'History', 'People']
    },
    {
        title: 'MORE',
        links: ['For Media', 'For Educators', 'Multimedia', 'En español', 'For Kids', 'About Us']
    }
];


const iconComponents = [
    { name: 'Twitter', icon: <FaTwitter /> },
    { name: 'Facebook', icon: <FaFacebook /> },
    { name: 'Instagram', icon: <FaInstagram /> },
    { name: 'LinkedIn', icon: <FaLinkedin /> },
    { name: 'YouTube', icon: <FaYoutube /> },
    { name: 'Telegram', icon: <FaTelegram /> },
];

function FooterLinks(props) {
    return (
        <div style={backgroundStyle}>
            <div className="container max-w-screen-xl mx-auto flex justify-center items-center md:min-h-screen py-20 px-10 md:px-40">
                <div className="container mx-auto md:flex justify-between">
                    {FooterLinkContent.map((column, columnIndex) => (
                        <div key={columnIndex} className="flex flex-col mb-12 md:mb-0">
                            <h4 className="mb-6 text-sm tracking-wide font-medium text-textColorSecondary font-Signikta">{column.title}</h4>
                            <ul className="space-y-2">
                                {column.links.map((link, linkIndex) => (
                                    <li key={linkIndex} className="text-textColorTertiary hover:underline text-xs cursor-pointer">
                                        {link}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                    <div className="text-textColorSecondary text-base ">
                        {iconComponents.map((item, index) => (
                            <div key={index} className="mb-8 hover:text-textColorTertiary cursor-pointer">
                                {item.icon}
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}

export default FooterLinks;
