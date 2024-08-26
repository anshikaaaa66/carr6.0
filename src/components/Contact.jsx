import React from "react";
import InputForm from "./InputForm";
import { Form } from "./ui/form";

const Contact = ({ form }) => {
  return (
    <div className="bg-gradient-to-br from-gray-800 to-black min-h-screen flex items-center justify-center">
      <div className="grid grid-cols-1 gap-5 mx-10 md:mx-[10%] my-10">
        <Form {...form}>
          <form className="w-full bg-gray-900 p-5 shadow-lg border border-gray-700 rounded-lg">
            <div className="flex flex-wrap">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <InputForm
                  id="firstname"
                  label="First Name"
                  control={form.control}
                  type="text"
                  placeholder="Enter your first name"
                  className="bg-gray-800 text-white border-gray-600"
                />
              </div>
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <InputForm
                  id="lastname"
                  label="Last Name"
                  control={form.control}
                  type="text"
                  placeholder="Enter your last name"
                  className="bg-gray-800 text-white border-gray-600"
                />
              </div>
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <InputForm
                  id="email"
                  label="Email"
                  control={form.control}
                  type="email"
                  placeholder="Enter your email"
                  className="bg-gray-800 text-white border-gray-600"
                />
              </div>
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <InputForm
                  id="phoneNumber"
                  label="Phone Number"
                  control={form.control}
                  type="number"
                  placeholder="Enter your Phone Number"
                  className="bg-gray-800 text-white border-gray-600"
                />
              </div>
              <div className="w-full px-3 mb-6 md:mb-0">
                <InputForm
                  id="comment"
                  label="Comment"
                  control={form.control}
                  type="text"
                  placeholder="Enter a Comment"
                  className="bg-gray-800 text-white border-gray-600"
                />
              </div>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Contact;
