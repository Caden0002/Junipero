const background = "/HeroVideo.m4v";
const heading = 'JOIN THE FIGHT\nAGAINST\nCLIMATE CHANGE';
const button1 = 'LEARN MORE';

function Hero() {
    return (

            <div id="Home" className="container max-w-screen-xl mx-auto flex items-center min-h-screen">
                <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover">
                    <source src={background} type="video/mp4" />
                </video>
                {/* Hero content */}
                <div className="absolute px-10 md:px-40">
                    <div className="">
                        {/* Hero headline */}
                        <h1 style={{ letterSpacing: '1.3rem' }} className=" text-6xl text-textColorPrimary leading-normal whitespace-pre-line">
                            {heading}
                        </h1>
                        {/* Call to Action buttons */}

                        <button
                            className=" mt-8 text-sm text-textColorPrimary tracking-widest border-b border-textColorTertiary hover:border-opacity-0">
                            {button1}
                        </button>

                    </div>
                </div>
            </div>
    );
}

export default Hero;
