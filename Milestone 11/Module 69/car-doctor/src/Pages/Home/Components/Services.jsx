import { useEffect } from "react";
import { useState } from "react";

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="w-3/4 mx-auto mt-72">
            <div className="text-center pb-8">
                <h3 className="text-3xl font-semibold text-[#FF3811] pb-5">Services</h3>
                <h1 className="font-semibold text-5xl pb-2">Our Services Area</h1>
                <p className="w-2/5 mx-auto">the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-3 gap-6 w-fit mx-auto">
                {
                    services.map(service =>
                        <div className="bg-[#ececec] p-5 rounded-lg" key={service._id}>
                            <div className="relative w-full h-80">
                                <img className="object-cover w-full h-full rounded-lg" src={service.img} alt="" />
                            </div>
                            <h3 className="text-3xl text-[#FF3811] font-semibold pt-5 pb-2">{service.title}</h3>
                            <div className="text-xl flex justify-between">
                                <p>Price: {service.price}</p>
                                <p>❯❯</p>
                            </div>
                        </div>)
                }
            </div>
            <div className="text-center pt-10">
                <button className="py-2 px-5 border-2 rounded font-semibold border-[#FF3811] text-[#FF3811] text-xl">More Services</button>
            </div>
        </div>
    );
};

export default Services;