import Link from "next/link";

import { HomeIcon } from "@primer/octicons-react";
import { ActiveLink } from "../active-link/ActiveLink";

const navItems = [
    {
        name: "About",
        url: "/about",
    },
    {
        name: "Pricing",
        url: "/pricing",
    },
    {
        name: "Contact",
        url: "/contact",
    },
];

export const Navbar = () => {
    return (
        <>
            <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
                <Link href={"/"} className="flex items-center">
                    <HomeIcon className="mr-2" />
                    <span>Home</span>
                </Link>
                <div className="flex flex-1"></div>
                {navItems.map((item) => (
                    <ActiveLink key={item.url} {...item} />
                ))}
            </nav>
        </>
    );
};
