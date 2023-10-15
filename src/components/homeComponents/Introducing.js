import React, { useContext } from "react";
import shieldImg from "../../assets/images/introducingImg.png";
import { CollapsedContext } from "../../utils/MenuContext";
const Introducing = () => {
  const { isCollapsed, setIsCollapsed, isShown, setIsShown } =
    useContext(CollapsedContext);

  return (
    <>
      <div
        className={`bg-teal-100 h-[75vh] flex  flex-col relative z-10  justify-center sm:flex-row  sm:justify-between ${
          !isCollapsed ? "" : "bottom-20"
        }`}
      >
        <div className="w-full sm:w-[90vw] h-80    sm:order-first order-last mt-44 pb-10 sm:mt-20  mx-auto sm:py-10 relative  bottom-52 sm:bottom-0">
          <img
            src={shieldImg}
            className="sm:absolute sm:inset-0  w-full md:w-[80%] h-full sm:my-10 object-center mx-auto"
            alt="introducingPic"
          />
        </div>

        <div className="flex flex-col items-end w-full justify-end">
          <h2
            className={`bg-teal-300  ${
              !isCollapsed && isCollapsed == null ? "" : "pt-48"
            } text-white w-fit    sm:px-2 flex items-center relative py-32 bottom-0 sm:bottom-24  z-40 sm:pt-32 sm:pb-48 rounded-bl-[40px]`}
          >
            <span className="inline-block rotate-[-90deg] pb-5s sm:pb-0 pt-auto relative sm:translate-x-0 sm:translate-y-0 translate-x-[-4px] translate-y-16">
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
