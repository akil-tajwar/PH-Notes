const Banner = () => {
    return (
        <div className="w-3/4 mx-auto">
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <div className="bg-[url(/public/5.jpg)] rounded-lg bg-cover w-full h-[80vh] bg-no-repeat">
                        <div className="w-1/2 p-36 text-white">
                            <h1 className="text-7xl font-semibold pb-8">Affordable price for car servicing</h1>
                            <p className="text-xl pb-11">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <button className="bg-[#FF3811] border-2 border-[#FF3811] rounded mr-5 w-44 py-3 text-xl">Discover More</button>
                            <button className="border-2 border-white text-xl py-3 rounded w-44">Latest Projects</button>
                        </div>
                        <div className="absolute flex justify-end transform -translate-y-1/2 right-36 gap-5 bottom-16">
                            <a href="#slide4" className="btn btn-circle text-xl">❮</a>
                            <a href="#slide2" className="btn btn-circle text-xl">❯</a>
                        </div>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <div className="bg-[url(/public/5.jpg)] rounded-lg bg-cover w-full h-[80vh] bg-no-repeat">
                        <div className="w-1/2 p-36 text-white">
                            <h1 className="text-7xl font-semibold pb-8">Affordable price for car servicing</h1>
                            <p className="text-xl pb-11">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <button className="bg-[#FF3811] border-2 border-[#FF3811] rounded mr-5 w-44 py-3 text-xl">Discover More</button>
                            <button className="border-2 border-white text-xl py-3 rounded w-44">Latest Projects</button>
                        </div>
                        <div className="absolute flex justify-end transform -translate-y-1/2 right-36 gap-5 bottom-16">
                            <a href="#slide1" className="btn btn-circle text-xl">❮</a>
                            <a href="#slide3" className="btn btn-circle text-xl">❯</a>
                        </div>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <div className="bg-[url(/public/5.jpg)] rounded-lg bg-cover w-full h-[80vh] bg-no-repeat">
                        <div className="w-1/2 p-36 text-white">
                            <h1 className="text-7xl font-semibold pb-8">Affordable price for car servicing</h1>
                            <p className="text-xl pb-11">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <button className="bg-[#FF3811] border-2 border-[#FF3811] rounded mr-5 w-44 py-3 text-xl">Discover More</button>
                            <button className="border-2 border-white text-xl py-3 rounded w-44">Latest Projects</button>
                        </div>
                        <div className="absolute flex justify-end transform -translate-y-1/2 right-36 gap-5 bottom-16">
                            <a href="#slide2" className="btn btn-circle text-xl">❮</a>
                            <a href="#slide4" className="btn btn-circle text-xl">❯</a>
                        </div>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <div className="bg-[url(/public/5.jpg)] rounded-lg bg-cover w-full h-[80vh] bg-no-repeat">
                        <div className="w-1/2 p-36 text-white">
                            <h1 className="text-7xl font-semibold pb-8">Affordable price for car servicing</h1>
                            <p className="text-xl pb-11">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <button className="bg-[#FF3811] border-2 border-[#FF3811] rounded mr-5 w-44 py-3 text-xl">Discover More</button>
                            <button className="border-2 border-white text-xl py-3 rounded w-44">Latest Projects</button>
                        </div>
                        <div className="absolute flex justify-end transform -translate-y-1/2 right-36 gap-5 bottom-16">
                            <a href="#slide3" className="btn btn-circle text-xl">❮</a>
                            <a href="#slide1" className="btn btn-circle text-xl">❯</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;