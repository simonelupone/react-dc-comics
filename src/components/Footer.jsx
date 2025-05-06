const Footer = () => {
    return (
        <footer className="">

            <div className="w-full flex flex-col justify-center items-center text-neutral-500 text-xs">
                <div className="w-7xl mx-12 flex">
                    {/* upper footer */}
                    <div className="w-1/2 py-12 flex gap-8">
                        <div className="">
                            <h2 className="mb-2 text-xl text-white font-bold uppercase tracking-tighter">Dc comics</h2>
                            <ul>
                                <li><a href="#">Characters</a></li>
                                <li><a href="#">Comics</a></li>
                                <li><a href="#">Movies</a></li>
                                <li><a href="#">TV</a></li>
                                <li><a href="#">Games</a></li>
                                <li><a href="#">Videos</a></li>
                                <li><a href="#">News</a></li>
                            </ul>

                            <h2 className="mt-8 text-xl text-white font-bold uppercase tracking-tighter">Shop</h2>
                            <ul>
                                <li><a href="#">Shop DC</a></li>
                                <li><a href="#">Shop DC Collectables</a></li>
                            </ul>
                        </div>

                        <div className="">
                            <h2 className="mb-2 text-xl text-white font-bold uppercase tracking-tighter">DC</h2>
                            <ul>
                                <li><a href="#">Terms Of Use</a></li>
                                <li><a href="#">Privacy Policy (new)</a></li>
                                <li><a href="#">Ad Choices</a></li>
                                <li><a href="#">Advertising</a></li>
                                <li><a href="#">Jobs</a></li>
                                <li><a href="#">Subscriptions</a></li>
                                <li><a href="#">Talent Workshops</a></li>
                                <li><a href="#">CPSC Certificates</a></li>
                                <li><a href="#">Ratings</a></li>
                                <li><a href="#">Shop Help</a></li>
                                <li><a href="#">Contact Us</a></li>

                            </ul>
                        </div>

                        <div className="">
                            <h2 className="mb-2 text-xl text-white font-bold uppercase tracking-tighter">Sites</h2>
                            <ul>
                                <li><a href="#">DC</a></li>
                                <li><a href="#">MAD Magazine</a></li>
                                <li><a href="#">DC Kids</a></li>
                                <li><a href="#">DC Universe</a></li>
                                <li><a href="#">DC Power Visa</a></li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="w-1/2 flex justify-center">
                        <div className="footer-logo w-full h-full z-10"></div>
                    </div>
                </div>

                    {/* lower footer */}
                <div className="w-full h-24 flex justify-center items-center bg-neutral-800">
                    <div className="w-7xl flex justify-between">
                        <button className="h-12 px-4 text-xl border-3 border-blue-500 uppercase text-white font-semibold ">Sign-up now!</button>
                        <div className="follow flex items-center gap-8 uppercase font-bold">
                            <h3 className="text-xl text-blue-500">Follow us</h3>
                            <ul className="flex gap-4">
                                <li>
                                    <img src="../src/assets/img/footer-facebook.png" alt=""/>
                                </li>
                                <li>
                                    <img src="../src/assets/img/footer-twitter.png" alt=""/>
                                </li>
                                <li>
                                    <img src="../src/assets/img/footer-youtube.png" alt=""/>
                                </li>
                                <li>
                                    <img src="../src/assets/img/footer-pinterest.png" alt=""/>
                                </li>
                                <li>
                                    <img src="../src/assets/img/footer-periscope.png" alt=""/>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </footer>

    )
}
export default Footer