import React from 'react';
import { FaLinkedin, FaGithub, FaUserTie, FaBlog} from 'react-icons/fa';


const background = "bg-black";
const FooterPrivacyText = '© 2023 Caden Chen. All Rights Reserved.';
const FooterDisclaimer = 'This webpage is intended for personal and educational purposes and does not support or endorse commercial usage of any copyrighted material.'
const FooterIcons = [
    <a href="https://www.linkedin.com/in/caden-chen-576189205/" key="linkedin" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>,
    <a href="https://github.com/Caden0002" key="github" target="_blank" rel="noopener noreferrer"><FaGithub /></a>,
    <a href="https://www.cadenchen.net/" key="usertie" target="_blank" rel="noopener noreferrer"><FaUserTie /></a>,
    <a href="https://blog.cadenchen.net/" key="blog" target="_blank" rel="noopener noreferrer"><FaBlog /></a>,
];

function Footer(props) {
    return (
        <div className={background}>
            {/*container for the section*/}
            <div className="container max-w-screen-xl mx-auto flex justify-center items-center md:min-h-full py-10 px-10">
                <div className="lg:w-8/12 w-full">




                    <p className="block text-sm text-center text-textColorPrimary ">
                        {FooterPrivacyText}
                    </p>


                    {/* Footer icons */}
                    <div className="flex justify-center m-5 space-x-5 text-textColorPrimary">
                        {FooterIcons.map((Icon, index) => (
                            <div key={index}>
                                {Icon}
                            </div>
                        ))}
                    </div>

                    <p className="block text-xs text-center text-textColorTertiary">
                        {FooterDisclaimer}
                    </p>

                </div>

            </div>
        </div>
    );
}

export default Footer;
