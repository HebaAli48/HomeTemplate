import React from "react";

const Partners = () => {
  const partnersDate = [
    {
      title: "المجلس القومى للأمومة والطفولة",
      logo: "https://www.shorouknews.com/uploadedimages/Other/original/145645645645686421245454.jpg",
    },
    {
      title: "المجلس القومى للمرأه",
      logo: "http://ncw.gov.eg/images/2023/11/large/181490195299202311061115591559.jpg",
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
      <div className="bg-slate-50  mb-10 w-full ">
        <h2 className="text-blue-800 text-xl font-semibold text-center py-10 ">
          الشركاء
        </h2>
        <div className="w-4/5 flex flex-col  sm:flex-row  justify-evenly items-center mx-auto pb-8">
          {partnersDate.map((data, index) => (
            <div
              className="bg-white border shadow-lg rounded-2xl w-[170px] h-[170px] p-8"
              key={index}
            >
              <img src={data.logo} alt={data.title} className="h-[75%] pb-2" />
              <h2 className=" border-t-[1px] py-2 text-blue-800 font-semibold text-center text-[12px]">
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
