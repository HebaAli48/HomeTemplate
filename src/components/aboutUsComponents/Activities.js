import React from "react";
import Shield from "./../UI/Shield";

const Activities = () => {
  const activitiesData = [
    {
      title: "ورش العمل",
      logo: "https://cdn-icons-png.flaticon.com/512/4029/4029413.png",
      shieldColor: "bg-slate-50",
    },
    {
      title: "مسابقات",
      logo: "https://cdn-icons-png.flaticon.com/512/3487/3487157.png",
      shieldColor: "bg-slate-50",
    },
    {
      title: "ندوات توعوية عن بعد",
      logo: "https://cdn-icons-png.flaticon.com/512/6600/6600564.png",
      shieldColor: "bg-teal-100",
    },
    {
      title: "مؤتمرات",
      logo: "https://cdn2.iconfinder.com/data/icons/humans-glyph-black/614/3926_-_Presenting-512.png",
      shieldColor: "bg-teal-100",
    },
    {
      title: "تدريب",
      logo: "https://www.un.org/sites/un2.un.org/files/2020/10/noun_training_3129890_copy.png",
      shieldColor: "bg-slate-50",
    },
    {
      title: "ندوات التوعوية",
      logo: "https://cdn-icons-png.flaticon.com/512/5977/5977998.png",
      shieldColor: "bg-slate-50",
    },
  ];
  return (
    <>
      <div className=" flex flex-col gap-8 items-center my-10">
        <h2 className="text-blue-800 text-2xl  font-semibold mx-auto ">
          الأنشطة{" "}
        </h2>
        <div className="grid grid-cols-2 gap-10">
          {activitiesData.map((data, index) => (
            <div key={index} className="flex justify-center items-center gap-5">
              <span className="w-36 text-right text-blue-800 text-xl font-semibold">
                {data.title}
              </span>
              <Shield
                className={`${data.shieldColor} h-[100px] w-[100px]  shadow-md `}
              >
                <img
                  src={data.logo}
                  alt={data.title}
                  className="mx-auto  w-[80%] mt-3  "
                />
              </Shield>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Activities;
