const AboutUs = () => {
    return (
        <div className="w-3/4 mx-auto mt-32">
            <div className="flex gap-32">
                <div className="relative">
                    <div className="relative text-center w-full h-96">
                        <img className="object-cover object-left rounded-lg" src="person.jpg" alt="" />
                    </div>
                    <div className="absolute -bottom-48 -right-20 w-3/5">
                        <img className="border-white border-8 rounded-lg" src="parts.jpg" alt="" />
                    </div>
                </div>
                <div>
                    <h1 className="font-semibold text-5xl pb-8">We are qualified & experienced in this field</h1>
                    <p className="pb-5">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                    <p>the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                    <button className="px-4 py-2 bg-[#FF3811] text-white rounded font-semibold mt-8">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;