import React from "react";
import Shield from "../UI/Shield";

const InitiativeMechanisms = () => {
  const description =
    "لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمب ايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستري أكسير سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أكس أيا كوممودو كونسيكيوات . ديواس أيوتي أريري دولار إن ريبريهينديرأيت فوليوبتاتي فيلايت أيسسي كايلليوم دولار أيو فيجايت نيولا باراياتيور. أيكسسيبتيور ساينت أوككايكات كيوبايداتات نون بروايدينت ,سيونت ان كيولبا كيو أوفيسيا ديسيريونتموليت انيم أيدي ايست لابوريوم.";
  return (
    <>
      <div className=" flex flex-col gap-8 items-center my-10">
        <h2 className="text-blue-800 text-2xl  font-semibold mx-auto ">
          أليات تنفيذ المبادرة
        </h2>
        <section className="w-4/5">
          <div className="flex flex-col md:flex-row justify-evenly md:gap-8 items-center">
            <p className="md:w-2/3  text-sm text-right order-last md:order-none">
              إتاحة المعرفة المتخصصة عن مفهوم المواطنة الرقمية ومحاورها الأساسية
              وتطبيقاتها والنماذج الناجحة و تمكين المواطنين من الوصول الي
              المعلومات واستخدامها بطريقة آمنة وفعالة والاستفادة من إمكانات
              الخدمات الحكومية الرقمية الجديدة والشعور بالثقة في البيئة الرقمية.
              <h3>أليه التنفيذ:</h3>
              <p>
                الأدوات التكنولوجية عن طريق إتاحة المحتوي الرقمي وضمان الوصول
                الي المصادر المتعلقة ببناء المهارات الرقمية ووسائل الحماية
                والأمان على الإنترنت. و كيفية التأكد من سهولة توافر هذه الوسائل
                الى اصحاب المصلحة و استيعابها و كيفية التعامل معها لفهم محتواها.
                عن طريق انشاء منصة المواطنة الرقمية و الحماية على الانترنت "واعى
                دوت نت". وهو منبر للمعارف المجتمعية يوفر معارف متخصصة باللغة
                العربية للفئات المستهدفة (الأطفال والمراهقون والمعلمون والآباء)
                بشأن الاستخدام المسؤول للتكنولوجيا والسلوك الآمن عبر الإنترنت من
                خلال الربط الشبكي وبناء الشراكات مع أصحاب المصلحة على الصعيد
                الوطني. المستهدف هو الوصول الى 1000 مستفيد عن كريق زيارة الموقع
                و تصفح الخدمات المتوفرة به، و أيضا الاشتراك و عمل حساب على
                الموقع لمتابعة الفعاليات و الأخبار المتعلقة بالحماية على
                الانترنت و المواطنة الرقمية
              </p>
            </p>
            <Shield className="flex flex-col gap-7 items-center text-center border-[1px] shadow-md w-[16rem] h-[18rem] md:h-[230px]  md:w-[210px] px-5 py-3 mb-3 md:mb-0">
              <h2 className="text-blue-800 text-lg font-semibold">معرفة</h2>
              <p className="py-2 text-sm">{`${description.slice(0, 40)}`}</p>
              <img
                src="https://cdn-icons-png.flaticon.com/512/8712/8712116.png"
                alt=""
                className="w-[50%] mx-auto mt-2"
              />
            </Shield>
          </div>
        </section>

        <div className="bg-slate-50 ">
          <section className="w-4/5 mx-auto py-5 ">
            <div className="flex flex-col md:flex-row justify-evenly md:gap-8 items-center ">
              <Shield className="flex flex-col gap-7 items-center text-center border-[1px] shadow-md w-[16rem] h-[18rem] md:h-[230px]  md:w-[210px] px-5 py-3 mb-3 md:mb-03 bg-white">
                <h2 className="text-blue-800 text-lg font-semibold">تدريب</h2>
                <p className="py-2 text-sm">{`${description.slice(0, 40)}`}</p>
                <img
                  src="https://png.pngtree.com/png-vector/20220520/ourmid/pngtree-instructions-to-use-the-vector-icon-png-image_4638887.png"
                  alt=""
                  className="w-[50%] mx-auto"
                />
              </Shield>{" "}
              <p className="md:w-2/3 text-sm text-right ">
                - بناء قدرات المواطنين على استخدام مهارات المواطنة الرقمية من
                خلال خدمات تدريبية وتقديم الدعم الاستشارة عبر الانترنت بالتعاون
                مع مقدمي هذه الخدمات.
                <h3>أليه التنفيذ:</h3>
                <p>
                  • خدمات التوعية والتدريب عن بعد والذي سيتضمن تصميم محتوي
                  تدريبي متخصص، يستهدف بناء مهارات المواطنة الرقمية ومهارات
                  الحماية عبر الانترنت عن طريق خدمة التدريب المتخصص و بناء
                  الكوادر على منصة "واعى دوت نت"، و التى من شأنها أن تحتوى على
                  تدريبات متخصصة للفئات المستهدفة (المعلمين- الأباء- المدربين) و
                  التى سوف تتم بمراكز الشباب و المدارس و المكتبات العامة، و عن
                  طريق مسارات تدريبية ذاتية التعليم. العمل على توفير نماذج و
                  أدلة تدريبية متخصصة طبقا للفئه العمرية و الفئة المستهدفة)
                  للتدرب على مفهوم المواطنة الرقمية و محاورة الاساسية، دليل
                  المؤسسة التعليمية لحماية الطفا على الانترنت و ملخص دليل الأسرة
                  و مقدمى الرعاية للحماية على الانترنت. المستهدف تنفيذ دورات
                  تدريبية لتدريب عدد 200 مدرب و 200 مستفيد
                </p>
              </p>
            </div>
          </section>
        </div>

        <section className="w-4/5">
          <div className="flex flex-col md:flex-row justify-evenly md:gap-8 items-center">
            <p className="md:w-2/3  text-sm text-right order-last md:order-none">
              بناء الشراكات المحلية والدولية لتبادل الخبرات وتبني التجارب
              الناجحة.
              <h3>أليه التنفيذ:</h3>
              <p>
                تطوير الشراكات محليا ودوليا مع الجهات المعنية بما يشمل إنشاء أطر
                عمل مشتركة على المستوى القومي بشأن المواطنة الرقمية على سبيل
                المثال الوزارات المعنية، والمنظمات غير الحكومية، وشركات
                التكنولوجيا والقطاع الخاص. الوصول الى قنوات الدعم و المساندة
                المتاحة من الشركاء على المستوى الوطنى، و عمل منتدى مخصص للشركاء
                لمناقشة المستجدات و عرض قصص النجاح عليه. التشبيك و بناء الشراكات
                و المستهدف هو تفعيل التعاون المشترك مع الجهات ذات الصلة. و تفعيل
                اسهام الجهات الوطنية من حيث المحتوى المعرفى و الخدمات المتخصصة
                للفئات المستهدفة من خلال المنصة المعرفية
              </p>
            </p>
            <Shield className="flex flex-col gap-5 items-center text-center border-[1px] shadow-md w-[16rem] h-[18rem] md:h-[230px]  md:w-[210px] px-5 py-3 mb-3 md:mb-0">
              <h2 className="text-blue-800 text-lg font-semibold">تشبيك</h2>
              <p className="py-2 text-sm">{`${description.slice(0, 40)}`}</p>
              <img
                src="https://png.pngtree.com/png-vector/20220719/ourmid/pngtree-team-communication-icon-communication-illustrations-vector-vector-png-image_38007878.png"
                alt=""
                className="w-[50%] mx-auto"
              />
            </Shield>{" "}
          </div>
        </section>
      </div>
    </>
  );
};

export default InitiativeMechanisms;
