import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { FaQuoteLeft, FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import SectionTitle from '../../Shared/SectionTitle';

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className='w-3/4 mx-auto'>
            <SectionTitle subHeading={'What our clients say'} heading={'Testimonials'}></SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper mb-20">
                {
                    reviews.map(review => <SwiperSlide review={review} key={review._id}>
                        <div className='flex flex-col justify-center items-center mb-5'>
                            <Rating className='text-3xl mb-5'
                                readonly
                                placeholderRating={review.rating}
                                emptySymbol={<FaRegStar className='text-slate-400'/>}
                                placeholderSymbol={<FaStar className='text-yellow-500'/>}
                                fullSymbol={<FaStar/>}
                            />
                            <FaQuoteLeft className='text-6xl' />
                        </div>
                        <div className='text-justify w-3/4 mx-auto'>
                            <p className='mb-5'>{review.details}</p>
                            <h3 className='font-semibold text-3xl text-[#D99904] text-center'>{review.name}</h3>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Testimonials;