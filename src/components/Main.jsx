const Main = () => {
    return (
        <main className="bg-black">
            <div className="w-full flex justify-center">
                <div className="w-7xl mx-12 my-6">
                    <div className="h-36 py-8">
                        <h1 className="text-white text-3xl">&rarr; Content goes here &larr;</h1>
                    </div>
                </div>
            </div>

            <div className="w-full flex justify-center bg-blue-500">
                <div className="w-7xl mx-12">
                    <div className="cta py-12 flex flex-wrap gap-20 text-white uppercase font font-semibold">
                        <figure className="flex gap-4 items-center">
                            <img src="../src/assets/img/buy-comics-digital-comics.png" alt=""/>
                            <figcaption><span className="uppercase">Digital Contents</span></figcaption>
                        </figure>

                        {/* altre figure*/}
                    </div>
                </div>
            </div>

        </main>
    )
}
export default Main