import React from "react";
import { useTranslation } from "react-i18next";
import mac from "../../../assets/Mackbook Pro Mockup 1.png";
import social from "../../../assets/facebook-logo (1) (1).png";
import instagram from '../../../assets/instagram-logo.png';
import linkedin from '../../../assets/linkedin-logo 1.png';
import telegramm from '../../../assets/instagram-logo (1).png';

const HeaderComp = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-[#141B23] rounded-b-[10%]">
      <div className="w-[70%] m-auto block md:flex justify-between py-10">
        <div className="text-white w-full md:w-[40%] text-center md:text-left flex flex-col items-start gap-12">
          <h1 className="md:text-4xl text-2xl font-bold">
            {t("Headers.startSelling")}
          </h1>

          <p className="text-[20px] text-gray-400">{t("Headers.details")}</p>

          <button className="bg-amber-600 py-2 md:px-6 px-16 rounded">
            ➡️ {t("Headers.getStarted")}
          </button>

          <div className="hidden md:flex gap-3">
            <img src={social} alt="Social Media" />
            <img src={instagram} alt="Social Media" />
            <img src={linkedin} alt="Social Media" />
            <img src={telegramm} alt="Social Media" />
          </div>
        </div>
        <div className="mt-15 md:mt-0">
          <img src={mac} alt="Macbook Mockup" />
        </div>
      </div>
      <div className="text-center text-white">
        <h1>{t("Headers.scroll")}</h1>
        <p>|</p>
      </div>
    </section>
  );
};

export default HeaderComp;