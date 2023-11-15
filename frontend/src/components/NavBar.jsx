import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const background = "bg-black bg-opacity-10"; // Updated background class
const companyLogoUrl = '/JuniperoLogo.svg';
const navigation = [
    { name: 'HOME', href: '#Home' },
    { name: 'ABOUT', href: '#About' },
    { name: 'IMPACTS', href: '#Impacts' },
    { name: 'ACTION', href: '#Action' },
    { name: 'NEWS', href: '#News' },
];


function NavBar(props) {
    // State to track whether the mobile menu is open or closed
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <div className=''>
            {/*NavBar Background*/}
            <header className={`absolute inset-x-0 top-0 z-50 ${background}`}> {/*fixed instead of absolute cause the background to scroll with webpage*/}

                {/* Desktop NavBar */}
                <nav className="grid grid-cols-7 items-center justify-between ">

                    {/* First two columns for Logo */}
                    <div className="col-span-2 md:border-b md:border-r border-textColorSecondary flex items-center justify-center h-14">
                        {/* Company logo */}
                        <img
                            className=" h-12 w-auto"
                            src={companyLogoUrl}
                            alt=""
                        />
                    </div>




                    {navigation.map((item, index) => (
                        <div
                            key={item.name}
                            className={`hidden md:flex col-span-1 flex justify-center items-center border-b ${index < navigation.length - 1 ? 'border-r' : ''} border-textColorSecondary h-14`}
                        >
                            <a style={{ letterSpacing: '4px' }} className="text-sm text-white" href={item.href}>
                                {item.name}
                            </a>
                        </div>
                    ))}


                    {/* Third Element Mobile Menu button */}
                    <div className="col-start-7 md:hidden flex justify-center">
                        <button onClick={() => setMobileMenuOpen(true)}>
                            <Bars3Icon className="h-6 w-6 text-white" aria-hidden="true" />
                        </button>
                    </div>



                </nav>


                {/* Mobile NavBar */}
                <Dialog as="div" className="md:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                    {/*Dialog Container*/}
                    <div className="fixed inset-0 z-50 " />
                    {/*Dialog Panel Container*/}
                    <Dialog.Panel className={`fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-black bg-opacity-70 px-6 py-6 md:max-w-md `}>
                        {/*Dialog Panel Top Bar*/}
                        <div className="flex justify-end">

                            <button onClick={() => setMobileMenuOpen(false)}>
                                <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                            </button>
                        </div>
                        {/*Dialog Panel Content Links*/}
                            <div className="m-6 divide-y divide-white">
                                {/* Mobile navigation links */}
                                <div className="space-y-3 py-6">
                                    {navigation.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-white"
                                            onClick={() => setMobileMenuOpen(false)} // Close the menu when a link is clicked
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                </div>

                            </div>
                    </Dialog.Panel>
                </Dialog>
            </header>
        </div>
    )
}

export default NavBar;
