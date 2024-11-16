import Input from "@/components/icons/input";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-black pt-20 px-4">
      {/* Main Footer Content */}
      <div className="flex flex-wrap justify-center text-white items-start gap-10 md:gap-20">
        {/* Subscription Section */}
        <div className="flex flex-col gap-3 max-w-[250px]">
          <h1 className="font-bold text-xl">Exclusive</h1>
          <h3 className="font-semibold text-medium">Subscribe</h3>
          <p>Get 10% off your first order</p>
          <Input />
        </div>

        {/* Support Section */}
        <div className="flex flex-col gap-3 max-w-[250px]">
          <h3 className="font-semibold text-medium">Support</h3>
          <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
          <p>exclusive@gmail.com</p>
          <p>+88015-88888-9999</p>
        </div>

        {/* Account Section */}
        <div className="flex flex-col gap-3 max-w-[250px]">
          <h3 className="font-semibold text-medium">Account</h3>
          <p>My Account</p>
          <p>Login / Register</p>
          <p>Cart</p>
          <p>Wishlist</p>
          <p>Shop</p>
        </div>

        {/* Quick Links Section */}
        <div className="flex flex-col gap-3 max-w-[250px]">
          <h3 className="font-semibold text-medium">Quick Link</h3>
          <p>Privacy Policy</p>
          <p>Terms of Use</p>
          <p>FAQ</p>
          <p>Contact</p>
        </div>

        {/* Download App Section */}
        <div className="flex flex-col gap-3 items-start max-w-[250px]">
          <h3 className="font-semibold text-medium">Download App</h3>
          <p className="text-xs">Save $3 with App New User Only</p>
          <div className="flex items-center gap-3">
            {/* QR Code */}
            <div>
              <Image
                className="cursor-pointer"
                src="/images/qr-code.png"
                width={76}
                height={76}
                alt="QR Code"
              />
            </div>
            {/* App Store and Google Play */}
            <div>
              <Image
                className="cursor-pointer"
                src="/images/googlePlay.png"
                width={104}
                height={30}
                alt="Google Play"
              />
              <Image
                className="cursor-pointer mt-2"
                src="/images/appStore.png"
                width={104}
                height={30}
                alt="App Store"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <p className="text-white text-center pt-20 text-sm">
        &copy; Copyright Rimel 2022. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
