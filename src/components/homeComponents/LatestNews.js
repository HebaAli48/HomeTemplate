import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";
import { WarningSign } from "../../utils/Icons";
import TitleOfComponent from "../UI/TitleOfComponent";

const LatestNews = () => {
  const latestNewsSlider = [
    {
      id: 0,
      title: "سيدات ",
      color: "bg-red-500",
      describtion:
        "لوريم ايبسوم دولار سيت أميت كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد أكسير سيتاشن يللأمكو لابورأس نيسي يت أليكيوب",
    },
    {
      id: 1,
      title: "أطفال ",
      color: "bg-sky-300",
      describtion:
        "لوريم ايبسوم دولار سيت أميت كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد أكسير سيتاشن يللأمكو لابورأس نيسي يت أليكيوب",
    },
    {
      id: 2,
      title: "شباب ",
      color: "bg-purple-600",
      describtion:
        "لوريم ايبسوم دولار سيت أميت كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد أكسير سيتاشن يللأمكو لابورأس نيسي يت أليكيوب",
    },
    {
      id: 3,
      title: "أباء و وصاه ",
      color: "bg-red-300",
      describtion:
        "لوريم ايبسوم دولار سيت أميت كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد أكسير سيتاشن يللأمكو لابورأس نيسي يت أليكيوب",
    },
  ];
  return (
    <>
      <div className="  pt-2 pb-5 mt-12 flex flex-col   justify-evenly">
        <TitleOfComponent img={WarningSign}>أخر الأخبار </TitleOfComponent>

        <Swiper
          className="w-[80%] shadow-md mx-auto mt-5 mb-5"
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={40}
          slidesPerView={1.2}
          grabCursor={true}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {latestNewsSlider.map((data, index) => (
            <SwiperSlide className="py-8" key={index}>
              <div className=" mx-auto   ">
                <div className="bg-white rounded-[30px] border border-t-[1px] mb-7 shadow-xl flex p-10">
                  <img
                    className="object-cover w-full rounded-ss-[80px] rounded-se-[80px] rounded-es-[50px] rounded-ee-[50px]   h-[250px] md:w-48 "
                    src="https://media.istockphoto.com/id/1278979697/photo/group-of-high-school-students-using-laptop-in-classroom.jpg?s=612x612&w=0&k=20&c=hWLPu8JxsFtEI8Yo4jBQGBAALFL9zh6Hdj_50GprO5s="
                    alt=""
                  />
                  <div className="flex flex-col text-right justify-start gap-2 items-end leading-normal">
                    <h2 className="text-blue-800 font-semibold text-2xl">
                      عنــوان
                    </h2>
                    <h5
                      className={`mb-4 text-lg border rounded-full px-4 py-[2px] ${data.color} w-fit   font-bold text-gray-900 `}
                    >
                      {data.title}{" "}
                    </h5>
                    <p className="mb-3 font-normal text-gray-800 ">
                      {data.describtion}{" "}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default LatestNews;
