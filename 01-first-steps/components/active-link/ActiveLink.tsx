"use client";

import Link from "next/link";
import style from "./ActiveLink.module.css";
import { usePathname } from "next/navigation";

interface Props {
    url: string;
    name: string;
}

export const ActiveLink = ({ url, name }: Props) => {
    const pathName = usePathname();

    return (
        <Link
            href={url}
            className={`${style.link} ${pathName === url ? style["active-link"] : ""}`}
        >
            {name}
        </Link>
    );
};
