import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const heading = 'TOP CLIMATE NEWS';
const heading2 = 'Trending this week';
const heading3 = 'Latest news';

function News() {
    const [newsData, setNewsData] = useState([]);
    const backgroundStyle = {
        backgroundImage: `url('/NewsBackground.png')`, // Adjust the path to your image
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
    };

    useEffect(() => {
        // Make a request to your Flask backend to fetch the data
        fetch('https://flask-climate.vercel.app/')
            .then(response => response.json())
            .then(data => {
                setNewsData(data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, []);



    return (
        <div style={backgroundStyle}>
            <div id="News" className="container max-w-screen-xl mx-auto flex flex-col justify-center items-center min-h-screen px-10 md:px-60">
                <h1 style={{ letterSpacing: '0.5rem' }} className="text-2xl text-textColorPrimary mb-10 md:mb-6 text-center">
                    {heading}
                </h1>

                {/* Trending container */}
                <h2 className="hidden md:block w-full text-base text-textColorPrimary text-left mb-2">
                    {heading2}
                </h2>

                {newsData.length > 0 && (
                    <div className="hidden md:block w-full bg-black bg-opacity-50 h-72">
                        <div className="grid md:grid-cols-8 gap-4">
                            <div className="md:col-span-5">
                                {newsData[0].top_image && (
                                    <a href={newsData[0].link} target="_blank" rel="noopener noreferrer">
                                    <img
                                        src={newsData[0].top_image}
                                        alt="Article"
                                        className="w-full h-72"
                                    />
                                    </a>
                                )}
                            </div>
                            <div className="md:col-span-3 py-6 px-6 flex flex-col justify-center items-center">
                                <h2 className="text-base text-textColorPrimary text-center mb-4">
                                    {newsData[0].header}
                                </h2>
                                <p className="text-base text-textColorSecondary text-left">
                                    {newsData[0].summary}
                                </p>

                            </div>
                        </div>
                    </div>
                )}

                {/* Latest container */}
                <h2 className="hidden md:block w-full text-base text-textColorPrimary text-left md:mt-6 lg:mt-12 xl:mt-24 mb-2 ">
                    {heading3}
                </h2>

                {newsData.length > 4 && newsData[4].top_image && (
                    <div className={`grid md:grid-cols-4 gap-6 md:gap-0 justify-between w-full`}>

                    <div className="bg-black bg-opacity-50 w-full md:w-48 h-40 md:h-60">
                        <div className="flex md:flex-col items-center justify-center">
                            {newsData[1].top_image && (
                                <a href={newsData[1].link} target="_blank" rel="noopener noreferrer">
                                <img
                                    src={newsData[1].top_image}
                                    alt="Article"
                                    className="w-full h-40 md:h-28"
                                />
                                </a>
                            )}
                            <h2 className="text-sm text-textColorPrimary py-4 px-2">
                                {newsData[1].header}
                            </h2>
                        </div>
                    </div>

                        <div className="bg-black bg-opacity-50 w-full md:w-48 h-40 md:h-60">
                            <div className="flex md:flex-col items-center justify-center">
                                {newsData[2].top_image && (
                                    <a href={newsData[2].link} target="_blank" rel="noopener noreferrer">

                                    <img
                                        src={newsData[2].top_image}
                                        alt="Article"
                                        className="w-full h-40 md:h-28 "
                                    />
                                    </a>
                                )}
                                <h2 className="text-sm text-textColorPrimary py-4 px-2">
                                    {newsData[2].header}
                                </h2>
                            </div>
                        </div>

                        <div className="bg-black bg-opacity-50 w-full md:w-48 h-40 md:h-60">
                            <div className="flex md:flex-col items-center justify-center">
                                {newsData[3].top_image && (
                                    <a href={newsData[3].link} target="_blank" rel="noopener noreferrer">

                                    <img
                                        src={newsData[3].top_image}
                                        alt="Article"
                                        className="w-full h-40 md:h-28 "
                                    />
                                    </a>
                                )}
                                <h2 className="text-sm text-textColorPrimary py-4 px-2">
                                    {newsData[3].header}
                                </h2>
                            </div>
                        </div>

                        <div className="hidden md:block bg-black bg-opacity-50  w-full md:w-48 h-60 ">
                            <div className="flex md:flex-col items-center justify-center">
                                {newsData[4].top_image && (
                                    <a href={newsData[4].link} target="_blank" rel="noopener noreferrer">

                                    <img
                                        src={newsData[4].top_image}
                                        alt="Article"
                                        className="w-full h-28 "
                                    />
                                    </a>
                                )}
                                <h2 className="text-sm text-textColorPrimary py-4 px-2">
                                    {newsData[4].header}
                                </h2>
                            </div>
                        </div>


                    </div>
                )}

            </div>
        </div>

    );
}

export default News;
