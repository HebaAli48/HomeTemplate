import React from "react";
import shieldImg from "../../assets/images/introducingImg.png";
const Introducing = () => {
  return (
    <>
      <div className="bg-teal-100 h-[75vh] flex flex-col sm:flex-row  sm:justify-between ">
        <div className="w-full sm:w-[50vw]  pt-8 sm:pt-0 sm:order-first order-last h-[62.5%] sm:h-full mx-auto sm:py-10 relative bottom-96   sm:bottom-0">
          <img
            src={shieldImg}
            className="sm:absolute sm:inset-0  w-full h-full sm:my-10 object-contain"
            alt="introducingPic"
          />
        </div>

        <div className="flex flex-col items-end justify-center">
          <h2 className="bg-teal-300  text-white w-fit h-[400px] md:h-4/5 px-2 flex items-center relative bottom-[350px] sm:bottom-24 z-20 pt-32 pb-32 rounded-bl-[40px]">
            <span className="inline-block rotate-[-90deg] pt-auto relative">
              عـنـوان
            </span>
          </h2>
          <p className="bg-white border w-72 px-10 pb-7 pt-10 rounded-l-[35px] text-right font-light text-[9px] relative bottom-96 sm:bottom-32">
            لوريم ايبسوم دولار سيت أميت كونسيكتيتور أدايبا يسكينج أليايت,سيت دو
            أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت
            انيم أد مينيم فينايم,كيواس نوستريد أكسير سيتاشن يللأمكو لابورأس نيسي
            يت أليكيوب أكس أيا كوممودو كونسيكيوات . ديواس أيوتي أريري دولار إن
            ريبريهينديرأيت فوليوبتاتي فيلايت أيسسي كايلليوم دولار أيو فيجايت
            نيولا .باراياتيور أيكسسيبتيور ساينت
          </p>
        </div>
      </div>
    </>
  );
};

export default Introducing;
