import React from 'react'
import Header from '../../layout/header';
import Footer from '../../layout/footer';
import social from "../../../assets/facebook-logo (1) (1).png";
import instagram from '../../../assets/instagram-logo.png';
import linkedin from '../../../assets/linkedin-logo 1.png';
import telegramm from '../../../assets/instagram-logo (1).png';
import Comments from '../../layout/section/comment';
import mac from '../../../assets/Mackbook Pro Mockup 2.png';
import bulb from '../../../assets/bulb 1.png';
import group455 from '../../../assets/Group 455.png';
import map from '../../../assets/map.png';
import group763 from '../../../assets/Group 763.png';
import usa from '../../../assets/image 20.png';
import group1002 from '../../../assets/Group 1002.png';
import group1014 from '../../../assets/Group 1014.png';
import cell from '../../../assets/cell.png';
import { useTranslation } from "react-i18next";

const Service = () => {
  const { t } = useTranslation();
  return (
    <>
      <Header />

      <section className="bg-[#141B23] rounded-b-[10%]">
        <div className="w-[70%] m-auto py-4">
          <h1 className="text-gray-500">{t("SecNext.breadcrumb.utility_bills")}</h1>
        </div>

        <div className="w-[70%] m-auto block md:flex gap-18 justify-between py-10">
          <div className="text-white w-full md:w-[50%] text-center md:text-left flex flex-col items-start gap-12">
            <h1 className="md:text-4xl text-2xl font-bold">
              {t("SecNext.utility_bills.title")}
            </h1>

          <p className="text-[20px] text-gray-400">{t("SecNext.utility_bills.description")}</p>

          <button className="bg-amber-600 py-2 md:px-6 px-16 rounded">
            ➡️ {t("SecNext.buttons.get_started")}
          </button>

          <div className="hidden md:flex gap-3">
            <img src={social} alt="Social Media" />
            <img src={instagram} alt="Instagram" />
            <img src={linkedin} alt="LinkedIn" />
            <img src={telegramm} alt="Telegram" />
          </div>
          </div>

            <div className="mt-15 md:mt-0">
              <img src={mac} alt="Macbook Mockup" />
            </div>
          </div>

          <div className="text-center text-white">
            <h1>{t("SecNext.scroll")}</h1>
            <p>|</p>
          </div>
    </section>

    <section className="px-6 md:px-16 py-12">
      <h2 className="text-2xl lg:text-4xl font-bold text-center mt-10 mb-8">
        {t("documents.title")}
      </h2>

      <div className="flex flex-col dark:text-black md:flex-row justify-center items-center gap-6">
       
        <div className="space-y-6">
          <div className="bg-white shadow-lg rounded-2xl p-6 flex items-center gap-4">
            <img src={bulb} className="w-10 h-10" />
            <span className="font-semibold">{t("documents.electricity_bill")}</span>
          </div>
          <div className="bg-white shadow-lg md:mr-11 rounded-2xl p-6 flex items-center gap-4">
            <img src={bulb} className="w-10 h-10" />
            <span className="font-semibold">{t("documents.gas_water_bill")}</span>
          </div>
          <div className="bg-white shadow-lg rounded-2xl p-6 flex items-center gap-4">
            <img src={bulb} className="w-10 h-10" />
            <span className="font-semibold">{t("documents.internet_bill")}</span>
          </div>
        </div>

        <div className="flex justify-center">
          <img src={group455} />
        </div>

        <div className="space-y-6">
          <div className="bg-white shadow-lg rounded-2xl p-6 flex items-center gap-4">
            <img src={bulb} className="w-10 h-10" />
            <span className="font-semibold">{t("documents.rapidity")}</span>
          </div>
          <div className="bg-white shadow-lg rounded-2xl p-6 md:ml-10 flex items-center gap-4">
            <img src={bulb} className="w-10 h-10" />
            <span className="font-semibold">{t("documents.english_language")}</span>
          </div>
          <div className="bg-white shadow-lg rounded-2xl p-6 flex items-center gap-4">
            <img src={bulb} className="w-10 h-10" />
            <span className="font-semibold">{t("documents.manual")}</span>
          </div>
        </div>
      </div>
    </section>

    <section className="lg:mb-16 mb-6">
      <div className="w-[70%] m-auto flex flex-col lg:mt-20 lg:flex-row items-center max-w-4xl mx-auto p-4">
        <div className="lg:w-1/2 flex justify-center">
          <img src={map} alt="map" className="lg:mr-20 h-auto" />
        </div>

        <div className="lg:w-[80%] p-6">
          <h2 className="text-2xl lg:text-4xl font-bold mb-4">
            {t("request.title")}
          </h2>
          <p className="text-[#889196] lg:text-[20px] mb-6">
            {t("request.subtitle")}
          </p>

          <form className="space-y-4">
            <div>
              <input
                type="email"
                placeholder={t("request.email_placeholder")}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder={t("request.phone_placeholder")}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder={t("request.message_placeholder")}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <button className="w-[300px] bg-orange-500 text-white py-2 rounded-md font-semibold hover:bg-orange-600 transition">
              {t("request.send_button")}
            </button>
          </form>
        </div>
      </div>
    </section>

    <section className="px-6 md:px-16 py-12 space-y-12">

      <div className="flex flex-col md:flex-row lg:justify-center items-center gap-1">
        <div className="md:w-1/2 lg:ml-[17%] text-center lg:w-[500px] md:text-left">
          <h2 className="text-4xl font-bold mb-6">{t("invoices.title1")}</h2>
          <p className="text-[#889196] text-[20px] mb-6">{t("invoices.description1")}</p>
          <button className="bg-orange-500 text-white py-2 px-11 rounded shadow-md">
            {t("invoices.button1")}
          </button>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img src={group763} alt="Invoice" />
        </div>
      </div>

      <div className="dark:bg-[#222F3E] bg-white flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2 lg:w-[450px] lg:ml-[18%] lg:mt-20 lg:mb-20 text-center md:text-left">
          <h2 className="text-2xl lg:text-[29px] font-bold mb-4">{t("invoices.title2")}</h2>
          <p className="text-[#889196]">{t("invoices.description2")}</p>
          <br />
          <p className="text-[#889196] mt-2">{t("invoices.description3")}</p>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img src={usa} alt="USA Map" className="dark:opacity-40" />
        </div>
      </div>
    </section>

    <section className="px-6 md:px-16 py-12 m-auto text-center">
      <h2 className="text-4xl font-bold mb-4">{t("invoiceUnlock.title")}</h2>
      <p className="text-[#889196] max-w-1xl mx-auto mb-8">
        {t("invoiceUnlock.description")}
      </p>
      <div className="w-[70%] m-auto grid grid-cols-1 md:grid-cols-3 gap-1">
        <div className="flex mt-10 flex-col items-center justify-self-center text-center">
          <img src={group1002} alt="Account" className="mb-4" />
          <p className="text-[#889196] text-sm mt-2">{t("invoiceUnlock.account")}</p>
        </div>
        <div className="flex mt-10 flex-col items-center text-center">
          <img src={group1002} alt="Listing" className="mb-4" />
          <p className="text-[#889196] text-sm mt-2">{t("invoiceUnlock.listing")}</p>
        </div>
        <div className="flex mt-10 flex-col items-center text-center">
          <img src={group1002} alt="Category" className="mb-4" />
          <p className="text-[#889196] text-sm mt-2">{t("invoiceUnlock.category")}</p>
        </div>
      </div>
    </section>

    <section className="px-6 md:px-16 py-12 flex flex-col md:flex-row items-center gap-8">
      <img src={group1014} alt="Amazon Call" className="md:w-1/2" />
      <div className="md:w-1/2 text-center lg:w-[400px] md:text-left">
        <h2 className="text-2xl lg:text-3xl lg:my-[50px] font-bold mb-4">
          {t("amazonCall.title")}
        </h2>
        <p className="text-[#889196] text-[20px] lg:w-[400px]">
          {t("amazonCall.description")}
        </p>
      </div>
    </section>

    <section>
      <div className="flex flex-col md:mb-14 mb-6 lg:mt-20 lg:flex-row items-center max-w-4xl mx-auto p-4">
        <div className="lg:w-1/2 p-6">
          <h2 className="text-2xl lg:text-4xl font-bold mb-4">
            {t("utilityBill.title")}
          </h2>
          <p className="text-[#889196] lg:text-[20px] mb-6">
            {t("utilityBill.description")}
          </p>

          <form className="space-y-4">
            <div>
              <input
                type="email"
                placeholder={t("utilityBill.emailPlaceholder")}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder={t("utilityBill.phonePlaceholder")}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder={t("utilityBill.messagePlaceholder")}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <button className="w-full bg-orange-500 text-white py-2 rounded-md font-semibold hover:bg-orange-600 transition">
              {t("utilityBill.sendButton")}
            </button>
          </form>
        </div>
        <div className="lg:w-1/2 flex justify-center">
          <img src={cell} alt="map" className=" lg:ml-20 h-auto" />
        </div>
      </div>
    </section>

      <Comments />

      <Footer />
    </>
  )
}

export default Service