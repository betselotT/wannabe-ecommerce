import Input from "@/components/icons/input";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-black pt-20">
      <div className="flex text-white justify-center items-start gap-20">
        <div className="flex flex-col gap-3">
          <h1 className="font-bold text-xl">Exclusive</h1>
          <h3 className="font-semibold text-medium">Subscribe</h3>
          <p>Get 10% off your first order</p>
          <Input />
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="font-semibold text-medium">Support</h3>
          <p className="w-[175px]">
            111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
          </p>
          <p>exclusive@gmail.com</p>
          <p>+88015-88888-9999</p>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="font-semibold text-medium">Account</h3>
          <p>My Account</p>
          <p>Login / Register</p>
          <p>Cart</p>
          <p>Wishlist</p>
          <p>Shop</p>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="font-semibold text-medium">Quick Link</h3>
          <p>Privacy Policy</p>
          <p>Terms of Use</p>
          <p>FAQ</p>
          <p>Contact</p>
        </div>
        <div className="flex flex-col gap-3 items-start">
          <h3 className="font-semibold text-medium">Download App</h3>
          <p className="text-xs">Save $3 with App New User Only</p>
          <div className="flex justify-center items-center gap-3">
            <div>
              <Image
                className="cursor-pointer"
                src="/images/qr-code.png"
                width={76}
                height={76}
                alt="Picture of the home page"
              />
            </div>
            <div>
              <Image
                className="cursor-pointer"
                src="/images/googlePlay.png"
                width={104}
                height={30}
                alt="Picture of the home page"
              />
              <Image
                className="cursor-pointer"
                src="/images/appStore.png"
                width={104}
                height={30}
                alt="Picture of the home page"
              />
            </div>
          </div>
        </div>
      </div>
      <p className="text-white flex justify-center pt-20">
        &copy; Copyright Rimel 2022. All right reserved
      </p>
    </div>
  );
};

export default Footer;
