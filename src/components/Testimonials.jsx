import React, { useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Heading3, Heading4, SubPageTitle, ImageComponent } from ".";
import { testimonialQuote } from "../../public/images/homepage_images";

const Testimonials = ({ testimonialData }) => {
  return (
    <section className="bg-background md:px-40 px-5 md:py-20 py-10 text-white">
      <div className="space-y-2">
        <SubPageTitle title={"testimonial"} color={"white"} />
        <Heading3 title={"What our clients say"} />
        <p className="font-josefin md:text-base tet-sm md:font-normal font-light">
          We love to hear from customers, so please leave a comment or say hello
          in an email.
        </p>
      </div>
      <div className="">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper py-20"
        >
          {testimonialData.map((item) => (
            <SwiperSlide className="bg-[#343942] text-white py-10 md:my-10 my-5 px-5 shadow" key={item.name}>
              <div className="flex items-center space-x-3 border-b border-b-[#797E89] py-3" key={item.name}>
                <div className="relative">
                  <ImageComponent item={item} className="h-20 w-20 rounded-full object-cover" alt={item.dishName} />
                  <Image src={testimonialQuote} className="absolute top-0 w-5" alt="quotation mark" />
                </div>
                <div>
                  <Heading4 title={item.name} />
                  <p className='font-josefin text-primary text-sm'>{item.city}</p>
                </div>
              </div>
              <div>
                <p className="italic py-3">{item.testimonial}</p>
              </div>
            </SwiperSlide>
          ))}

        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
