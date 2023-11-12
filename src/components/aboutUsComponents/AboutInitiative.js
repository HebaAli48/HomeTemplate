import React from "react";
import Shield from "../UI/Shield";

const AboutInitiative = () => {
  return (
    <>
      <div>
        <div className="flex flex-col sm:flex-row gap-7 justify-center sm:justify-between items-center mt-10 sm:ps-20">
          {/* image */}
          <div className="">
            <Shield className="h-[300px] w-[300px] border border-slate-50  shadow-lg overflow-hidden">
              <img
                src="https://img.freepik.com/premium-photo/education-technology-school-concept-three-smiling-students-computer-class_380164-85147.jpg"
                alt="Group-students"
                className="object-cover w-full h-full   "
              />
            </Shield>
          </div>
          {/* body */}
          <div className="flex flex-col items-end gap-5 w-2/3">
            <h2 className="text-blue-800  text-xl font-semibold">
              {" "}
              نبذه عن المبادرة
            </h2>
            <h3 className="text-teal-400 text-lg font-semibold">
              مبادرة المواطنة الرقمية والحمايه على الأنترنت
            </h3>
            <p className="text-right text-sm">
              تماشياً مع رؤية مصر 2030، واستراتيجية مصر للتحول الرقمي، تبذل
              وزارة الاتصالات وتكنولوجيا المعلومات الجهود لبناء مصر الرقمية من
              خلال تطوير القطاع العام المصري وبناء المهارات الرقمية للمواطن
              المصري. تمثل حماية الأطفال على الإنترنت بعًدا ال يتجزأ من
              استراتيجية وزارة الاتصالات وتكنولوجيا المعلومات للمواطنة الرقمية
              والمسؤولية المجتمعية. منذ عام 2007، قادت وزارة الاتصالات
              وتكنولوجيا المعلومات الجهود الوطنية لتمكين الأطفال والشباب من
              التنقل في عالم الإنترنت بأمان والسماح لهم بالتزويد بالمهارات
              اللازمة لتحديد التهديدات والفهم الكامل لتداعيات ونتائج سلوكهم عبر
              الإنترنت. تعد عد مبادرة المواطنة الرقمية والحماية علي الإنترنت،
              استكمال لجهود الوزارة في حماية الأطفال والنشء عبر الإنترنت، كذلك
              تأكيدا علي دور الإدارة المركزية للتنمية المجتمعية في نشر الوعي
              المجتمعي من خلال المنصات العرفية المتخصصة
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutInitiative;
