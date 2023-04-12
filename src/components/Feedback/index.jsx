import zap1 from "../../assets/zap/zap1.jpeg";
import zap2 from "../../assets/zap/zap2.jpeg";
import zap3 from "../../assets/zap/zap3.jpeg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export function Feedback() {
  return (
    <div className="text-center py-24 pt-0 ">
      <h2 className="text-3xl font-black mb-12 text-roxo">
        Informações para que use na prática:
      </h2>
      <ul className="flex justify-center gap-8 flex-wrap h-64 overflow-hidden ">
        <Swiper
          breakpoints={{
            620: {
              width: 620,
              slidesPerView: 2,
            },
          }}
          spaceBetween={20}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <img className="w-96 cursor-pointer" src={zap3} alt="imagem whatsapp" />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-96 cursor-pointer hover:-translate-y-28 transition duration-500"
              src={zap2}
              alt="imagem whatsapp"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-96 cursor-pointer hover:-translate-y-80 transition duration-500"
              src={zap1}
              alt="imagem whatsapp"
            />
          </SwiperSlide>
        </Swiper>
      </ul>
    </div>
  );
}
