import React from "react";
import { RightArrow, Users } from "../../utils/Icons";
import TitleOfComponent from "../UI/TitleOfComponent";

const WhatAreWeDoing = () => {
  const whatAreWeDoindData = [
    {
      id: 0,
      title: "التشـبـيك",
      describtion:
        "وريم ايبسوم دولار سيت أميت كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت",
      imageUrl:
        "https://png.pngtree.com/png-vector/20220719/ourmid/pngtree-team-communication-icon-communication-illustrations-vector-vector-png-image_38007878.png",
    },
    {
      id: 1,
      title: "تدريب",
      describtion:
        "وريم ايبسوم دولار سيت أميت كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت",
      imageUrl:
        "https://png.pngtree.com/png-vector/20220520/ourmid/pngtree-instructions-to-use-the-vector-icon-png-image_4638887.png",
    },
    {
      id: 2,
      title: "معرفة",
      describtion:
        "وريم ايبسوم دولار سيت أميت كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت",
      imageUrl: "https://cdn-icons-png.flaticon.com/512/8712/8712116.png",
    },
  ];
  return (
    <>
      {/* title */}
      <TitleOfComponent img={Users}> مـاذا نفعل</TitleOfComponent>
      {/* body */}
      <div className="flex flex-row justify-center flex-wrap gap-3  mt-5 mx-auto ">
        {whatAreWeDoindData.map((data) => (
          <div className="flex justify-center items-center  " key={data.id}>
            {/* card */}
            <div className="bg-white border py-3 w-48 xs:w-64  hover:border-1 shadow-xl z-10 relative hover:border-blue-700 flex flex-col justify-center items-center gap-3  rounded-ss-[100px] rounded-se-[100px] rounded-es-[50px] rounded-ee-[50px] px-3">
              <h2 className="font-semibold text-blue-700">{data.title}</h2>
              <p className="text-sm mt-3">{data.describtion}</p>
              <div className="">
                <img src={data.imageUrl} alt={data.title} className="w-24" />
              </div>
            </div>
            {/* icon */}
            <div className=" relative bg-teal-300 h-12 pt-3  z-0 w-8 text-right right-3 ps-2 text-white  hover:translate-x-[5px] rounded-r-3xl">
              {RightArrow}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default WhatAreWeDoing;
