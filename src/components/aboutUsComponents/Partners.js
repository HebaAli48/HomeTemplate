import React from "react";

const Partners = () => {
  const partnersDate = [
    {
      title: "المجلس القومى للأمومة والطفولة",
      logo: "https://www.shorouknews.com/uploadedimages/Other/original/145645645645686421245454.jpg",
    },
    {
      title: "المجلس القومى للمرأه",
      logo: "https://mediaaws.almasryalyoum.com/news/verylarge/2021/08/08/1596973_0.jpg",
    },
    {
      title: "ITU",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/International_Telecommunication_Union_logo.svg/640px-International_Telecommunication_Union_logo.svg.png",
    },
    {
      title: "اليونيسيف",
      logo: "https://www.kindpng.com/picc/m/223-2238039_new-unicef-logo-vector-.png",
    },
  ];
  return (
    <>
      <div className="bg-slate-50  mb-10 w-full pb-10  ">
        <h2 className="text-blue-800 text-xl font-semibold text-center py-10 ">
          الشركاء
        </h2>
        <div className="w-4/5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-5 sm:gap-10 lg:gap-20 mx-auto ">
          {partnersDate.map((data, index) => (
            <div
              className="bg-white border shadow-lg rounded-2xl w-[170px] h-[170px] p-8 mx-auto "
              key={index}
            >
              <img
                src={data.logo}
                alt={data.title}
                className="h-[75%] pb-2 mx-auto"
              />
              <h2 className=" border-t-[1px] py-2 text-blue-800 font-semibold text-center text-[12px] w-24 ">
                {data.title}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Partners;
