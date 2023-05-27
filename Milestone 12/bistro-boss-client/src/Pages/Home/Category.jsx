import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import SectionTitle from '../Shared/SectionTitle';

const Category = () => {
    return (
        <div>
            <SectionTitle subHeading={'From 11:00 am to 10:00 pm'} heading={'Order Online'}></SectionTitle>
            <Swiper slidesPerView={4} spaceBetween={30} centeredSlides={true} pagination={{ clickable: true }} modules={[Pagination]} className="mySwiper w-3/4 mx-auto mb-20">
                <SwiperSlide className=''>
                    <img className='w-full rounded-lg' src="/src/assets/home/slide1.jpg" alt="" />
                    <h3 className='rounded-b-lg p-2 font-semibold text-center -mt-14 text-3xl bg-black opacity-50 text-white'>Salad</h3>
                </SwiperSlide>
                <SwiperSlide className=''>
                    <img className='w-full rounded-lg' src="/src/assets/home/slide2.jpg" alt="" />
                    <h3 className='rounded-b-lg p-2 font-semibold text-center -mt-14 text-3xl bg-black opacity-50 text-white'>Pizza</h3>
                </SwiperSlide>
                <SwiperSlide className=''>
                    <img className='w-full rounded-lg' src="/src/assets/home/slide3.jpg" alt="" />
                    <h3 className='rounded-b-lg p-2 font-semibold text-center -mt-14 text-3xl bg-black opacity-50 text-white'>Soup</h3>
                </SwiperSlide>
                <SwiperSlide className=''>
                    <img className='w-full rounded-lg' src="/src/assets/home/slide4.jpg" alt="" />
                    <h3 className='rounded-b-lg p-2 font-semibold text-center -mt-14 text-3xl bg-black opacity-50 text-white'>Desserts</h3>
                </SwiperSlide>
                <SwiperSlide className=''>
                    <img className='w-full rounded-lg' src="/src/assets/home/slide5.jpg" alt="" />
                    <h3 className='rounded-b-lg p-2 font-semibold text-center -mt-14 text-3xl bg-black opacity-50 text-white'>Salad</h3>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Category;