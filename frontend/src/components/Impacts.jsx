import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const heading = 'IMPACTS OF CLIMATE CHANGE';

const header1 = 'WATER STRESS';
const header2 = 'DISPLACED PEOPLE';
const header3 = 'ECONOMIC COST';
const header4 = 'SPECIES EXTINCTION';
const header5 = 'INCREASE HEATWAVE';
const header6 = 'SEA LEVEL RISE';

const point1 = 'By 2050, more than half of the world\'s population, roughly\n50%, might struggle with water shortages because of\nchanging rainfall patterns.';
const point2 = 'Over 200 million people could be left homeless by 2050\ndue to climate-related impacts.';
const point3 = 'Climate change might lead to a loss of 0.7% of the world\'s\nannual economic output by 2100, which is equivalent to\ntrillions of dollars.';
const point4 = 'The rate of species disappearing from the planet could be\nas much as 10,000 times higher than the natural rate by\n2100, endangering various forms of life.';
const point5 = 'By 2050, some regions could see a rise of over 50% in\nextremely hot days, which could make heatwaves more\nfrequent and intense.';
const point6 = 'Rising sea levels could result in countries like the\nMaldives, Bangladesh, and parts of the Netherlands\nexperiencing more frequent and severe coastal flooding.';

const Impacts = () => {
    const backgroundStyle = {
        backgroundImage: `url('/ImpactsBackground.png')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
    };



    const headingVariants = {
        hidden: { opacity: 0, x: 0 },
        visible: { opacity: 1, x: 0 },
    };

    const pointVariantsRight = {
        hidden: { opacity: 0, x: -10 },
        visible: { opacity: 1, x: 0 },
    };

    const pointVariantsLeft = {
        hidden: { opacity: 0, x: 10 },
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
                id="Impacts"
                className="container max-w-screen-xl mx-auto flex flex-col justify-center items-center min-h-screen py-20 md:py-0"
            >
                <motion.h1
                    style={{ letterSpacing: '0.5rem' }}
                    className="text-2xl text-textColorPrimary mb-10 md:mb-20 text-center"
                    variants={headingVariants}
                    animate={controls}
                    transition={{ duration: 0.5 }}
                >
                    {heading}
                </motion.h1>

                <div className="grid md:grid-cols-12 w-full ">
                    {/* Header and Point 1 */}
                    <motion.div
                        className="md:ml-10 md:col-span-1 md:col-start-2 text-center mb-6 md:mb-0"
                        variants={pointVariantsLeft}
                        animate={controls}
                        transition={{ duration: 1 }}
                    >
                        <div className="mb-1 text-base text-textColorSecondary underline whitespace-nowrap">
                            {header1}
                        </div>
                        <div className="text-sm text-textColorSecondary whitespace-pre">
                            {point1}
                        </div>
                    </motion.div>

                    {/* Header and Point 2 */}
                    <motion.div
                        className="md:col-span-1 md:col-start-9 text-center mb-6 md:mb-0"
                        variants={pointVariantsRight}
                        animate={controls}
                        transition={{ duration: 1 }}
                    >
                        <div className="mb-1 text-base text-textColorSecondary underline whitespace-nowrap">
                            {header2}
                        </div>
                        <div className="text-sm text-textColorSecondary whitespace-pre">
                            {point2}
                        </div>
                    </motion.div>

                    {/* Header and Point 5 */}
                    <motion.div
                        className="md:mt-20 md:col-span-1 md:col-start-2 text-center mb-6 md:mb-0"
                        variants={pointVariantsLeft}
                        animate={controls}
                        transition={{ duration: 1 }}
                    >
                        <div className="mb-1 text-base text-textColorSecondary underline whitespace-nowrap">
                            {header5}
                        </div>
                        <div className="text-sm text-textColorSecondary whitespace-pre">
                            {point5}
                        </div>
                    </motion.div>

                    {/* Header and Point 3 */}
                    <motion.div
                        className="md:mt-20 md:ml-16 md:col-span-1 md:col-start-9 text-center mb-6 md:mb-0"
                        variants={pointVariantsRight}
                        animate={controls}
                        transition={{ duration: 1 }}
                    >
                        <div className="mb-1 text-base text-textColorSecondary underline whitespace-nowrap">
                            {header3}
                        </div>
                        <div className="text-sm text-textColorSecondary whitespace-pre">
                            {point3}
                        </div>
                    </motion.div>

                    {/* Header and Point 6 */}
                    <motion.div
                        className="md:mt-20 md:ml-16 md:col-span-1 md:col-start-2 text-center mb-6 md:mb-0"
                        variants={pointVariantsLeft}
                        animate={controls}
                        transition={{ duration: 1 }}
                    >
                        <div className="mb-1 text-base text-textColorSecondary underline whitespace-nowrap">
                            {header6}
                        </div>
                        <div className="md:mb-20 text-sm text-textColorSecondary whitespace-pre">
                            {point6}
                        </div>
                    </motion.div>

                    {/* Header and Point 4 */}
                    <motion.div
                        className="md:mt-20 md:ml-2 md:col-span-1 md:col-start-9 text-center mb-6 md:mb-0"
                        variants={pointVariantsRight}
                        animate={controls}
                        transition={{ duration: 1 }}
                    >
                        <div className="mb-1 text-base text-textColorSecondary underline whitespace-nowrap">
                            {header4}
                        </div>
                        <div className="md:mb-20 text-sm text-textColorSecondary whitespace-pre">
                            {point4}
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Impacts;
