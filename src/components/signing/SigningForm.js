import React from "react";
import { useLocation } from "react-router";
// import {  useNavigate } from "react-router";
import { User } from "../../utils/Icons";
import backGround from "../../assets/images/back-ground.avif";
import Button from "../UI/Button";
import { Link } from "react-router-dom";
import SigningSchema from "../../models/SigningSchema";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const SigningForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    // reset,
    // setError,
  } = useForm({
    resolver: yupResolver(SigningSchema),
  });

  //usenavigate
  // const navigate = useNavigate();

  const { pathname } = useLocation();
  //   console.log(pathname);
  const mode = pathname === "/sign-in" ? "signin" : "signup";
  console.log(mode);
  //   console.log(pathname);
  const onSubmitHandler = async (data) => {
    console.log(data);
  };
  return (
    // <>{mode === "signin" ? <div>Signing In</div> : <div>Signing up</div>}</>

    <div
      style={{ backgroundImage: `url(${backGround})` }}
      className="bg-opacity-50 bg-black "
    >
      <section className=" ms-full  flex flex-col justify-evenly gap-8 pt-8 pb-2 w-1/3 border h-[85vh] text-center ml-auto bg-white shadow-md">
        <header>Logo</header>
        <form className="" onSubmit={handleSubmit(onSubmitHandler)}>
          {/* title and user logo */}
          <div className="flex flex-col gap-2 mb-3 ">
            <div className="text-white mx-auto w-fit px-2 py-3 bg-blue-700  hover:bg-blue-500  rounded-ss-[80px] rounded-se-[80px] rounded-es-[50px] rounded-ee-[50px] p-1">
              {User}
            </div>
            <h2 className="text-xl text-blue-700 font-semibold ">تسجيل دخول</h2>
          </div>
          <div className="flex flex-col gap-5 py-5 px-5">
            {/* user name */}
            <div className="flex justify-between gap-5">
              {/* family name input */}
              {mode === "signup" && (
                <div>
                  <input
                    id="lastName"
                    {...register("lastName", { required: true })}
                    type="text"
                    placeholder="أسم العائلة "
                    className="border-2 border-blue-700 rounded-xl text-right w-full mx-1 pe-5 py-1 text-gray-900 placeholder:text-gray-400 placeholder:text-sm focus:ring-blue-500 focus:border-blue-500  "
                  />
                </div>
              )}

              {/* first name input */}
              {mode === "signup" && (
                <div>
                  <input
                    id="firstName"
                    {...register("firstName", { required: true })}
                    type="text"
                    placeholder=" الأسم الأول"
                    className="border-2 border-blue-700 rounded-xl text-right w-full mx-1 pe-5 py-1 text-gray-900 placeholder:text-gray-400 placeholder:text-sm focus:ring-blue-500 focus:border-blue-500  "
                  />
                </div>
              )}
            </div>
            <div className="flex justify-between gap-5">
              <p className="text-red-500  text-[12px]">
                {errors.lastName?.message}
              </p>
              <p className="text-red-500  text-[12px]">
                {errors.firstName?.message}
              </p>
            </div>
            {/* email input */}
            <div>
              <input
                id="email"
                {...register("email", { required: true })}
                type="text"
                placeholder="البريد الألكترونى"
                className="border-2 border-blue-700 rounded-xl text-right w-full mx-1 pe-5 py-1 text-gray-900 placeholder:text-gray-400 placeholder:text-sm focus:ring-blue-500 focus:border-blue-500  "
              />
            </div>
            {/* mobile number input */}
            {mode === "signup" && (
              <div>
                <input
                  id="phoneNumber"
                  {...register("phoneNumber", { required: true })}
                  type="text"
                  placeholder=" رقم التليفون"
                  className="border-2 border-blue-700 rounded-xl text-right w-full mx-1 pe-5 py-1 text-gray-900 placeholder:text-gray-400 placeholder:text-sm focus:ring-blue-500 focus:border-blue-500  "
                />
              </div>
            )}

            {/* password input */}
            <div>
              <input
                id="password"
                {...register("password", { required: true })}
                type="password"
                placeholder=" كلمة المرور"
                className="border-2 border-blue-700 rounded-xl text-right w-full mx-1 pe-5 py-1 text-gray-900 placeholder:text-gray-400 placeholder:text-sm focus:ring-blue-500 focus:border-blue-500 "
              />
            </div>
            {/* password confirmation input */}
            {mode === "signup" && (
              <div>
                <input
                  id="confirmPassword"
                  {...register("confirmPassword", { required: true })}
                  type="password"
                  placeholder=" تأكيد كلمة المرور"
                  className="border-2 border-blue-700 rounded-xl text-right w-full mx-1 pe-5 py-1 text-gray-900 placeholder:text-gray-400 placeholder:text-sm focus:ring-blue-500 focus:border-blue-500 "
                />
              </div>
            )}
            {mode === "signup" && (
              <div className="flex justify-between items-center py-3 px-2">
                <Button type="submit" className="">
                  انشي حساب
                </Button>
                <Link
                  to="/sign-in"
                  className="text-[12px] text-blue-700 border-b-[1px] border-blue-700 hover:translate-x-1"
                >
                  تسجيل دخول{" "}
                </Link>
              </div>
            )}
            {mode === "signin" && (
              <>
                <div className="text-left ms-2">
                  <Button type="submit" className="">
                    تسجيل
                  </Button>
                </div>

                <div className="flex justify-between items-center py-3 px-2">
                  <Link
                    to="/sign-up"
                    className="text-[12px] text-blue-700 border-b-[1px] border-blue-700 hover:translate-x-1"
                  >
                    أنشاء حساب
                  </Link>
                  <Link
                    to=""
                    className="text-[12px] text-teal-400 border-b-[1px] border-teal-400 hover:translate-x-1"
                  >
                    نسيت كلمه المرور ؟
                  </Link>
                </div>
              </>
            )}
          </div>
        </form>
      </section>
    </div>
  );
};

export default SigningForm;
