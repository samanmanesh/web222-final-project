import React, { ReactElement } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Nav(): ReactElement {
  const router = useRouter();
  const routes = [
    { label: "Hello", path: "/" },
    { label: "About", path: "/about" },
    { label: "Works", path: "/works" },
    { label: "Contact", path: "/contact" },
  ];

  const isActive = (route: any) => {
    return router.pathname === route.path;
  };

  return (
    <nav className="space-x-3 flex items-center wrapper">
      {routes.map(({ label, path }) => (
        <Link href={path} key={path}>
          <span
            className={`block font-semibold px-4 py-2 rounded cursor-pointer transition hover:bg-red-400 hover:text-white select-none
          ${isActive({ path }) ? "bg-black text-white" : ""}`}
          >
            {label}
          </span>
        </Link>
      ))}
    </nav>
  );
}
