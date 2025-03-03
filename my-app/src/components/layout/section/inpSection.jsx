import React from 'react'
import girl from '../../../assets/1231242112 1.png';
import { useTranslation } from "react-i18next";

const InpSection = () => {
    const { t } = useTranslation();
  return (
    <section className="dark:bg-[#222F3E] w-full md:h-[698px] bg-white my-11 md:my-28">
      <div className="w-[70%] mx-auto dark:bg-[#222F3E] bg-white rounded-lg overflow-hidden">
        <div className="flex flex-col-reverse md:flex-row items-center gap-5 py-11">
          <div>
            <img src={girl} alt="request form illustration" />
          </div>
          <div className="md:w-1/2 p-6">
            <h2 className="text-2xl font-bold mb-4">{t("Comment.leave_request")}</h2>
            <p className="text-gray-600 dark:text-white text-2xl mb-6">{t("Comment.leave_request_desc")}</p>

            <div className="mb-4">
              <label className="block text-gray-700 mb-2">{t("Comment.email_label")}</label>
              <input 
                type="email" 
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                placeholder={t("Comment.email_placeholder")} 
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 mb-2">{t("Comment.phone_label")}</label>
              <input 
                type="tel" 
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                placeholder={t("Comment.phone_placeholder")} 
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 mb-2">{t("Comment.message_label")}</label>
              <textarea 
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                rows="4" 
                placeholder={t("Comment.message_placeholder")}
              ></textarea>
            </div>

            <button type="submit" className="w-full bg-amber-600 text-white px-4 py-3 rounded-lg">
              {t("Comment.send_button")}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InpSection