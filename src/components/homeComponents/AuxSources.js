import React from "react";
import TitleOfComponent from "../UI/TitleOfComponent";
import { LeftArrow, AuxSource } from "../../utils/Icons";
import Shield from "./../UI/Shield";

const AuxSources = () => {
  const AuxsourcesData = [
    {
      id: 0,
      title: "كبار السن",
      describtion:
        "لوريم ايبسوم دولار سيت أميت كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت اني لابورأس نيسي يت أليكيوب",
      imageUrl:
        "https://assets.thehansindia.com/h-upload/2022/06/14/1297807-helpage-india.webp",

      textColor: "text-sky-300",
      bgcolor: "bg-sky-300",
      hoveredcolor: "hover:bg-sky-400",
    },
    {
      id: 1,
      title: "استشاره الأباء",
      describtion:
        "لوريم ايبسوم دولار سيت أميت كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت اني لابورأس نيسي يت أليكيوب",

      textColor: "text-red-300",
      bgcolor: "bg-red-300",
      hoveredcolor: "hover:bg-red-400",
      imageUrl:
        "https://www.deutschland.de/sites/default/files/styles/image_carousel_mobile/public/media/image/tdt_15052020_wie_familien_in_deutschland_leben_gemeinsam.jpg?itok=1KaBjDjQ",
    },
    {
      id: 2,
      title: "شباب",
      describtion:
        "لوريم ايبسوم دولار سيت أميت كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت اني لابورأس نيسي يت أليكيوب",

      textColor: "text-purple-600",
      bgcolor: "bg-purple-600",
      hoveredcolor: "hover:bg-purple-700",
      imageUrl:
        "https://www3.erie.gov/syep/sites/www3.erie.gov.syep/files/2021-10/kids-hanging-out.jpg",
    },
    {
      id: 3,
      title: "أمان الأطفال",
      describtion:
        "لوريم ايبسوم دولار سيت أميت كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت اني لابورأس نيسي يت أليكيوب",

      textColor: "text-blue-300",
      bgcolor: "bg-blue-300",
      hoveredcolor: "hover:bg-blue-400",
      imageUrl:
        "https://www.hopkinsmedicine.org/-/media/images/health/3_-wellness/kids-and-teens-health/kidsgroupschool_contentimage.jpg?h=358&iar=0&mh=360&mw=520&w=520&hash=EF2CF8626E5DA2582CC56FD48D4B2B90",
    },
  ];
  return (
    <>
      <TitleOfComponent img={AuxSource}>مصادر مساعدة</TitleOfComponent>
      <div className="flex flex-row  justify-evenly  text-right items-center flex-wrap gap-5 mb-10 mt-5">
        {AuxsourcesData.map((data) => (
          // card
          <div
            key={data.id}
            className={`${data.bgcolor} flex w-full  flex-col md:flex-row sm:w-[420px] items-center  justify-between  gap-2 border border-gray-200 rounded-ss-[35px] shadow ${data.hoveredcolor} hover:bg-opacity-95 hover:text-slate-800  `}
          >
            <div className=" flex flex-col w-full md:w-2/3 px-4   p-1 pt-3 leading-normal">
              {/* body */}
              <h5 className="mb-2 text-xl font-semibold tracking-tight text-white">
                {data.title}
              </h5>
              <p className=" text-sm font-light h-[55%] text-white">
                {data.describtion}
              </p>
              <Shield
                className={` bg-slate-100  ${data.textColor} w-10 h-10 mt-1 hover:scale-95  py-2 px-[5px]`}
              >
                {LeftArrow}
              </Shield>
            </div>

            {/* image */}
            <div className="w-full shadow-sm md:w-80  ">
              <img
                className=" w-[100%]  h-56"
                src={data.imageUrl}
                alt={data.title}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AuxSources;
