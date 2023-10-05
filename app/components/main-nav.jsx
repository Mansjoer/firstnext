"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MainNav = () => {
  const pathname = usePathname();
  return (
    <nav className="flex items-center space-x-4 lg:space-x-6 ">
      <Link href="/" className={pathname == "/" ? "text-sm font-medium transition-colors hover:text-primary" : "text-sm font-medium text-muted-foreground transition-colors hover:text-primary"}>
        Home
      </Link>
      <Link href="/about" className={pathname == "/about" ? "text-sm font-medium transition-colors hover:text-primary" : "text-sm font-medium text-muted-foreground transition-colors hover:text-primary"}>
        About
      </Link>
    </nav>
  );
};

export default MainNav;
