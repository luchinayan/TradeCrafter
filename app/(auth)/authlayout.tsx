"use client";
import Image from "next/image";
import imgBgLogin from "../../public/bg-login.png";
import CloudQueueIcon from "@mui/icons-material/CloudQueue";
import Link from "next/link";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const loginSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

const AuthLayout = ({ type }: any) => {
  const handleSubmit = (values: any, { setSubmitting }: any) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  };
  return (
    <div className="flex max-h-screen overflow-clip">
      <div className="w-1/3 bg-neutral-b-2">
        <Link href={"/"} className="text-white absolute m-12 text-2xl">
          <CloudQueueIcon color="primary" /> TradeCrafter
        </Link>
        <Image src={imgBgLogin} alt="imglogin"></Image>
      </div>

      <div className="w-full ">
        <div className="flex m-8 justify-end items-end ">
          {type === "Sign In" ? (
            <>
              <div className="font-bold">Don’t have an account?</div>
              <Link
                className="block text-primary-blue w-32 ml-2 hover:font-semibold"
                href="/signup">
                Sign Up for free
              </Link>
            </>
          ) : (
            <>
              <div className="font-bold">Already have an account?</div>
              <Link
                className=" text-primary-blue w-16 ml-2 hover:font-semibold"
                href="/signin">
                Sign In
              </Link>
            </>
          )}
        </div>
        <div className="flex justify-start mt-40 h-full flex-col items-center">
          <div className="text-5xl mb-12 font-semibold">{type}</div>
          <div className="w-1/3">
            <Formik
              initialValues={{ email: "", password: "" }}
              validationSchema={loginSchema}
              onSubmit={handleSubmit}>
              {({ isSubmitting }) => {
                return (
                  <Form className="flex  flex-col">
                    <label className="mb-8">
                      <div className="text-neutral-s-1">Email:</div>
                      <Field
                        className="border w-full p-2 border-neutral-s-2 rounded-xl mt-2 "
                        type="email"
                        name="email"
                      />
                      <ErrorMessage
                        name="email"
                        className="text-red-600"
                        component="div"
                      />
                    </label>
                    <label className="mb-8">
                      <div className="text-neutral-s-1">Password:</div>
                      <Field
                        className="border w-full p-2 border-neutral-s-2 rounded-xl mt-2 "
                        type="password"
                        name="password"
                      />
                      <ErrorMessage
                        name="password"
                        className="text-red-600"
                        component="div"
                      />
                    </label>
                    <button
                      className=" bg-primary-blue p-4 rounded-3xl text-white text-xl transform
                        transition duration-200  hover:scale-105"
                      type="submit"
                      disabled={isSubmitting}>
                      Submit
                    </button>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
