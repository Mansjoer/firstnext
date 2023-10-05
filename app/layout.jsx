import MainNav from "./components/main-nav";
import Search from "./components/search";
import UserNav from "./components/user-nav";
import "./globals.css";
import { Rubik } from "next/font/google";

const rubik = Rubik({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <div className="flex-col md:flex">
          <div className="border-b">
            <div className="flex h-16 items-center px-4">
              {/* <TeamSwitcher /> */}
              <MainNav className="mx-6" />
              <div className="ml-auto flex items-center space-x-4">
                <Search />
                <UserNav />
              </div>
            </div>
          </div>
          <div className="flex-1 space-y-4 p-8 pt-6">{children}</div>
        </div>
      </body>
    </html>
  );
}
