

const Banner = () => {
    return (
        <div>

            <div>

                <div className="relative">
                    <img className=" opacity-10 ..." src="https://i.ibb.co/s2mJzzn/Rectangle-4282.png" alt="" />
                    <div>
                        <div className="absolute left-10 md:left-16 right-6 top-5 md:top-32 lg:top-36 lg:left-72 lg:right-2 lg:bottom-1/4 z-20 lg:h-2/6 lg:w-6/12 text-center items-center justify-center" >
                            <h1 className="md:text-3xl font-bold">
                             
                                I Grow By Helping People In Need</h1>
                            <div>
                                <input type="text" placeholder="Search here..." className="input input-bordered w-full max-w-xs px-3 py-1 md:py-3" />
                                <button className="btn py-1 md:py-3  text-white bg-red-600 px-3 mt-1 md:mt-3 rounded-md md:mt-6 lg:mt-6">Search</button>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;