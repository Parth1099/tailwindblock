import { ErrorMessage, Field, Form, Formik } from "formik";
import Image from "next/image";
import React from "react";
import * as Yup from "yup";
import ContactImg from "../../public/assets/common/contactImg.svg";

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(70, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  message: Yup.string().required("Required"),
});

const Contact = () => {
  return (
    <div className="w-full max-w-7xl mx-auto bg-[rgba(54,92,206,0.08)] backdrop:blur-sm py-14 px-5 sm:px-8 md:px-10 xl:px-28 rounded-lg flex flex-col gap-6 md:gap-12 items-center justify-center">
      <div className="flex flex-col md:gap-2">
        <h2 className="font-semibold  text-xl sm:text-3xl md:text-4xl xl:text-5xl leadin-[59px] leading-tight text-black opacity-80">
          Contact Us
        </h2>
        <div className="w-5 md:w-12 border md:border-2 border-[#365CCE] rounded-lg"></div>
      </div>
      <div className="grid grid-col-1 md:grid-cols-2 place-items-center w-full">
        <div className="relative hidden md:block w-full">
          <Image src={ContactImg} alt="contact-image" priority />
        </div>
        <div className="w-full">
          <Formik
            initialValues={{
              name: "",
              email: "",
              message: "",
            }}
            validationSchema={SignupSchema}
            onSubmit={(values) => {
              // same shape as initial values
              console.log(values);
            }}
          >
            {({ errors, touched }) => (
              <Form className="flex flex-col gap-7 w-full">
                <div>
                  <Field
                    name="name"
                    className="bg-[#F1F5FD] w-full rounded-lg py-3 pl-3 border border-[#75A0E5]"
                    placeholder="Full Name"
                  />
                  <span className="text-red-500">
                    <ErrorMessage name="name" />
                  </span>
                </div>
                <div>
                  <Field
                    name="email"
                    type="email"
                    className="bg-[#F1F5FD] w-full rounded-lg py-3 pl-3 border border-[#75A0E5]"
                    placeholder="Email"
                  />
                  <span className="text-red-500">
                    <ErrorMessage name="email" />
                  </span>
                </div>
                <div>
                  <Field
                    as="textarea"
                    name="message"
                    className="bg-[#F1F5FD] w-full rounded-lg py-3 pl-3 border border-[#75A0E5]"
                    placeholder="message"
                    rows="5"
                  />
                  <span className="text-red-500">
                    <ErrorMessage name="message" />
                  </span>
                </div>
                <button
                  className="bg-contactBtn hover:scale-105 py-3 font-normal text-lg text-white rounded w-full max-w-[117px]"
                  type="submit"
                >
                  Submit
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Contact;
