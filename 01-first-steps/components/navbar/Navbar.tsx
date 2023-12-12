import Link from "next/link";

import { HomeIcon } from "@primer/octicons-react";

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
                    <Link key={item.url} href={item.url} className="mr-2">
                        {item.name}
                    </Link>
                ))}
            </nav>
        </>
    );
};
