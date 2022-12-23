import React from "react";
import { Link } from "react-router-dom";
import { AppRoute } from "@Router/AppRouter";

/**
 * Footer component
 * 
 * @name Footer
 * 
 * @returns {JSX.Element} Footer component
 */
export const Footer: React.FC = (): JSX.Element => {

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

    return (
        <footer className="flex flex-col gap-y-8 p-6 bg-mauve">
            <div className="flex flex-col-reverse gap-y-6 lg:gap-y-0 lg:flex-row justify-between">
                <ul className="lg:ml-4">
                    {links.map((link, index) => (
                        <li key={index}>
                            <Link to={link.path}>{`<${link.name} />`}</Link>
                        </li>
                    ))}
                </ul>

                <div>
                    <p className="text-white">Toulouse, France</p>
                    <p>venture.ugo@gmail.com</p>
                </div>
            </div>

            <div className="flex flex-col-reverse gap-y-2 lg:gap-y-0 lg:flex-row justify-between items-center">
                <div className="flex flex-row items-center gap-x-4">
                    <Link to={AppRoute.Home} className="flex flex-row items-center justify-center gap-x-1.5">
                        <h1 className="font-normal text-lg">Ugo</h1>
                        <h1 className="font-thin text-md">Venture</h1>
                    </Link>
                    <p className="text-white text-sm lg:text-md">&copy; {new Date().getFullYear()}. All Rights Reserved.</p>
                </div>

                <ul className="flex flex-row gap-x-20 lg:gap-x-3 px-20">
                    {socialLinks.map((link, index) => (
                        <li key={index}>
                            <a href={link.path}
                                target="_blank"
                                rel="noreferrer"
                                className="flex flex-row items-center gap-x-2"
                            >
                                <img src={`/img/svg/${link.icon}.svg`} alt={`${link.name} logo`} />
                            </a>
                        </li>
                    ))}     
                </ul>
            </div>
        </footer>
    );
}
