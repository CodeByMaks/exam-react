import React from 'react'
import collegOne from '../../../assets/Ellipse 311.png'
import leng from '../../../assets/“ (1).png'
import { useTranslation } from "react-i18next";
import sell from '../../../assets/Group 380.png'
import ellips311 from '../../../assets/Ellipse 311 (1).png';

const Comments = () => {
    const { t } = useTranslation();
  return (
    <section className="py-11 md:w-[70%] w-[90%] m-auto">
    <h1 className="text-4xl font-bold text-center">{t("Com.client_reviews")}</h1>

    <div className="py-16 flex justify-between">
      <div className="w-[500px] h-[186px] flex items-start gap-7">
        <img src={collegOne} alt="client photo" />
        <div className="flex flex-col items-start gap-6">
          <img src={leng} alt="language icon" />
          <p className="text-gray-500 text-[18px]">{t("Com.review_1_text")}</p>
          <p className="font-bold">{t("Com.review_1_author")}</p>
        </div>
      </div>

      <div className="hidden w-[500px] h-[186px] md:flex items-start gap-7">
        <img src={ellips311} alt="client photo" />
        <div className="flex flex-col items-start gap-6">
          <img src={leng} alt="language icon" />
          <p className="text-gray-500 text-[18px]">{t("Com.review_2_text")}</p>
          <p className="font-bold">{t("Com.review_2_author")}</p>
        </div>
      </div>
    </div>

    <div className="flex justify-center">
      <img src={sell} alt="decorative icon" />
    </div>
  </section>
  )
}

export default Comments