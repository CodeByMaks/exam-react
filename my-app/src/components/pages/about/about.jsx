import React from 'react'
import Header from '../../layout/header';
import Footer from '../../layout/footer';
import HeaderComp from '../../../components/layout/section/headerComp';
import infoImg from '../../../assets/information 1.png';
import polygonTwo from '../../../assets/Polygon 19 (1).png';
import InpSection from '../../layout/section/inpSection';
import Comments from '../../layout/section/comment';
import phone from '../../../assets/325262 1.png';
import message from '../../../assets/message 1.png';
import numbOne from '../../../assets/Group 370.png';
import { useTranslation } from "react-i18next";
import groupB from '../../../assets/Group 371.png';
import groupC from '../../../assets/Group 372.png';
import groupS from '../../../assets/Group 373.png';
import group1013 from '../../../assets/Group 1013.png';
import fivez from '../../../assets/Group 667.png';
import sixx from '../../../assets/Group 668.png';
import arrowRow from '../../../assets/Group 543.png'
import group509 from '../../../assets/Group 509.png';

const About = () => {
  const { t } = useTranslation();

  const steps = [
    { img: numbOne, title: "Job.step_1_title", description: "Job.step_1_description" },
    { img: groupB, title: "Job.step_2_title", description: "Job.step_2_description" },
    { img: groupC, title: "Job.step_3_title", description: "Job.step_3_description" },
    { img: groupS, title: "Job.step_4_title", description: "Job.step_4_description" },
    { img: fivez, title: "Job.step_5_title", description: "Job.step_5_description" },
    { img: sixx, title: "Job.step_6_title", description: "Job.step_6_description" }
  ];

  return (
    <>
      <Header />
      <HeaderComp />

      <section className='md:w-[70%] w-[90%] m-auto md:py-28 py-11 flex flex-col-reverse md:flex-row justify-between gap-10'>
          <div>
            <img src={phone} alt="" />
          </div>
          <div>
            <h1 className='text-4xl font-bold'>{t("Chel.evaluation_workflow")}</h1>
            <div className='py-6'>
              <div className='md:w-[599px] h-[205] shadow-2xl flex items-center gap-5 py-10 rounded-2xl px-8'>
                <img src={message} alt="" />
                <div>
                  <h1 className='font-bold text-2xl'>{t("Chel.submit_valuation_request")}</h1>
                  <p className='text-gray-500 py-3'>{t("Chel.submit_valuation_request_description")}</p>
                </div>
              </div>
              <div className='md:w-[599px] h-[205] shadow-2xl flex items-center gap-5 py-10 rounded-2xl px-8'>
                <img src={message} alt="" />
                <div>
                  <h1 className='font-bold text-2xl'>{t("Chel.we_get_to_know_each_other")}</h1>
                  <p className='text-gray-500 py-3'>{t("Chel.we_get_to_know_each_other_description")}</p>
                </div>
              </div>
              <div className='md:w-[599px] h-[205] shadow-2xl flex items-center gap-5 py-10 rounded-2xl px-8'>
                <img src={message} alt="" />
                <div>
                  <h1 className='font-bold text-2xl'>{t("Chel.we_suggest_fair_price")}</h1>
                  <p className='text-gray-500 py-3'>{t("Chel.we_suggest_fair_price_description")}</p>
                </div>
              </div>
          </div>
        </div>
      </section>

      <section className=" w-[90%] sm:w-[80%] m-auto flex flex-col lg:flex-row justify-between py-[100px] ">
          <div className="lg:w-[50%]">
          <h1 className="text-3xl font-bold mb-4">
            {t("Gul.evaluation_tool_title")}
          </h1>
          <p className="text-gray-600 mb-8">
            {t("Gul.evaluation_tool_description")}
          </p>
          <div className="flex flex-col gap-6 mb-12">
            <div className="flex items-center gap-3">
              <img src={numbOne} className="w-14" />
              <p>{t("Gul.step_one_title")}</p>
            </div>
            <div className="flex items-start gap-3">
              <img src={groupB} className="w-14" />
              <p>{t("Gul.step_two_title")}</p>
            </div>
            <div className="flex items-start gap-3">
              <img src={groupC} className="w-14" />
              <p>{t("Gul.step_three_title")}</p>
            </div>
            <div className="flex items-start gap-3">
              <img src={groupS} className="w-14" />
              <p>{t("Gul.step_four_title")}</p>
            </div>
          </div>
        </div>

          <div className="relative dark:text-black bg-white border-gray-200 border p-[30px] bg-linear-to-b from-[#EFF5F9] to-[#FEFFFF] rounded-lg sm:w-[37%]">
          <h2 className="text-2xl font-bold mb-6">{t("Hel.evaluation_tool_title")}</h2>
          <div>
            <div>
              <label className="block mb-3 font-medium">{t("Hel.account_registration_date")}</label>
              <div className="flex gap-1 border-black border-2 justify-evenly rounded-sm">
                {t("Hel.years", { returnObjects: true }).map((year) => (
                  <button key={year} className="p-[5px] bg-white rounded-md">
                    {year}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block font-medium mt-3">{t("Hel.customer_feedbacks")}</label>
              <div className="flex gap-1 border-black border-2 justify-evenly rounded-sm">
                {t("Hel.feedback_counts", { returnObjects: true }).map((count) => (
                  <button key={count} className="p-[5px] bg-white rounded-md">
                    {count}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block mt-5 font-medium">{t("Hel.marketplace_location")}</label>
              <div className="flex justify-evenly border-2 rounded-sm mt-[5px]">
                {t("Hel.marketplaces", { returnObjects: true }).map((market) => (
                  <button key={market} className="p-[5px] sm:px-20">
                    {market}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block mt-5 font-medium">{t("Hel.policy_violations")}</label>
              <div className="flex justify-evenly border-2 rounded-sm mt-[5px]">
                {t("Hel.policy_answers", { returnObjects: true }).map((answer) => (
                  <button key={answer} className="p-[5px] sm:px-20">
                    {answer}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block mt-5 font-medium">{t("Hel.email_address")}</label>
              <input
                type="email"
                placeholder={t("Hel.email_placeholder")}
                className="w-full p-3 mt-2 border rounded-md outline-none"
              />
            </div>

            <button className="w-full bg-[#EC6D0F] mt-5 text-white py-3">
              {t("Hel.get_evaluation")}
            </button>
          </div>
          <img className='absolute top-[-10%] z-[-1] right-0 md:right-[-15%]' src={polygonTwo} alt="" />
        </div>
      </section>

      <section className='md:w-[60%] w-[90%] m-auto block md:flex md:py-28 py-11 justify-between gap-3'>
        <div>
          <img src={group1013} alt="" />
        </div>
        <div className="relative">
      <h1 className="text-2xl font-bold">{t("Job.transfer_process_title")}</h1>

      <div className="py-8">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center gap-3">
            <img src={step.img} alt="" />
            <div>
              <h1 className="text-xl font-bold">{t(step.title)}</h1>
              <p className="py-2">{t(step.description)}</p>
            </div>
          </div>
        ))}
      </div>

      {[25, 38, 50, 64, 78].map((top, index) => (
        <img key={index} className="md:block hidden absolute z-[-1] left-[5.5%]" style={{ top: `${top}%` }} src={arrowRow} alt="" />
      ))}
    </div>
      </section>

      <section className="w-[90%] md:w-[60%] m-auto flex flex-col gap-6 items-center text-center">
        <h1 className="text-2xl md:text-3xl font-bold">
          {t("Lom.account_transfer_title")}
          <br className="hidden md:block" />
        </h1>

        <p className="text-gray-500 text-lg md:text-xl">{t("Lom.account_transfer_description")}</p>

        <div className="w-full flex flex-col md:flex-row justify-between gap-4">
          {[
            { key: "Lom.business_details" },
            { key: "Lom.credit_card" },
            { key: "Lom.bank_details" },
            { key: "Lom.address" },
            { key: "Lom.phone_number" }
          ].map(({ key }) => (
            <div key={key} className="flex flex-col items-center gap-3">
              <img src={group509} alt={t(key)} className="w-16 h-16 md:w-auto md:h-auto" />
              <p className="text-sm md:text-base">{t(key)}</p>
            </div>
          ))}
        </div>
    </section>
      <InpSection />
      <Comments />

      <section className="relative z-20 py-20">
        <h2 className="font-bold mt-20 text-4xl text-center">{t("Faq.faq_title")}</h2>
        <div className="dark:text-black relative flex justify-between bg-white lg:w-[50%] w-[90%] mt-10 rounded-2xl items-center m-auto p-4 border border-gray-200">
          <div className="flex items-start gap-4">
            <img src={infoImg} alt="Info" />
            <div>
              <p className="font-bold">{t("Faq.general_inquiries")}</p>
              <p className="text-sm">{t("Faq.general_inquiries_description")}</p>
            </div>
          </div>
          <p className="text-2xl">⟱</p>
        </div>
        <img className="absolute top-[35%] md:right-[20%] right-0 z-[-1]" src={polygonTwo} alt="" />
    </section>

      <Footer />
    </>
  )
}

export default About;