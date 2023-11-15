import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const heading = 'ABOUT CLIMATE CHANGE';
const content =
    "Climate change refers to the long-term alteration in Earth's average weather patterns. It involves shifts in temperature, precipitation, and wind patterns, and it can affect ecosystems, sea levels, and weather events. While climate change is a natural process, the current changes are happening at an accelerated pace largely due to human activities, such as the burning of fossil fuels, deforestation, and industrial processes. The primary driver of recent climate change is the increase in greenhouse gases, like carbon dioxide, in the Earth's atmosphere. This enhanced greenhouse effect traps more heat, causing the planet to warm.\n" +
    "\n" +
    "The consequences of climate change are far-reaching and include more frequent and severe weather events, rising sea levels, disruptions in agriculture, and threats to biodiversity. It's crucial for us to understand these changes and take action to mitigate their impacts, adapt to the new realities, and work toward a more sustainable future. By reducing greenhouse gas emissions and adopting environmentally friendly practices, we can help combat the challenges posed by climate change.\n";

const About = () => {
    const backgroundStyle = {
        backgroundImage: `url('/AboutBackground.png')`, // Adjust the path to your image
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        position: 'relative',
    };


    const headingVariants = {
        hidden: { opacity: 0, x: 0 },
        visible: { opacity: 1, x: 0 },
    };

    const contentVariants = {
        hidden: { opacity: 0, x: -10 },
        visible: { opacity: 1, x: 0 },
    };



    const containerRef = useRef(null);
    const controls = useAnimation();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (containerRef.current) {
                const { top } = containerRef.current.getBoundingClientRect();
                const bottom = containerRef.current.getBoundingClientRect().bottom;

                // Adjust these thresholds based on your layout and preferences
                const thresholdEnter = window.innerHeight * 0.5;
                const thresholdLeave = window.innerHeight * 0.5;

                if (top < thresholdEnter && bottom > thresholdLeave) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            }
        };

        // Attach the scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Trigger initial check
        handleScroll();

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        if (isVisible) {
            controls.start('visible');
        } else {
            controls.start('hidden');
        }
    }, [isVisible, controls]);

    return (
        <div style={backgroundStyle}>
            <div
                ref={containerRef}
                id="About"
                className="container max-w-screen-xl mx-auto flex items-center min-h-screen"
            >
                {/* About content */}
                <div
                    className="px-10 py-20 md:px-40"
                >
                    {/* About headline */}
                    <motion.div
                        style={{ letterSpacing: '0.5rem' }}
                        className="text-2xl text-textColorPrimary mb-10 text-center md:text-left"
                        animate={controls}
                        variants={headingVariants}
                        transition={{ duration: 0.5 }}
                    >
                        {heading}
                    </motion.div>
                    {/* About content */}
                    <motion.div
                        className="text-sm md:text-lg text-textColorQuaternary lg:w-3/4 xl:w-2/3 whitespace-pre-line"
                        animate={controls}
                        variants={contentVariants}
                        transition={{ duration: 1 }}
                    >
                        {content}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default About;
