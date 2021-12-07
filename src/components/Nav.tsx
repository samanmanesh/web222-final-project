import React, { ReactElement } from "react";
import Link from "next/link";

export default function Nav(): ReactElement {

  const routes = [
    { label: "Hello", path: "/" },
    { label: "About", path: "/about" },
    { label: "Works", path: "/works" },
    { label: "Contact", path: "/contact" },
  ];

  const isActive = (route: any) => {
    const pathname = typeof window !== "undefined" ? window.location.pathname : "";
    return route.path === pathname;
  };

  return (
    <nav className="space-x-3 flex items-center mt-5">
      {routes.map(({ label, path }) => (
        <Link href={path} key={path}>
          <span className={`block font-semibold px-4 py-2 rounded cursor-pointer transition hover:bg-black hover:text-white
          ${isActive({ path }) ? "bg-black text-white" : ""}`}>
            {label}
          </span>
        </Link>
      ))}
    </nav>
  );
}
