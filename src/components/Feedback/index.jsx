import zap1 from "../../assets/zap/zap1.jpeg";
import zap2 from "../../assets/zap/zap2.jpeg";
import zap3 from "../../assets/zap/zap3.jpeg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/navigation';
import { Navigation } from "swiper";

export function Feedback() {
  return (
    <div className="text-center py-24 px-8 md:px-24 bg-black">
      <h2 className="text-4xl lg:text-5xl font-black mb-4 text-roxo">
        Depoimentos:
      </h2>
      <p className="text-xl font-bold mb-12">Alguns profissionais que já estão utilizando as informações que você irá aprender:</p>
      <ul className="flex justify-top gap-8 flex-wrap">
        <Swiper
          modules={[Navigation]}
          navigation={true}
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
            <div className="h-64 overflow-hidden">
            <img className=" w-96 cursor-pointer hover:-translate-y-32 duration-300" src={zap2} alt="imagem whatsapp" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-64 overflow-hidden">
            <img className=" w-96 cursor-pointer" src={zap3} alt="imagem whatsapp" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-64 overflow-hidden ">
            <img className=" w-96 cursor-pointer hover:-translate-y-80 duration-300" src={zap1} alt="imagem whatsapp" />
            </div>
          </SwiperSlide>
        
        </Swiper>
      </ul>
    </div>
  );
}
