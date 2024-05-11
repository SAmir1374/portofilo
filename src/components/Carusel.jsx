import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "../styles/components/carusel.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { useTranslation } from "react-i18next";


function Carusel({ items = [], title , ...props }) {
  const { t , i18n } = useTranslation('global')

  useEffect(() => {
    console.log('items ' , items);
  }, [i18n.language]);

  return (
    <div className="myCarusel">
      <div className="bar">
        <h2>{title}</h2>
        <i></i>
      </div>
      <div className="main">
        <Swiper
          // cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
          {...props}
        >
          {items.map((el, index) => (
            <SwiperSlide key={index}>
              <img src={el} alt={el.alt} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Carusel;
