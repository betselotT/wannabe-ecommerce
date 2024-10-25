import Base from "@/components/base";
import Hero from "@/components/hero";
import Phone from "@/components/icons/phone";
import React from "react";
import Form from "./_components/form";
import Mail from "@/components/icons/mail";
import Footer from "../../components/footer";

const Contact = () => {
  return (
    <div>
      {/* Navbar Section */}
      <Base />
      <div className="mt-10">
        <Hero />
      </div>

      {/* Contacts Section */}
      <div className="pt-20 pl-36">
        <p>
          <span className="text-gray-500">Home /</span>{" "}
          <span className="font-semibold">Contact</span>
        </p>
      </div>
      <div className="flex justify-center items-start gap-28 pt-28 pl-40">
        <div className="flex flex-col items-start gap-3">
          <div className="flex gap-3 items-center">
            <div className="bg-[#db4444] rounded-full w-5 h-5 p-5 flex justify-center items-center">
              <Phone />
            </div>
            <p className="font-bold">Call To Us</p>
          </div>
          <p>We are available 24/7, 7 days a week.</p>
          <p>Phone: +8801611112222</p>
          <hr className="bg-[#bebfc5] w-[270px] h-[2px] mt-5 mb-5" />
          <div className="flex gap-3 items-center">
            <div className="bg-[#db4444] rounded-full w-5 h-5 p-5 flex justify-center items-center">
              <Mail />
            </div>
            <p className="font-bold">Write To Us</p>
          </div>
          <p className="w-[250px]">
            Fill out our form and we will contact you within 24 hours.
          </p>
          <p>Emails: customer@exclusive.com</p>
          <p>Emails: support@exclusive.com</p>
        </div>
        <div>
          <Form />
        </div>
      </div>
      {/* Footer  */}
      <div className="mt-32">
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
