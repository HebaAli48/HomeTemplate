import React from "react";
import TitleOfComponent from "../UI/TitleOfComponent";
import { RightArrow, ShakeHands } from "../../utils/Icons";

const AuxSources = () => {
  const AuxsourcesData = [
    {
      id: 0,
      title: "كبار السن",
      describtion:
        "لوريم ايبسوم دولار سيت أميت كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت اني لابورأس نيسي يت أليكيوب",
      imageUrl:
        "https://assets.thehansindia.com/h-upload/2022/06/14/1297807-helpage-india.webp",
      color: "sky-300",
    },
    {
      id: 1,
      title: "استشاره الأباء",
      describtion:
        "لوريم ايبسوم دولار سيت أميت كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت اني لابورأس نيسي يت أليكيوب",
      color: "red-300",
      imageUrl:
        "https://www.deutschland.de/sites/default/files/styles/image_carousel_mobile/public/media/image/tdt_15052020_wie_familien_in_deutschland_leben_gemeinsam.jpg?itok=1KaBjDjQ",
    },
    {
      id: 2,
      title: "شباب",
      describtion:
        "لوريم ايبسوم دولار سيت أميت كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت اني لابورأس نيسي يت أليكيوب",
      color: "purple-600",
      imageUrl:
        "https://www3.erie.gov/syep/sites/www3.erie.gov.syep/files/2021-10/kids-hanging-out.jpg",
    },
    {
      id: 3,
      title: "أمان الأطفال",
      describtion:
        "لوريم ايبسوم دولار سيت أميت كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت اني لابورأس نيسي يت أليكيوب",
      color: "blue-300",
      imageUrl:
        "https://www.hopkinsmedicine.org/-/media/images/health/3_-wellness/kids-and-teens-health/kidsgroupschool_contentimage.jpg?h=358&iar=0&mh=360&mw=520&w=520&hash=EF2CF8626E5DA2582CC56FD48D4B2B90",
    },
  ];
  return (
    <>
      <TitleOfComponent img={ShakeHands}>مصادر مساعدة</TitleOfComponent>
      <div className="flex flex-row justify-evenly  text-right items-center flex-wrap gap-5 mb-10 mt-5">
        {AuxsourcesData.map((data) => (
          // card
          <div
            key={data.id}
            className={`bg-${data.color} flex  w-[420px] items-center  border border-gray-200 rounded-ss-[35px] shadow hover:bg-gray-300 hover:bg-opacity-95 hover:text-slate-800  `}
          >
            <div className=" flex flex-col w-2/3 ps-7 justify-between p-1 pt-3 leading-normal">
              {/* body */}
              <h5 className="mb-2 text-xl font-semibold tracking-tight text-white">
                {data.title}
              </h5>
              <p className=" text-sm font-light h-[55%] text-white">
                {data.describtion}
              </p>
              <footer
                className={`rotate-180 bg-slate-200 text-${data.color} w-fit mt-1   rounded-es-[80px] rounded-ee-[80px] rounded-ss-[50px] rounded-se-[50px] py-1 px-1`}
              >
                {RightArrow}
              </footer>
            </div>
            <div className="w-72 ">
              <img class=" w-full h-56" src={data.imageUrl} alt={data.title} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AuxSources;
