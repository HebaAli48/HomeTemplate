import React from "react";
import { Link } from "react-router-dom";
import ContactUsButton from "./../UI/ContactUsButton";
import { FaceBook, LinkedIn } from "../../utils/Icons";
import Shield from "../UI/Shield";

const Footer = () => {
  const footerData = [
    {
      id: 0,
      title: "تابعونا علي",
      description:
        "لوريم ايبسوم دولار سيت أميت كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا ",
      logo: [FaceBook, LinkedIn],
    },
    {
      id: 1,

      title: "أستفسارات",
      description:
        "لوريم ايبسوم دولار سيت أميت كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا ",
      buttonTitle: "تواصـلو معنا",
    },
    {
      id: 2,

      title: "أخر الأخبار",
      description:
        "لوريم ايبسوم دولار سيت أميت كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا ",
      buttonTitle: "تقويم الشهر",
    },
    {
      id: 3,

      title: "المكتبه",
      description:
        "لوريم ايبسوم دولار سيت أميت كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا ",
      buttonTitle: "تسجيل دخول",
    },
  ];
  return (
    <footer className="footer footer-center text-right p-3 px-5 sm:px-10 bg-teal-400 text-blue-800  border-line-primary">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 md:flex md:gap-5">
        {/* followus */}
        <div className="flex flex-col items-center sm:items-end">
          <span className="link link-hover font-semibold text-center">
            <Link to="/">{footerData[0].title}</Link>{" "}
          </span>
          <p className="text-xs ">{footerData[0].description}</p>
          <div className="flex flex-row gap-2 mt-5 mx-auto  justify-center  text-center">
            {footerData[0].logo.map((logo, index) => (
              <Shield
                key={index}
                className="bg-blue-700  hover:translate-x-[-2px]  hover:bg-blue-500  h-11 w-11 py-3 px-3"
              >
                {logo}
              </Shield>
            ))}
          </div>
        </div>
        {/* other footer items */}
        {footerData
          .filter((data) => data.id > 0)
          .map((data) => (
            <div
              key={data.id}
              className="flex flex-col items-center sm:items-end"
            >
              <span className="link link-hover font-semibold">
                <Link to="/">{data.title}</Link>{" "}
              </span>
              <p className="text-xs ">{data.description}</p>
              <ContactUsButton className="mt-5 w-fit text-sm sm:text-[13px] lg:text-[14px] ">
                {data.buttonTitle}
              </ContactUsButton>
            </div>
          ))}
      </div>
    </footer>
  );
};

export default Footer;
