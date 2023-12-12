import React from 'react'
import "./Carusel.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules'

function Carusel() {
  return (
    <div className='carusel'>
        <Swiper pagination={true} loop={true}
         autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
        modules={[Pagination, Autoplay]} className="carusel__mySwiper">
        <SwiperSlide>
        <img className="carousel__desktop" src="https://images.uzum.uz/clk2p8lenntcj8a9j80g/main_page_banner.jpg" alt="" />
            <img className="carousel__mobile" src="https://images.uzum.uz/clk2qc56sfhsc0umi9d0/main_page_banner.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://images.uzum.uz/clbmm1l6sfhgee0m57g0/main_page_banner.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://images.uzum.uz/clbmfp7n7c6qm23jalgg/main_page_banner.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://images.uzum.uz/clbmm1l6sfhgee0m57g0/main_page_banner.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
      
    </div>
  )
}

export default Carusel