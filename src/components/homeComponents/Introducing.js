import React, { useContext } from "react";
import shieldImg from "../../assets/images/introducingImg.png";
import { CollapsedContext } from "../../utils/MenuContext";
const Introducing = () => {
  const { isCollapsed } = useContext(CollapsedContext);

  return (
    <>
      <div
        className={`bg-teal-100 h-fit sm:h-[75vh] w-full flex  flex-col   justify-center sm:flex-row   sm:justify-between `}
      >
        <div className="w-full sm:w-[100%]     sm:order-first order-last   ps-10  mx-auto     ">
          <img
            src={shieldImg}
            className="w-full  h-full sm:my-10 object-center mx-auto"
            alt="introducingPic"
          />
        </div>

        <div className="flex flex-col   items-end w-full justify-start">
          <h2
            className={`bg-teal-300  ${
              !isCollapsed ? "pt-auto" : ""
            } text-white w-fit h-[150px] sm:h-[250px]  sm:px-2 flex relative   items-center  z-10 sm:bottom-[76px] py-10  rounded-bl-[40px]`}
          >
            <span className="inline-block rotate-[-90deg] pb-5s sm:pb-0 pt-auto   sm:translate-x-0 sm:translate-y-0 translate-x-[-4px] ">
              عـنـوان
            </span>
          </h2>
          <p className="bg-white border w-72 px-5 pb-5 pt-7 sm:px-10 sm:pb-7 sm:pt-10 rounded-l-[35px] text-right font-light z-0 text-[9px] relative bottom-8 sm:bottom-28">
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
