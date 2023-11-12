import React from "react";
import Shield from "../UI/Shield";

const InitiativeGoals = () => {
  return (
    <>
      <div className="bg-slate-50 flex flex-col items-center mt-10 py-10 gap-5">
        <div className="flex flex-col gap-5 sm:gap-0 sm:flex-row sm:justify-between items-center sm:items-start w-4/5  text-right">
          <body className="bg-white rounded-xl shadow-md px-10 py-2 w-[85%]">
            <h2 className="text-blue-800 text-xl font-semibold">الهدف العام</h2>
            <p className="text-sm py-5">
              بناء الوعي الرقمي للمواطن المصري في ظل التحول الرقمي ، كذلك العمل
              على بناء وعي مواطن رقمي فعال واعي بالحقوق والمسئوليات وفرص العيش
              والتعلم والعمل في عالم رقمي مترابط، بحيث يعمل ويبدع بطرق آمنة
              وقانونية وأخلاقية
            </p>
          </body>
          <Shield className="w-[150px] h-[150px] bg-slate-200 relative right-8 ">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1169/1169599.png"
              alt=""
              className="relative left-12 top-6  w-[80%]"
            />
          </Shield>
        </div>
        <div className="flex flex-col gap-5 sm:gap-0 sm:flex-row sm:justify-between items-center sm:items-start w-4/5 text-right ">
          <Shield className="w-[200px] h-[200px] bg-teal-200 relative left-4 ">
            <img
              src="https://cdn-icons-png.flaticon.com/512/610/610484.png"
              alt=""
              className="w-[90%] relative left-16 "
            />
          </Shield>
          <body className="bg-white rounded-xl shadow-md px-10 py-2 w-[85%]">
            <h2 className="text-blue-800 text-xl font-semibold">
              {" "}
              الأهداف المحددة
            </h2>
            <p className="text-sm py-5">
              إتاحة المعرفة المتخصصة عن مفهوم المواطنة الرقمية ومحاورها الأساسية
              وتطبيقاتها والنماذج الناجحة بناء قدرات المواطنين على استخدام
              مهارات المواطنة الرقمية من خلال خدمات تدريبية وتقديم الدعم
              الاستشارة عبر الانترنت بالتعاون مع مقدمي هذه الخدمات رفع الوعي
              المجتمعي لجميع الفئات بالمخاطر الاليكترونية وآليات الدعم والحماية
              وطرق الوصول اليها تمكين المواطنين من الوصول الي المعلومات
              واستخدامها بطريقة آمنة وفعالة والاستفادة من إمكانات الخدمات
              الحكومية الرقمية الجديدة والشعور بالثقة في البيئة الرقمية بناء
              الشراكات المحلية والدولية لتبادل الخبرات وتبني التجارب الناجحة{" "}
            </p>
          </body>
        </div>
      </div>
    </>
  );
};

export default InitiativeGoals;
