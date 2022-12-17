import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AppRoute } from '../../router/AppRouter';

/**
 * Header component
 * 
 * @name Header
 * 
 * @returns {JSX.Element} Header component
 */
export const Header = (): JSX.Element => {

    const location = useLocation();
    const [currentPath, setCurrentPath] = useState<string>(location.pathname);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
    const links = [
        {
            name: 'Services',
            path: AppRoute.Home
        },
        {
            name: 'Works',
            path: AppRoute.NotFound
        },
        {
            name: 'Contacts',
            path: AppRoute.NotFound
        }
    ];

    const socialLinks = [
        {
            name: 'LinkedIn',
            path: 'https://www.linkedin.com/in/ugo-venture-099174227/',
            icon: 'linkedin-in'
        },
        {
            name: 'GitHub',
            path: 'https://github.com/Swymn',
            icon: 'github'
        }
    ];

    useEffect(() => {
        setCurrentPath(location.pathname);
    }, [location]);

    /**
     * This method is used to navigate to the specified path and close the mobile menu
     * 
     * @param {string} path - The path to navigate to
     * 
     * @returns {void}
     */
    const goTo = (path: string): void => {
        setCurrentPath(path);
        setIsMobileMenuOpen(false);
    }

    return (
        <header className="flex flex-row items-center justify-between py-6 bg-blue overflow-hidden">
            {/* Site name section */}
            <Link to={AppRoute.Home} className="flex flex-row items-center justify-center gap-x-1.5 min-w-[205px] px-10">
                <h1 className="font-semibold text-2xl">Ugo</h1>
                <h1 className="font-thin text-2xl">Venture</h1>
            </Link>

            {/* Navbar section (hidden in mobile view) */}
            <nav className="hidden lg:block min-w-[340px]">
                <ul className="flex flex-row items-center justify-between px-4">
                    {links.map((link, index) => (
                        <li key={index}>
                            <Link onClick={() => setCurrentPath(link.path)} to={link.path} className={`${currentPath === link.path ? 'text-rose' : 'text-white'} transition-colors duration-500`}>{currentPath === link.path ? `< ${link.name} />` : link.name}</Link>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Social section (hidden in mobile view) */}
            <div className="hidden lg:flex flex-row items-center justify-between min-w-[476px] px-12">
                {socialLinks.map((social, index) => (
                    <a key={index} href={social.path} target="_blank" rel="noreferrer" className="flex flex-row justify-center items-center">
                        <img src={`/img/svg/${social.icon}.svg`} alt={`${social.name} logo`} className="mx-3"/>
                        <p className="font-thin">{social.name}</p>
                    </a>
                ))}

                <Link to={AppRoute.NotFound} className="flex justify-center items-center w-12 h-12 rounded-full bg-white">
                    <img src="/img/svg/envelope-solid.svg" alt="Envelope logo" />
                </Link>
            </div>

            {/* Menu icon (only visible in mobile view) */}
            <div className="flex lg:hidden justify-center items-center w-12 h-12 rounded-full mr-10 bg-white">
                <img src="/img/svg/bars-solid.svg" alt="menu icon" onClick={() => setIsMobileMenuOpen((prevState) => !(prevState))} />
            </div>

            {/* Mobile nav menu */}
            <div className={`absolute ${isMobileMenuOpen ? "left-0 w-full" : "left-full w-0"} top-0 transition-all duration-500 overflow-hidden`}>
                <div className="min-h-[100vh] bg-blue">
                    <div className={`${isMobileMenuOpen ? "opacity-100" : "opacity-0"} duration-200 transition-opacity`}>
                        <div className="flex justify-end mt-6 mr-10">
                            <div className="flex justify-center items-center w-12 h-12 rounded-full bg-white">
                                <img src="/img/svg/bars-solid.svg" alt="menu icon" onClick={() => setIsMobileMenuOpen((prevState) => !(prevState))} />
                            </div>
                        </div>

                        <div className="flex flex-col items-center gap-y-8 my-12">
                            {links.map((link, index) => (
                                <Link
                                    key={index}
                                    to={link.path}
                                    onClick={() => goTo(link.path)}
                                    className={`${currentPath === link.path ? 'text-rose font-semibold' : 'text-white font-normal'} transition-colors duration-500`}
                                >
                                    {currentPath === link.path ? `< ${link.name} />` : link.name}
                                </Link>
                            ))}

                            <hr className="w-5/12 my-4" />

                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.path}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex flex-row justify-center items-center"
                                >
                                    <p className="font-semibold">{`< ${social.name} />`}</p>
                                </a>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </header>
    )
}