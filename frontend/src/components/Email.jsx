import React, { useState } from 'react';
import { FaEnvelope } from 'react-icons/fa';
import emailjs from 'emailjs-com';

const backgroundStyle = {
    backgroundImage: `url('/EmailBackground.png')`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
};

const heading = 'GET THE NEWSLETTER';
const heading2 = 'Weekly top climate news will be sent to your email.';

function Email() {
    const [toEmail, setToEmail] = useState('');
    const [emailSent, setEmailSent] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        const emailParams = {
            toEmail: toEmail,
        };

        emailjs
            .send("service_d6e9ylu", "template_t6udqhp", emailParams, 'ebY-nCK-RqixU96qH')
            .then(() => {
                setEmailSent(true);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    return (
        <div style={backgroundStyle}>
            <div id="Email" className="container max-w-screen-xl mx-auto flex flex-col justify-center items-center min-h-[50vh]">
                <h1 style={{ letterSpacing: '0.5rem' }} className="text-2xl text-textColorPrimary mb-4">
                    {heading}
                </h1>

                <form onSubmit={sendEmail}>
                    <div className="flex">
                        <input
                            type="email"
                            placeholder="A proxy email will be sent since this is a test webpage"
                            value={toEmail}
                            onChange={(e) => setToEmail(e.target.value)}
                            className="bg-black w-96 h-12 border border-transparent text-white shadow-md rounded-md p-2"
                        />
                        <button type="submit" className="ml-4 text-white text-xl">
                            <FaEnvelope />
                        </button>
                    </div>
                </form>


                {emailSent && (
                    <p className="text-white mt-4 text-textColorSecondary">
                        A proxy email has been sent to your email!
                    </p>
                )}
            </div>
        </div>
    );
}

export default Email;
