import { useState, useEffect } from "react";
import Link from "next/link";
import Navmenu from "./Navmenu";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount, useDisconnect } from "wagmi";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@heroicons/react/outline";

export default function Navbar() {
  const { data: account } = useAccount();
  const { systemTheme, theme, setTheme} = useTheme();
  const { disconnect } = useDisconnect();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <SunIcon
          className="w-5 sm:w-10 h-5 sm:h-10 text-yellow-500"
          role="button"
          onClick={() => setTheme("light")}
        />
      )
    } else {
      return (
        <MoonIcon
          className="w-5 sm:w-10 h-5 sm:h-10 text-gray-900"
          role="button"
          onClick={() => setTheme("dark")}
        />
      )
    }
  }

  return (
    mounted && (
      <header className="border-b-2 border-gray-100  dark:border-gray-900">
        <nav
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          aria-label="Top"
        >
          <div className="w-full py-6 flex flex-wrap items-center justify-between border-b border-indigo-500 lg:border-none">
            <div className="flex items-center">
              <Link href="/">
                <a className="my-2 flex items-center space-x-1">
                    <span className="font-bold text-lg sm:text-3xl font-sans tracking-tight whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-lime-600 via-yellow-300 to-red-600 hover:animate-bounce">
                        WEB3RSVP
                    </span>
                </a>
              </Link>   
            </div>

            <div className="ml-10 space-x-4 flex items-center">
              {renderThemeChanger()}
              <Link href="/create-event">
                <a className="inline-block p-[2px] rounded-lg bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 hover:text-white active:text-opacity-75 focus:outline-none focus:ring">
                  <span className="block px-2 py-2 sm:px-3 text-sm font-medium bg-white dark:text-gray-800 rounded-md hover:bg-transparent">
                    Create Event
                  </span>
                </a>
              </Link>
              {account ? (
                <Navmenu account={account} disconnect={() => disconnect()} />
              ) : (
                <ConnectButton />
              )}
            </div>
          </div>
        </nav>
      </header>
    )
  );
}
