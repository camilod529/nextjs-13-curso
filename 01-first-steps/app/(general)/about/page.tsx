import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About page",
    description: "SEO Description",
    keywords: ["about page", "Camilo", "informacion"],
};

export default function AboutPage() {
    return <span className="text-7xl">about page</span>;
}
