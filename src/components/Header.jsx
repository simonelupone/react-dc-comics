const Header = () => {
    return (
        <header className="bg-white">
            <div className="w-full flex justify-center">
                <div className="w-7xl mx-12 my-6 flex justify-between items-center">
                    <div className="logo">
                        <div className="w-24">
                            <img src="public/img/dc-logo.png" alt="DC logo"/>
                        </div>
                    </div>

                    <nav className="h-24 flex items-center">
                        <ul className="h-full flex items-center gap-4 text-slate-800 uppercase font-semibold">
                            <li className="group-hover:text-blue-600"><a href="#">Characters</a></li>
                            <li><a href="#">Comics</a></li>
                            <li><a href="#">Movies</a></li>
                            <li><a href="#">TV</a></li>
                            <li><a href="#">Games</a></li>
                            <li><a href="#">Collectables</a></li>
                            <li><a href="#">Video</a></li>
                            <li><a href="#">Fans</a></li>
                            <li><a href="#">News</a></li>
                            <li><a href="#">Shop</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header