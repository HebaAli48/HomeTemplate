import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { WarningSign } from "../../utils/Icons";
import TitleOfComponent from "../UI/TitleOfComponent";

const Risks = () => {
  const risksDataSlider = [
    [
      {
        id: 0,
        title: "مخاطر اخري",
        imageUrl:
          "https://www.clker.com/cliparts/a/K/l/k/C/w/light-blue-warning-sign-hi.png",
      },
      {
        id: 1,
        title: "الألعاب",
        imageUrl:
          "https://cdn2.iconfinder.com/data/icons/xbox-one-controllers/500/gamer_Blue-512.png",
      },
      {
        id: 2,
        title: "الأستغلال الجنسي",
        imageUrl: "https://www.svgrepo.com//show/243083/account.svg",
      },
      {
        id: 3,
        title: "محتوي غير لائق",
        imageUrl: "https://cdn-icons-png.flaticon.com/512/5067/5067022.png",
      },
    ],
    [
      {
        id: 4,
        title: "هوس وسائل التواصل الاجتماعي",
        imageUrl:
          "https://img.freepik.com/free-vector/person-addicted-social-media_23-2148395530.jpg",
      },
      {
        id: 5,
        title: "الأستخراج",
        imageUrl:
          "https://cdni.iconscout.com/illustration/premium/thumb/internet-security-4897458-4077870.png",
      },
      {
        id: 6,
        title: "أرسال محتوي جنسى",
        imageUrl:
          "https://cdn2.iconfinder.com/data/icons/flat-style-svg-icons-part-2/512/lock_user_man_secure-512.png",
      },
      {
        id: 7,
        title: "التنمر الألكتروني",
        imageUrl: "https://www.staysafeonline.in/index.php?img=bullying2742",
      },
    ],
  ];

  return (
    <div className=" bg-slate-100 pt-2 pb-10 mt-12 flex flex-col gap-10 justify-evenly">
      <TitleOfComponent img={WarningSign}>تعرف على الأخطار</TitleOfComponent>

      <Swiper
        className="w-full  mx-auto mt-5  "
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1} // Display one slide at a time
        navigation
      >
        {risksDataSlider.map((data, index) => (
          <SwiperSlide key={index}>
            <div className="flex justify-center sm:justify-evenly  items-center gap-3 sm:gap-5 mx-auto  px-2 xs:px-6 md:px-10 py-4">
              {data.map((slide) => (
                <div
                  className="flex flex-col justify-between items-center gap-2 w-12 xs:w-20 sm:w-24 md:w-32 lg:w-44 h-36 sm:h-44 md:h-44 lg:h-56"
                  key={slide.id}
                >
                  <div className="bg-white shadow-md rounded-md w-12 xs:w-20 sm:w-24 md:w-32  lg:w-44 h-12 xs:h-20  sm:h-24 md:h-32 lg:h-44">
                    <img
                      src={slide.imageUrl}
                      alt={slide.title}
                      className="w-12 xs:w-20 sm:w-24 md:w-32  lg:w-44 h-12 xs:h-20  sm:h-24 md:h-32  lg:h-44 object-contain  "
                    />
                  </div>
                  <div className="pb-16 md:pb-0  w-12 xs:w-20 sm:w-24  md:w-32 lg:w-48 mb-2 text-center  text-[12px] sm:text-base">
                    {slide.title}
                  </div>
                </div>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Risks;
