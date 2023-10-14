import React from "react";
import shieldImg from "../../assets/images/introducingImg.png";
const Introducing = () => {
  return (
    <>
      <div className="bg-teal-100 h-[75vh] flex  flex-col   justify-center sm:flex-row  sm:justify-between ">
        <div className="w-full sm:w-[90vw] h-80    sm:order-first order-last mt-44 pb-10 sm:mt-20  mx-auto sm:py-10 relative  bottom-52 sm:bottom-0">
          <img
            src={shieldImg}
            className="sm:absolute sm:inset-0  w-full md:w-[80%] h-full sm:my-10 object-center mx-auto"
            alt="introducingPic"
          />
        </div>

        <div className="flex flex-col items-end justify-center">
          <h2 className="bg-teal-300  text-white w-8 sm:w-fit  h-[4/5] sm:px-2 flex items-center relative bottom-2 sm:bottom-24  z-20 pt-32 pb-48 rounded-bl-[40px]">
            <span className="inline-block rotate-[-90deg] translate-y-[140px]  translate-x-[-8px]  sm:translate-y-0  sm:translate-x-0 pb-5s sm:pb-0 pt-auto relative">
              عـنـوان
            </span>
          </h2>
          <p className="bg-white border w-72 px-5 pb-5 pt-5 sm:px-10 sm:pb-7 sm:pt-10 rounded-l-[35px] text-right font-light z-0 text-[9px] relative bottom-9 sm:bottom-32">
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
