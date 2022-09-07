import Link from "next/link";

const Logo = () => {
    return (
        <Link href="/">
            <a className="my-2 flex items-center space-x-1">
                <span className="font-bold text-lg sm:text-3xl font-sans tracking-tight whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-lime-600 via-yellow-300 to-red-600 hover:animate-bounce">
                    WEB3RSVP
                </span>
            </a>
        </Link>
    )

}

export default Logo;