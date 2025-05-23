import ComicsList from "./ComicsList.jsx";

const Main = () => {
    return (
        <main className="bg-black">
            <div className="w-full flex justify-center">
                <div className="w-7xl mx-12 my-6">
                    <div className="py-2">
                        <div
                            className="max-w-fit py-4 px-8 relative -top-16 flex justify-center items-center bg-blue-500">
                            <span className="text-xl font-bold uppercase text-white">Current series</span>
                        </div>

                        <div className="">
                            <ComicsList/>
                        </div>

                    </div>
                </div>
            </div>

            <div className="w-full flex justify-center bg-blue-500">
                <div className="w-7xl mx-12">
                    <div className="cta py-12 flex flex-wrap gap-20 text-white uppercase font font-semibold">
                        <figure className="flex gap-4 items-center">
                            <img className="h-8" src="../src/assets/img/buy-comics-digital-comics.png" alt=""/>
                            <figcaption><span className="uppercase">Digital Contents</span></figcaption>
                        </figure>

                        <figure className="flex gap-4 items-center">
                            <img className="h-8" src="../src/assets/img/buy-comics-merchandise.png" alt=""/>
                            <figcaption><span className="uppercase">DC Merchandise</span></figcaption>
                        </figure>

                        <figure className="flex gap-4 items-center">
                            <img className="h-8" src="../src/assets/img/buy-comics-subscriptions.png" alt=""/>
                            <figcaption><span className="uppercase">Subscription</span></figcaption>
                        </figure>

                        <figure className="flex gap-4 items-center">
                            <img className="h-8" src="../src/assets/img/buy-comics-shop-locator.png" alt=""/>
                            <figcaption><span className="uppercase">Comic Shop Locator</span></figcaption>
                        </figure>

                        <figure className="flex gap-4 items-center">
                            <img className="h-8" src="../src/assets/img/buy-dc-power-visa.svg" alt=""/>
                            <figcaption><span className="uppercase">DC Power Visa</span></figcaption>
                        </figure>

                        {/* altre figure*/}
                    </div>
                </div>
            </div>

        </main>
    )
}
export default Main