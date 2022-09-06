import Link from "next/link";

const Logo = () => {
    return (
        <Link href="/">
            <a className="my-2 flex items-center space-x-1">
                <span className="font-bold text-3xl sm:text-lg font-sans tracking-tight whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-lime-600 via-yellow-300 to-red-600 hover:animate-bounce">
                    OMUME
                </span>
            </a>
        </Link>
    )

}

export default Logo;