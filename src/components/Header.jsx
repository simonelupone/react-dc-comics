const Header = () => {

    const links = [
        {
            id: 1,
            href: "#",
            label: "Characters",
            current: false,
        },
        {
            id: 2,
            href: "#",
            label: "Comics",
            current: true,
        },
        {
            id: 3,
            href: "#",
            label: "Movies",
            current: false,
        },
        {
            id: 4,
            href: "#",
            label: "TV",
            current: false,
        },
        {
            id: 4,
            href: "#",
            label: "Games",
            current: false,
        },
        {
            id: 4,
            href: "#",
            label: "Collectibles",
            current: false,
        },
        {
            id: 4,
            href: "#",
            label: "Videos",
            current: false,
        },
        {
            id: 4,
            href: "#",
            label: "Fans",
            current: false,
        },
        {
            id: 4,
            href: "#",
            label: "News",
            current: false,
        },
        {
            id: 4,
            href: "#",
            label: "Shop",
            current: false,
        }
    ]

    return (
        <header className="bg-white">
            <div className="w-full flex justify-center">
                <div className="w-7xl h-32 flex justify-between items-center">
                    <div className="logo">
                        <div className="w-24">
                            <img src="../src/assets/img/dc-logo.png" alt="DC logo" />
                        </div>
                    </div>

                    <nav className="h-full flex items-center">
                        <ul className="h-full flex items-center gap-4 text-slate-800 uppercase font-semibold">

                            {links.map((link, index) => (
                                <li key={index} className="group-hover:text-blue-600"><a href={link.href}>{link.label}</a></li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>

            <div className="jumbotron w-full h-140"></div>
        </header>
    )
}

export default Header